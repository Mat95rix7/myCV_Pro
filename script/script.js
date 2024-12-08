document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmation').classList.remove('d-none');
    setTimeout(() => {
        document.getElementById('confirmation').classList.add('d-none');
    }, 3000);
});


// Animation de défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Animation des sections au défilement
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

// Animation légère sur les compétences
const skills = document.querySelectorAll('#skills li');
skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.transform = 'scale(1.1)';
        skill.style.transition = 'transform 0.3s ease';
    });
    skill.addEventListener('mouseout', () => {
        skill.style.transform = 'scale(1)';
    });
});

// Confirmation de formulaire avec animation
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const confirmation = document.getElementById('confirmation');
    confirmation.classList.remove('d-none');
    confirmation.classList.add('fade-in');

    setTimeout(() => {
        confirmation.classList.remove('fade-in');
        confirmation.classList.add('fade-out');
    }, 3000);

    setTimeout(() => {
        confirmation.classList.add('d-none');
        confirmation.classList.remove('fade-out');
    }, 3500);
});

// Animation au chargement de la page
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('header, section, footer');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, index * 150); // Délai progressif pour chaque élément
    });
});

// Barre de progression pour les compétences
const skillBars = document.querySelectorAll('.progress-bar');
const skillObserverOptions = {
    threshold: 0.5
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const targetWidth = bar.getAttribute('data-width');
            bar.style.width = targetWidth;
            skillObserver.unobserve(bar);
        }
    });
}, skillObserverOptions);

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});


// Survol des sections principales
sections.forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.backgroundColor = '#f8f9fa';
        section.style.transition = 'background-color 0.3s ease';
    });
    section.addEventListener('mouseout', () => {
        section.style.backgroundColor = '';
    });
});


// Effet machine à écrire pour le slogan
function typewriterEffect(element, text, delay = 50) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, delay);
        }
    }
    type();
}
const tagline = document.querySelector('header p');
typewriterEffect(tagline, "La meilleure destination pour développer votre propre application.");

// Effet de parallaxe sur l'image de l'en-tête
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});

// Animation au survol des boutons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.2s ease';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// Animation des sections en cascade
const cascadeElements = document.querySelectorAll('section *');
cascadeElements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
});

const observerCascade = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observerCascade.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

cascadeElements.forEach(el => {
    observerCascade.observe(el);
});

// Animation de la photo de profil suivant la souris
const profileImg = document.getElementById('profil');
window.addEventListener('mousemove', (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 20;
    const y = (e.clientY - window.innerHeight / 2) / 20;
    profileImg.style.transform = `translate(${x}px, ${y}px)`;
});

// Animation de confirmation avec bulle rebondissante
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const confirmation = document.getElementById('confirmation');
    confirmation.classList.remove('d-none');
    confirmation.classList.add('fade-in');

    const bubble = document.createElement('div');
    bubble.classList.add('notification-bubble');
    bubble.textContent = '✔';
    confirmation.appendChild(bubble);

    setTimeout(() => {
        confirmation.classList.remove('fade-in');
        confirmation.classList.add('fade-out');
    }, 3000);

    setTimeout(() => {
        confirmation.classList.add('d-none');
        confirmation.classList.remove('fade-out');
        bubble.remove();
    }, 3500);
});

function setProgress(circleId, percentage) {
    const circle = document.getElementById(circleId);
    const circumference = 2 * Math.PI * 50; // 2 * π * r
    const offset = circumference - (percentage / 100) * circumference;
    circle.style.strokeDashoffset = offset;
}

setProgress("circle-french", 90);
setProgress("circle-english", 60);
setProgress("circle-arabic", 100);