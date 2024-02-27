//RESUELVE TUS EJERCICIOS AQUI

//EJERCICIO 1

function getAllBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all') // Lanza la petición HTTP GET Y ACCEDER A RAZA
        .then(res => res.json()) // Tranforma datos a JSON para tratar en JS
        .then(data => Object.keys(data.message));
}

//EJERCICIO 2
//Declara una función getRandomDog que obtenga una imagen random de una raza.


function getRandomDog() {
    return fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => data.message);
}

//EJERCICIO 3
//Declara una función getAllImagesByBreed que obtenga todas las imágenes de una raza.

function getAllImagesByBreed() {
    return fetch('https://dog.ceo/api/breed/komondor/images')
        .then(res => res.json())
        .then(data => data.message);
}

//EJERCICIO 4
//Declara una funcion getAllImagesByBreed2(breed) que devuelva las imágenes de la raza pasada por el argumento

function getAllImagesByBreed2(breed) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((res) => res.json())
      .then((data) => data.message);
  }

//EJERCICIO 5 
//Declarara una función getGitHubUserProfile(username) que obtenga el perfil de usuario de github a partir de su nombre de usuario.

function getGitHubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(user => user);
}

//EJERCICIO 6
// Declara una función printGithubUserProfile(username) que reciba como argumento el nombre de un usuario (username), retorne {img, name} y pinte la foto y el nombre en el DOM.

function getAllImagesByBreed2(breed) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((res) => res.json())
      .then((data) => data.message);
}