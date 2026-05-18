// ===============================
// ADVANCED INTERACTIVE WEBSITE
// Gender Equality Project
// ===============================


// ===============================
// FADE UP ANIMATION
// ===============================

const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('active');

        }

    });

}, {
    threshold: 0.15
});

fadeElements.forEach(el => observer.observe(el));



// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        nav.style.padding = '18px 7%';
        nav.style.background = 'rgba(239,231,223,0.95)';
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';

    } else {

        nav.style.padding = '28px 7%';
        nav.style.background = 'rgba(239,231,223,0.82)';
        nav.style.boxShadow = 'none';

    }

});



// ===============================
// HERO IMAGE FLOATING EFFECT
// ===============================

const heroImage = document.querySelector('.hero-image img');

window.addEventListener('scroll', () => {

    const scrollY = window.scrollY;

    if(heroImage){

        heroImage.style.transform = `translateY(${scrollY * -0.08}px)`;

    }

});



// ===============================
// PROCESS TABS
// ===============================

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {

    button.addEventListener('click', () => {

        const tab = button.dataset.tab;

        tabContents.forEach(content => {

            content.classList.remove('active');

        });

        document.getElementById(tab).classList.add('active');

    });

});



// ===============================
// 3D CARD EFFECT
// ===============================

const cards = document.querySelectorAll('.process-card');

cards.forEach(card => {

    card.addEventListener('mousemove', (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 30);
        const rotateY = ((centerX - x) / 30);

        card.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.02)
        `;

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = `
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;

    });

});



// ===============================
// METHODS SLIDER DRAG EFFECT
// ===============================

const slider = document.querySelector('.methods-slider');

let isDown = false;
let startX;
let scrollLeft;

if(slider){

slider.addEventListener('mousedown', (e) => {

    isDown = true;

    slider.classList.add('active');

    startX = e.pageX - slider.offsetLeft;

    scrollLeft = slider.scrollLeft;

});

slider.addEventListener('mouseleave', () => {

    isDown = false;

});

slider.addEventListener('mouseup', () => {

    isDown = false;

});

slider.addEventListener('mousemove', (e) => {

    if(!isDown) return;

    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;

    const walk = (x - startX) * 2;

    slider.scrollLeft = scrollLeft - walk;

});

}



// ===============================
// SMOOTH SECTION REVEAL
// ===============================

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){

            section.style.opacity = '1';
            section.style.transform = 'translateY(0px)';

        }

    });

});



// ===============================
// CURSOR GLOW EFFECT
// ===============================

const glow = document.createElement('div');

glow.style.width = '200px';
glow.style.height = '200px';

glow.style.position = 'fixed';

glow.style.background = 'rgba(109,80,255,0.12)';

glow.style.borderRadius = '50%';

glow.style.pointerEvents = 'none';

glow.style.filter = 'blur(40px)';

glow.style.zIndex = '0';

glow.style.transform = 'translate(-50%, -50%)';

document.body.appendChild(glow);

window.addEventListener('mousemove', (e) => {

    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';

});



// ===============================
// AUTO ACTIVE TAB
// ===============================

let currentTab = 0;

setInterval(() => {

    const buttons = document.querySelectorAll('.tab-button');

    currentTab++;

    if(currentTab >= buttons.length){

        currentTab = 0;

    }

    buttons[currentTab].click();

}, 7000);



// ===============================
// FLOATING IMAGE ANIMATION
// ===============================

const floatingImages = document.querySelectorAll('.process-image img');

floatingImages.forEach((img, index) => {

    let direction = 1;

    setInterval(() => {

        direction *= -1;

        img.style.transform = `translateY(${direction * 12}px)`;

    }, 2500 + index * 500);

});



// ===============================
// TEXT PARALLAX EFFECT
// ===============================

const heroTitle = document.querySelector('.hero-left h1');

window.addEventListener('scroll', () => {

    if(heroTitle){

        heroTitle.style.transform = `
            translateY(${window.scrollY * 0.12}px)
        `;

    }

});



// ===============================
// LOADING ANIMATION
// ===============================

window.addEventListener('load', () => {

    document.body.style.opacity = '1';

});
