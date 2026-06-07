const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });
}


// pop up van contact formulier 

// const form = document.getElementById("contact-form");

// form.addEventListener("submit", async function(e) {
//   e.preventDefault(); // voorkomt redirect

//   const data = new FormData(form);

//   const response = await fetch(form.action, {
//     method: form.method,
//     body: data,
//     headers: {
//       'Accept': 'application/json'
//     }
//   });

//   if (response.ok) {
//     showPopup("Your message has been sent!");
//     form.reset();
//   } else {
//     showPopup("Oops! Something went wrong.");
//   }
// });

// function showPopup(message) {
//   const popup = document.createElement("div");
//   popup.classList.add("popup");
//   popup.innerText = message;

//   document.body.appendChild(popup);

//   setTimeout(() => {
//     popup.classList.add("show");
//   }, 10);

//   setTimeout(() => {
//     popup.classList.remove("show");
//     setTimeout(() => popup.remove(), 300);
//   }, 3000);
// }