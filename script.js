var typed = new Typed("#typing", {

    strings: [
        "AI & ML Student",
        "Full Stack Developer",
        "Frontend Developer"
    ],

    typeSpeed: 70,
    backSpeed: 45,
    backDelay: 1500,
    loop: true
});

function toggleMenu(){
    document.getElementById("menu").classList.toggle("active");
}