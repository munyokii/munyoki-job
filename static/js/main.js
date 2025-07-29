$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Software Engineer", "Full-Stack Developer", "Freelance Developer", "Cybersecurity Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Software Engineer", "Full-Stack Developer", "Freelance Developer", "Cybersecurity Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

const projectsData = [
    {
        id: 1,
        title: "Crime Reporting System",
        description: "A web-based system for reporting and tracking criminal activities.",
        imageUrl: "/static/images/crime.webp",
        projectLink: "https://crimereportsystem.onrender.com/"
    },
    {
        id: 2,
        title: "DigiCraft Website",
        description: "DigiCraft Software Company Website",
        imageUrl: "/static/images/digicraft.webp",
        projectLink: "https://digicrafts.co.ke/"
    },
];

let currentIndex = 0;

function createProjectSlide(project) {
    return `
        <div class="project-slide">
            <img src="${project.imageUrl}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.projectLink}" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
    `;
}

function renderProjects() {
    const container = document.getElementById('slideshow-container');
    container.innerHTML = projectsData.map(createProjectSlide).join('') +
        '<button class="nav-button prev" onclick="changeSlide(-1)">&#10094;</button>' +
        '<button class="nav-button next" onclick="changeSlide(1)">&#10095;</button>';
    showSlide(currentIndex);
}

function showSlide(index) {
    const slides = document.getElementsByClassName('project-slide');
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[currentIndex].style.display = 'block';
}

function changeSlide(n) {
    showSlide(currentIndex += n);
}

function autoSlide() {
    changeSlide(1);
    setTimeout(autoSlide, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    autoSlide();
});