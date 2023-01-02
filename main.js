const burgerBtn = document.querySelector(".fa-bars");
const header = document.querySelector("header")
const content = document.querySelector(".content-main");
const sidebar = document.querySelector("aside");
const miniLogo = document.querySelector(".min-logo")



burgerBtn.addEventListener("click", () => {
    
    header.classList.toggle("nav-to-side");
    miniLogo.classList.toggle("hide-logo");
    content.classList.toggle("darken-content");
    sidebar.classList.toggle("side-open");
    sidebar.classList.toggle("side-hidden");

})

content.addEventListener("click", (e) => {
    if (e.target != sidebar && sidebar.classList.contains("side-open") == true) {
        header.classList.toggle("nav-to-side")
        miniLogo.classList.toggle("hide-logo")
        content.classList.toggle("darken-content")
        sidebar.classList.toggle("side-open")
        sidebar.classList.toggle("side-hidden")
    }
})