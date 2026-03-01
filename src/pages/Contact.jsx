import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "/src/stylesheet/Contact.css";

const Contact = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault(); // Prevent the default form function

        // Use EmailJS to send an email to the email address on fil
        emailjs
        .sendForm('default_service', 'template_7cswoop', form.current, {
            publicKey: 'eirDKX55CmD7GgDdQ',
        })
        .then(
            (response) => {
                console.log('Sent.', response.status, response.text);
            },
            (error) => {
                console.log('Error:', error);

            },
        );
    }
    return(
    <div id="contact">
        <img src="/assets/contact.jpg" alt="Contact_Image" />
          <h1>Contact</h1>
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                    <li>Name:
                        <input type="text" id="name" name="name" placeholder="Please enter your name" required />
                    </li>
                    <br />
                    <li>Email:
                        <input type="text" id="email" name="email" placeholder="Please enter your email" required />
                    </li>
                    <br />
                    <li>Message:
                        <input type="text" id="message" name="message" placeholder="Please enter your message" required />
                    </li>
                </ul>
                <button type="submit">Send</button>
              </form>
          </div>
    );
}
export default Contact;
