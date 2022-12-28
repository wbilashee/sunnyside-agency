const body = document.querySelector("body");
const header = document.querySelector(".header");
const fadeItems = document.querySelectorAll(".has-fade");
const headerToggle = document.querySelector(".header__toggle");

headerToggle.addEventListener("click", function () {
    if (header.classList.contains("open")) { // Close Hamburger Menu
        body.classList.remove("noscroll");
        header.classList.remove("open");
        fadeItems.forEach(function (element) {
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        });
    }
    else { // Open Hamburger Menu
        body.classList.add("noscroll");
        header.classList.add("open");
        fadeItems.forEach(function (element) {
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        });
    }
});

const links = document.querySelectorAll("a[href='#']");
links.forEach(link => link.addEventListener("click", (e) => {
    e.preventDefault();
}));