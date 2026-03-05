const sendFormEmail = (event) => {

    event.preventDefault();

    emailjs.sendForm('default_service', 'template_7cswoop', event.target)
        .then((response) => {
            console.log('Successful!', response.status, response.text);
            alert("Thank you. I'll be in touch shortly.");
        }, (error) => {
            console.log('Error!', error);
            alert('Email failed to send.');
        });

};

document.getElementById('contact-form').addEventListener('submit', sendFormEmail);