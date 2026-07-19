const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

const header = document.querySelector(".header");
const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector(".nav-links");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 50);
});

menuButton?.addEventListener("click", () => {
    navigation?.classList.toggle("active");

    const icon = menuButton.querySelector("i");

    if (navigation?.classList.contains("active")) {
        icon?.classList.replace("fa-bars", "fa-xmark");
        document.body.style.overflow = "hidden";
    } else {
        icon?.classList.replace("fa-xmark", "fa-bars");
        document.body.style.overflow = "";
    }
});

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navigation?.classList.remove("active");

        const icon = menuButton?.querySelector("i");
        icon?.classList.replace("fa-xmark", "fa-bars");

        document.body.style.overflow = "";
    });
});