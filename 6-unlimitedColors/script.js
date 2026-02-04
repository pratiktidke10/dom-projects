
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');

let intervalId = null;

function randomColor(){
    const hex = '0123456789ABCDEF'
    let color = '#'

    for (let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

startBtn.addEventListener('click' , function(){

    if(!intervalId){
        intervalId = setInterval(function(){
            document.body.style.backgroundColor = randomColor();
        },1000);
    }
});

stopBtn.addEventListener('click' , function(){
    clearInterval(intervalId);
    intervalId = null;
});