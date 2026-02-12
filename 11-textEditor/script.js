const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");

const upperCaseBtn = document.querySelector(".uppercase");
const lowerCaseBtn = document.querySelector(".lowercase");
const capBtn = document.querySelector(".capitalize");
const boldBtn = document.querySelector(".bold");
const italicBtn = document.querySelector(".italic");
const underlineBtn = document.querySelector(".underline");

inputField.addEventListener("input" , () => {
    outputField.textContent = inputField.value;
});

upperCaseBtn.addEventListener("click" , () => {
    outputField.textContent = inputField.value.toUpperCase();
});

lowerCaseBtn.addEventListener("click" , () => {
    outputField.textContent = inputField.value.toLowerCase();
});

capBtn.addEventListener("click" , ()=> {
    const text = inputField.value;
    if (text.length === 0) return;

    const result = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    outputField.textContent = result;
});

boldBtn.addEventListener("click" , ()=>{
    outputField.style.fontWeight = 
        outputField.style.fontWeight === 'bold'?'normal':'bold';
});

italicBtn.addEventListener('click', () => {
  outputField.style.fontStyle =
    outputField.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

underlineBtn.addEventListener('click', ()=> {
    outputField.style.textDecoration = 
        outputField.style.textDecoration === 'underline' ? 'normal' : 'underline';
});
