const url = "https://swapi.co/api/people/";

async function getCharacterDetails(id) {
    console.log(`${url}${id}`);
    let response = await fetch(`${url}${id}?format=json`);
    let data = await response.json();
    return data;
}

async function getHomeWorld(homeWorldURL) {
    let response = await fetch(homeWorldURL);
    let world = await response.json();
    return world;
}

function niceCharacterObject(jsonCharacterObj) {
    let charObj = {};
    charObj.name = jsonCharacterObj.name;
    charObj.height = jsonCharacterObj.height;
    charObj.mass = jsonCharacterObj.mass;
    charObj.gender = jsonCharacterObj.gender;
    charObj.birthYear = jsonCharacterObj.birth_year;
    charObj.homeWorld = jsonCharacterObj.homeworld;
    return charObj;
}

function clearData() {
    document.getElementById("characterDetails").innerHTML = "";
}

export function getStarWarsOutput(id) {
    clearData();


    let starPromise = Promise.resolve(getCharacterDetails(id));
    starPromise.then((charJsonObj) => {
        let characterObj = niceCharacterObject(charJsonObj);

        let homeWorldURL = characterObj.homeWorld + "?format=json";
        let worldPromise = Promise.resolve(getHomeWorld(homeWorldURL));
        worldPromise.then((worldObj) => {
            characterObj.homeWorld = worldObj.name;

            document.getElementById("characterDetails").innerHTML = `
            <tr>
                <td>${characterObj.name}</td>
                <td>${characterObj.height}</td>
                <td>${characterObj.mass}</td>
                <td>${characterObj.gender}</td>
                <td>${characterObj.birthYear}</td>
                <td>${characterObj.homeWorld}</td>
            </tr>
            `;
        })
    })
}