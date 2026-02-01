//change color on clicking button

const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach((btn) => {
    btn.addEventListener('click' , () => {
        document.body.style.backgroundColor = btn.id;
    });
});
