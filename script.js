const home = document.querySelector('.home');
const aboutMe = document.querySelector('.about');
const education = document.querySelector('.education');
const skill = document.querySelector('.skill');
const contact = document.querySelector('.contact');

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        smoothScrollTo(targetSection);
    });
});

function smoothScrollTo(target) {
    if (!target) return;
    const start = window.scrollX;
    const end = target.offsetLeft;
    const distance = end - start;
    const duration = 1000;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutQuad(progress);
        window.scrollTo(start + (distance * ease), 0);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
}

function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}
