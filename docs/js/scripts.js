/*!
* Start Bootstrap - Mark Hazleton Blog v9.0.1 (https://github.com/controlorigins/markhazleton-blog)
* Copyright 2013-2024 Mark Hazleton (https://markhazleton.controlorigins.com)
* Licensed under MIT (https://github.com/StartBootstrap/markhazleton-blog/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector("#sideNav");
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#sideNav",
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });

    var myAccordion = new bootstrap.Collapse(document.getElementById('accordionArticles'), {
        toggle: false // This prevents the default behavior of toggling an item when clicked
      });

});
