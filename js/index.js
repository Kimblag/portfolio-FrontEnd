var nav = document.querySelector(".main_nav");
var mobileToggle = document.querySelector(".mobile-toggle");

window.onscroll = () => {
  if (window.scrollY > 300) {
    // console.log(window.scrollY);
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

/* Mobile Navigation */

const openNav = () => {
  if (nav.classList.contains("open-nav")) {
    nav.classList.remove("open-nav");
  } else {
    nav.classList.add("open-nav");
  }
};


document.querySelectorAll('.smoothscroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});