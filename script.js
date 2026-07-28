// Responsive Landing Page
// JavaScript
// Navbar color change on scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});
const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
// Contact Form Validation
const button = document.querySelector("button");

button.addEventListener("click", function (event) {

    event.preventDefault();

    const name = document.querySelector("input[type='text']").value.trim();

    const email = document.querySelector("input[type='email']").value.trim();

    const message = document.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Please fill all fields.");

        return;

    }

    if (!email.includes("@")) {

        alert("Enter a valid email address.");

        return;

    }

    alert("Message sent successfully!");

    document.querySelector("input[type='text']").value = "";
    document.querySelector("input[type='email']").value = "";
    document.querySelector("textarea").value = "";

});
const heroButton = document.querySelector(".btn");

heroButton.addEventListener("mouseenter", () => {

    heroButton.style.transform = "scale(1.05)";

});

heroButton.addEventListener("mouseleave", () => {

    heroButton.style.transform = "scale(1)";

});
window.onload = function () {

    console.log("Welcome to the Responsive Landing Page!");

};