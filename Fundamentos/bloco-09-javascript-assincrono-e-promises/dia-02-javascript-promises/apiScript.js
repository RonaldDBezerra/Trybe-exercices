// apiScript.js
// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';
let h2 = document.getElementById("jokeContainer")

const colocaNoId = (param) => {
  const resultado = h2.innerText = param;
  return resultado;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data));
};

window.onload = () => fetchJoke();
