//BMI calculator script

const form = document.querySelector('form');

form.addEventListener('submit' , function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === "" || height < 0 || isNaN(height)){
        results.innerHTML = "Please give valid height"
    }
    if(weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give valid weight"
    }
        
    const bmi =(weight / ((height / 100) ** 2)).toFixed(2);

    let message = '';

    if (bmi < 18.6){
        message = "Under weight"
    }
    else if (bmi>= 18.6 && bmi<=24.9){
        message = "Normal range"
    }
    else{
        "Overweight"
    }

    results.innerHTML = `<span>${bmi}<br> Status: ${message}</span>`
})