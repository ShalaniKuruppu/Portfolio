/**typing animation*** */

var typed =new Typed(".typing",{
    strings: ["Software Engineer","Photographer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


document.querySelectorAll('.nav li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav li a.active').classList.remove('active');
        this.classList.add('active');
    });
});