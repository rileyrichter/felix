const navbar = document.getElementById("navbar");
const main = document.getElementById("main");
const navComponent = document.getElementById("nav-component");

const mainOptions = {
  rootMargin: "-65% 0px 0px 0px",
};

const mainObserver = new IntersectionObserver(function (entries, mainObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navComponent.classList.add("tall-nav");
      navbar.classList.add("slim");
    } else {
      navComponent.classList.remove("tall-nav");
      navbar.classList.remove("slim");
    }
  });
}, mainOptions);

mainObserver.observe(main);
