'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// you can make it better with idea of coffee-cafe's taking order page..
// try to merge some functionality and dig new look
//ex: you can use opping button window to write or show already written page.
