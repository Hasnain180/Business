
// let mobile_nav = document.querySelector('.mobile-nav-btn')
// let nav_toggle = document.querySelector('.nav')

// let toggleNavbar = () =>{
//     // alert("play a game")
//     nav_toggle.classList.toggle("active")
// }


// mobile_nav.addEventListener("click", () => toggleNavbar ());


let mobile_nav = document.querySelector('.mobile-nav-btn');
let nav_toggle = document.querySelector('.nav');
let menu_icon = document.querySelector('.mobile-nav-btn i');

let toggleNavbar = () => {
    nav_toggle.classList.toggle("active");
    menu_icon.classList.toggle("bx-menu");
    menu_icon.classList.toggle("bx-window-close");
};

mobile_nav.addEventListener("click", toggleNavbar);



