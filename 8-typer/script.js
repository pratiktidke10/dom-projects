const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingDelay = 200;
const erasingDelay = 100;
const newWordDelay = 2000;

function type() {
    const currentWord = words[wordIndex];

    if (!isDeleting){
        typedTextSpan.textContent += currentWord.charAt(charIndex);
        charIndex++;

        if (charIndex === currentWord.length){
            setTimeout(() => (isDeleting = true), newWordDelay);
        }
    }
    else {
        typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0){
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }
    setTimeout(type, isDeleting ? erasingDelay : typingDelay);
}

document.addEventListener('DOMContentLoaded', type);


