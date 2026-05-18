// =========================
// SCROLL FADE ANIMATION
// =========================

const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }

  });

}, {
  threshold:0.15
});

fadeElements.forEach((el) => {
  observer.observe(el);
});


// =========================
// NAVBAR EFFECT
// =========================

const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {

  if(window.scrollY > 50){

    navbar.style.padding = '18px 8%';
    navbar.style.background = 'rgba(246,243,239,0.96)';
    navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.04)';

  }

  else{

    navbar.style.padding = '26px 8%';
    navbar.style.background = 'rgba(246,243,239,0.92)';
    navbar.style.boxShadow = 'none';

  }

});


// =========================
// HERO PARALLAX EFFECT
// =========================

const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {

  let scrollPosition = window.pageYOffset;

  hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';

});


// =========================
// SMOOTH CARD ANIMATION
// =========================

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {

  card.addEventListener('mousemove', (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 20);
    const rotateY = ((centerX - x) / 20);

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

  });

  card.addEventListener('mouseleave', () => {

    card.style.transform = 'rotateX(0) rotateY(0) translateY(0)';

  });

});


// =========================
// TEXT REVEAL EFFECT
// =========================

const bigText = document.querySelectorAll('.big-text');

bigText.forEach((text) => {

  text.classList.add('fade-up');

});


// =========================
// IMAGE FADE-IN EFFECT
// =========================

const images = document.querySelectorAll('img');

images.forEach((img) => {

  img.classList.add('fade-up');

});