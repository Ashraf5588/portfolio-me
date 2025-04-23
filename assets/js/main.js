/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}
showMenu('nav-toggle','nav-menu');

/*===== ACTIVE AND REMOVE MENU =====*/
const navLinks = document.querySelectorAll('.nav__link');   

function linkAction() {
    // Active link
    navLinks.forEach(n => n.classList.remove('active-link'));
    this.classList.add('active-link');
    
    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLinks.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{});
sr.reveal('.button',{delay: 200});
sr.reveal('.home__img',{delay: 400});
sr.reveal('.home__social-icon',{ interval: 200});

/*SCROLL ABOUT*/
sr.reveal('.about__img',{});
sr.reveal('.about__subtitle',{delay: 200});
sr.reveal('.about__text',{delay: 400});

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{});
sr.reveal('.skills__text',{delay: 200});
sr.reveal('.skills__data',{interval: 100});
sr.reveal('.skills__img',{delay: 400});

/*SCROLL WORK*/
sr.reveal('.work__card',{interval: 200});

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200});

/*===== TYPED.JS ANIMATION =====*/
document.addEventListener('DOMContentLoaded', function() {
    if(window.Typed) {
        let options = {
            strings: ['Web Developer', 'Freelancer', 'Teacher'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        };
        
        const typed = new Typed('.home__title-animate', options);
    }
});

/* ===== SCROLL HEADER EFFECT ===== */
window.addEventListener('scroll', function() {
    const header = document.querySelector('.l-header');
    // When scroll is greater than 80vh, add the scroll-header class
    if(this.scrollY >= 80) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
});

/* ===== PROJECT FILTER ===== */
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.work__filter-button');
    
    if(filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                const items = document.querySelectorAll('.work__card');
                
                items.forEach(item => {
                    if(filterValue === 'all') {
                        item.style.display = 'block';
                    } else if(item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
});
