/**
 * Navigation JS
 * Handles the navigation menu on mobile.
 */

// Runs when page is fully loaded
window.addEventListener('DOMContentLoaded', () => {

    // Init variables
    let navBarBreakpoint = 1024;
    let navBar = document.querySelector('.NavBar');
    let navBarNav = document.querySelector('.NavBarNav');
    let documentContainer = document.querySelector('.Container');
    let hamburgerButton = document.querySelector('.hamburger');

    function calcMobileMenu() {

        // Check if window is larger than the breakpoint
        if (window.innerWidth > navBarBreakpoint - 1) {

            // Check if this is using the landing template
            if (navBar.classList.contains('NavBar__regular') == false) {

                // Hide dark navbar when not on mobile
                navBar.classList.remove('NavBar__dark');
            }

            // Do the things to reset navbar for desktop
            hamburgerButton.classList.remove('is-active');
            navBarNav.classList.remove('Show');
            documentContainer.classList.remove('Blur');
        } else {

            // Check if this is using the landing template
            if (navBar.classList.contains('NavBar__regular') == false) {

                // Show dark navbar when on mobile
                navBar.classList.add('NavBar__dark');
            }
        }
    }

    // Open mobile nav when mobile hamburger is tapped
    hamburgerButton.addEventListener('click', () => {

        // Do the things to open/close the mobile navbar
        hamburgerButton.classList.toggle('is-active');
        navBarNav.classList.toggle('Show');
        documentContainer.classList.toggle('Blur');
    });

    // Check for window resize to remove mobile nav if needed
    window.addEventListener('resize', () => {
        calcMobileMenu()
    });

    // Display mobile menu on load if needed
    calcMobileMenu();

});
