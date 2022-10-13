const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener ('click', () => {
    //toggle Nave    
        nav.classList.toggle('nav-active');

    //animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) { //---this way animation mobile navbar stays
                link.style.animation = '';
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
            }
        });   
    //burger animation
    burger.classList.toggle('toggle');

    });


    var navbar = document.getElementById("navbar");
    var menu = document.getElementById("menu");

    window.onscroll = function () {
        if(window.pageYOffset >= menu.offsetTop) {
            navbar.classList.add("sticky");
        }
        else {
            navbar.classList.remove("sticky");
        }
    }

}    

navSlide();



