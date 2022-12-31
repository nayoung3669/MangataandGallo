const toggleBtn = document.querySelector('.toggle');
const navbar = document.querySelector('nav ul');

toggleBtn.addEventListener('click',() => {
    navbar.classList.toggle('active');
})