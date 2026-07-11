function toggleMenu(){
    document.getElementById('nav-menu').classList.toggle('show');
}

const form = document.getElementById('contactForm');
const msg = document.getElementById('formMessage');

form.addEventListener('submit', e =>{
    e.preventDefault();
    if(!name.value || !email.value || !message.value){
        msg.textContent = 'Please fill all fields';
        msg.style.color='red';
    } else{
        msg.textContent = 'Message sent successfully!';
        msg.style.color='green';
        form.reset();
    }
});
