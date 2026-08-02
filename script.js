var typed = new Typed("#typing", {

    strings: [

        "AI & ML Student",

        "Full Stack Developer",

        "Frontend Developer",

        "Machine Learning Enthusiast"

    ],

    typeSpeed: 70,

    backSpeed: 40,

    backDelay: 1500,

    loop: true

});
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}