'use strict';

export function modal() {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const btnCloseModal = document.querySelector('img[data-modal="close-modal"]');
    const btnOpenModal = document.querySelector('.rules');

    const closeModal = (event) => {
        if (event.type === "touchstart") event.preventDefault();
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }

    const openModal = (event) => {
        if (event.type === "touchstart") event.preventDefault();
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden')
    }
    btnOpenModal.addEventListener('click', openModal);
    btnOpenModal.addEventListener('touchstart', openModal);

    btnCloseModal.addEventListener('click', closeModal);
    btnCloseModal.addEventListener('touchstart', closeModal);

    overlay.addEventListener('click', closeModal);
    overlay.addEventListener('touchstart', closeModal);


    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' & !modal.classList.contains('hidden')) {
            closeModal()

        }
    });
}