document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.querySelector(".typing");
    const words = ["an Engineer .", "a Web Developer .", "a Problem Solver ."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex--);
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 1000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 200;
        } else {
            typingSpeed = isDeleting ? 50 : 100;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
});
