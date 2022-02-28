const header = document.querySelector("header");
const main = document.querySelector("main");
const burger = document.querySelector(".burger");
const countDown = document.querySelector("#countdown");
const registerForm = document.querySelector("form");

let menuOpen = false;

const swapClass = (el, boole, classTrue, classFalse = "") => {
  if (boole) {
    el.classList.remove(classFalse);
    el.classList.add(classTrue);
  } else {
    el.classList.remove(classTrue);
    el.classList.add(classFalse);
  }
};

document.addEventListener("scroll", (e) => {
  swapClass(
    header,
    window.scrollY > 200,
    "header-opaque",
    "header-transparent"
  );
});

burger.addEventListener("click", () => {
  menuOpen = !menuOpen;
  swapClass(header, menuOpen, "menu-open", "menu-closed");
});

var countDownDate = new Date("March 9, 2022 10:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countDown.innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Competition finished";
  }
}, 1000);

registerForm.addEventListener("submit", (e) => {
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const phone = document.querySelector("#phone");
  const dob = document.querySelector("#dob");
  const skill = document.querySelector("#skill");

  const maxDOB = new Date("Jan 1, 2002 10:00:00").getTime();
  const filledDOB = new Date(dob.value).getTime();

  const error = document.querySelector("#error");
  const success = document.querySelector("#success");

  error.innerHTML = "";
  if (name.value.length < 2) {
    error.innerHTML = "Name Length cannot be less than 3 characters";
    e.preventDefault();
    return false;
  }
  if (email.value.length < 2) {
    error.innerHTML = "Not a valid email";
    e.preventDefault();
    return false;
  }
  if (phone.value.length !== 10) {
    error.innerHTML = "Not a valid phone number";
    e.preventDefault();
    return false;
  }
  if (filledDOB > maxDOB) {
    error.innerHTML = "DOB should be less than Jan 1, 2002";
    e.preventDefault();
    return false;
  }
  e.preventDefault();
  success.innerHTML = `You have been registered for "${
    skill.options[skill.selectedIndex].innerHTML
  }"`;
  // return true;
});
