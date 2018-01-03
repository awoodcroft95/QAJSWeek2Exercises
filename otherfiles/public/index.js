import { getStarWarsOutput } from "./starWarsAPI.js";

function loadStarWars(event){
    if (event.keyCode === 13) {
        const inputID = document.getElementById("userInput").value;
        getStarWarsOutput(inputID);
        return false;
    }
}

//Expose functions so theyre accessible in html page

window.loadStarWars = loadStarWars;