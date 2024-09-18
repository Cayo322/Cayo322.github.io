document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Mensaje:', message);

    alert('Formulario enviado. Gracias, ' + name + '!');
});
