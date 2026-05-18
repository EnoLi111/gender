// ===============================
// SCROLL FADE ANIMATION
// ===============================

const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }

    });

}, {
    threshold: 0.2
});

fadeElements.forEach(el => {
    observer.observe(el);
});




// ===============================
// PROCESS TABS
// ===============================

const processButtons = document.querySelectorAll('.process-buttons button');
const processCards = document.querySelectorAll('.process-card');

processButtons.forEach(button => {

    button.addEventListener('click', () => {

        const target = button.dataset.target;

        // remove active class
        processButtons.forEach(btn => {
            btn.classList.remove('active-tab');
        });

        processCards.forEach(card => {
            card.classList.remove('active');
        });

        // add active class
        button.classList.add('active-tab');

        document.getElementById(target).classList.add('active');

    });

});




// ===============================
// NAVBAR BACKGROUND ON SCROLL
// ===============================

const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(239,231,226,0.95)";
        navbar.style.boxShadow = "0 4px 25px rgba(0,0,0,0.08)";

    } else {

        navbar.style.background = "rgba(239,231,226,0.88)";
        navbar.style.boxShadow = "none";

    }

});




// ===============================
// PARALLAX HERO EFFECT
// ===============================

const ribbons = document.querySelectorAll('.floating-ribbon');

window.addEventListener('scroll', () => {

    const scrollY = window.scrollY;

    ribbons.forEach((ribbon, index) => {

        const speed = (index + 1) * 0.15;

        ribbon.style.transform = `
            translateY(${scrollY * speed}px)
            rotate(${scrollY * 0.02}deg)
        `;

    });

});




// ===============================
// SMOOTH SECTION SCROLL
// ===============================

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {

    link.addEventListener('click', (e) => {

        e.preventDefault();

        const targetID = link.getAttribute('href');
        const targetSection = document.querySelector(targetID);

        window.scrollTo({
            top: targetSection.offsetTop - 100,
            behavior: 'smooth'
        });

    });

});




// ===============================
// HOVER IMAGE EFFECT
// ===============================

const methodCards = document.querySelectorAll('.method-card');

methodCards.forEach(card => {

    card.addEventListener('mousemove', (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = ((y / rect.height) - 0.5) * -10;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
        `;

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
        `;

    });

});




// ===============================
// AUTO SCROLL METHODS SLIDER
// ===============================

const slider = document.querySelector('.methods-slider');

let autoScroll;

function startAutoScroll(){

    autoScroll = setInterval(() => {

        slider.scrollBy({
            left: 320,
            behavior: 'smooth'
        });

        // reset slider
        if(slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10){

            slider.scrollTo({
                left: 0,
                behavior: 'smooth'
            });

        }

    }, 4000);

}

if(slider){

    startAutoScroll();

    slider.addEventListener('mouseenter', () => {
        clearInterval(autoScroll);
    });

    slider.addEventListener('mouseleave', () => {
        startAutoScroll();
    });

}




// ===============================
// FLOATING CARD MOTION
// ===============================

const floatingCards = document.querySelectorAll('.floating-card');

window.addEventListener('mousemove', (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    floatingCards.forEach((card, index) => {

        const moveX = (x - 0.5) * (20 + index * 10);
        const moveY = (y - 0.5) * (20 + index * 10);

        card.style.transform = `
            translate(${moveX}px, ${moveY}px)
        `;

    });

});




// ===============================
// HERO IMAGE ZOOM ON SCROLL
// ===============================

const heroImage = document.querySelector('.office-image');

window.addEventListener('scroll', () => {

    if(heroImage){

        const scale = 1 + window.scrollY * 0.00015;

        heroImage.style.transform = `scale(${scale})`;

    }

});




// ===============================
// PROCESS SECTION APPEAR
// ===============================

const processSection = document.querySelector('.process-section');

window.addEventListener('scroll', () => {

    if(!processSection) return;

    const sectionTop = processSection.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;

    if(scrollPosition > sectionTop + 100){

        processSection.style.opacity = "1";
        processSection.style.transform = "translateY(0px)";

    }

});




// ===============================
// INITIAL PROCESS STYLE
// ===============================

if(processSection){

    processSection.style.opacity = "0";
    processSection.style.transform = "translateY(80px)";
    processSection.style.transition = "1s ease";

}




// ===============================
// METHODS CARD CLICK ANIMATION
// ===============================

methodCards.forEach(card => {

    card.addEventListener('click', () => {

        card.style.transition = "0.2s";

        card.style.transform = "scale(0.96)";

        setTimeout(() => {

            card.style.transform = "scale(1)";

        }, 180);

    });

});




// ===============================
// LOADING ANIMATION
// ===============================

window.addEventListener('load', () => {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";
document.body.style.transition = "opacity 1s ease";




// ===============================
// MOBILE MENU FUTURE READY
// ===============================

console.log("Gender Equity website fully loaded.");
