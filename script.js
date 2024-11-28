import data from "./persons.json" with {type: 'json'};

const names = document.getElementById("names");

data.forEach(person => {
    const elem = document.createElement("div");
    elem.innerHTML = person.name;
    names.appendChild(elem);
});