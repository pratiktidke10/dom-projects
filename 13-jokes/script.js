
const jokeBtn = document.querySelector("#getJoke");
const displayJoke = document.querySelector("#display-joke");

const apiURL = "https://api.chucknorris.io/jokes/random";

jokeBtn.addEventListener('click' , getJoke);

async function getJoke() {
    displayJoke.textContent = "Loading Joke.......🤔";
    
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        displayJoke.textContent = data.value;
    } catch (error) {
        displayJoke.textContent = "Failed";
        console.error(error);
    }
};
