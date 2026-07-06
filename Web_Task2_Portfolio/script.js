// Current Year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// Typing Effect
const typing = document.getElementById("typing");
const words = [
    "Frontend Developer",
    "UI/UX Designer",
    "Web Developer",
    "Creative Learner"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, letterIndex);

        letterIndex++;

        if (letterIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, letterIndex);

        letterIndex--;

        if (letterIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) 
            {

                wordIndex = 0;

            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();

// Reveal Animation
const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(function (section) {

        const windowHeight = window.innerHeight;

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 120) {

            section.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealSections);
revealSections();

// Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach(function(counter){

    const updateCounter = () => {

        const target = Number(counter.dataset.target);

        const current = Number(counter.innerText);

        const increment = Math.ceil(target / 80);

        if(current < target){

            counter.innerText = current + increment;

            setTimeout(updateCounter,30);

        }else{

            counter.innerText = target;

        }

    }

    updateCounter();

});


// Scroll Progress Bar
window.addEventListener("scroll", function () {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";

});


// Back To Top Button


const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// Dark Mode


const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.classList.remove("fa-moon");

        themeBtn.classList.add("fa-sun");

    } else {

        themeBtn.classList.remove("fa-sun");

        themeBtn.classList.add("fa-moon");

    }

});


// Active Navigation


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function(section){

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(function(link){

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});