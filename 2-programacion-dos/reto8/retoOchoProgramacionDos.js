'use strict';
const firstDogImage = '<img src="https://dog.ceo/api/img/schipperke/n02104365_8156.jpg">';
const firstDogName = 'Dina';

const secondDogImage = '<img src="https: //dog.ceo/api/img/collie-border/n02106166_355.jpg">';
const secondDogName = 'Luna';

const thirdDogImage = '<img src="https://dog.ceo/api/img/schipperke/n02104365_8156.jpg">';
const thirdDogName = 'Lana';

const listElement = document.querySelector('.list');


listElement.innerHTML =
    `<li> ${firstDogImage}${firstDogName}</li>
<li>${secondDogImage} ${secondDogName}</li>
<li>${thirdDogImage} ${thirdDogName}</li>`;