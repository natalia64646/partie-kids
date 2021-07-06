document.querySelector('.contact-form  input[type=submit]')
    .addEventListener('click', contact);

async function contact(ev) {
    ev.preventDefault();
    await fetch('contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.querySelector('.contact-form input[name=name]').value,
            number: document.querySelector('.contact-form input[name=number]').value,
            email: document.querySelector('.contact-form input[name=email]').value,
            message: document.querySelector('.contact-form input[name=message]').value,
        })
    });
    document.querySelector('.contact-form').reset();
}