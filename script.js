let logo = document.getElementById("headerLogo");
logo.onclick = () => {
    window.scroll(0, 0);
};

let body = document.body;
let themeConatainer = document.getElementById("themeContainer");
let heroImg = document.getElementById("heroImg");
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    themeConatainer.classList.add("dark");
    heroImg.classList.add("show");
}
// function for dark and light theme
function themeChange() {
    if (localStorage.getItem("theme") === "dark") {
        body.classList.remove("dark");
        themeConatainer.classList.remove("dark");
        heroImg.classList.remove("show");
        localStorage.setItem("theme", null);
    } else {
        body.classList.add("dark");
        themeConatainer.classList.add("dark");
        heroImg.classList.add("show");
        localStorage.setItem("theme", "dark");
    }
}

// Nav bar
let navbar = document.getElementById("navBar");
let nav = document.querySelector("nav");

function navBar() {
    navbar.classList.toggle("navBarActive");

    if (navbar.classList.contains("navBarActive")) {
        document.addEventListener("click", (event) => {
            if (!nav.contains(event.target) && !navbar.contains(event.target)) {
                navbar.classList.remove("navBarActive");
            }
        });
    }
}

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector("header nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });
};
