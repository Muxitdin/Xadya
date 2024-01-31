const loader = document.querySelector('.loader');
const form = document.querySelector('form');

form.style.display = 'none';

setTimeout(() => {
    form.style.display = 'flex';
    loader.style.transform = 'translateY(-100%)';
    loader.remove();
}, 2000);