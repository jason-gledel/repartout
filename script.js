// script.js



//DROPDOWN

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');

        // Ajoute un écouteur d'événement pour le clic sur .dropbtn ou .anotherClass
        dropbtn.addEventListener('click', function() {
            toggleDropdown(dropdowns, dropdown);
        });

        // Si vous souhaitez ajouter une autre classe à .dropbtn, par exemple "anotherClass"
        dropbtn.classList.add('arrowDown');
    });


    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }
    });

    function toggleDropdown(dropdowns, dropdown) {
        dropdowns.forEach(dd => {
            if (dd !== dropdown) {
                dd.classList.remove('show');
            }
        });
        dropdown.classList.toggle('show');
    }
});



// CLOSE DIV

document.addEventListener('DOMContentLoaded', (event) => {
    const closeBtn = document.getElementById('closeBtn');
    const myDiv = document.getElementById('modelAspi');

    closeBtn.addEventListener('click', () => {
        myDiv.style.display = 'none';
    });
});






const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");
const bgOpac = document.querySelector(".bg-opacite");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("noscroll");
    bgOpac.classList.toggle("active");
}




const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    body.classList.remove("noscroll");
    hamburger.classList.remove("activeHam");
}





