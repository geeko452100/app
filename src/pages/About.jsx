import React from 'react';
import '/src/stylesheet/About.css'

function About() {
    return (
      <div id="aboutBody">
          <img src="app/public/assets/me.jpg" alt="A young man in a suit looking confidently into the camera." />
              <h1>About Me</h1>
                <p>I'm an aspiring junior full-stack developer who strives to ask the bigger question: <b>Why?</b>
                  <br /> As a naturally curious person, I always think of Einstein's famous words:
                  <br />
                  <br /><q>The important thing is not to stop questioning. Curiosity has its own reason for existing.</q> 
                  <br />-Albert Einstein
                  <br />
                  <br />I'm a recent graduate of <a href="https://www.learncodinganywhere.com" target="_blank">The Tech Academy</a> and
                as a student there, I have been trained and experienced in the following web and programming languages: HTML, CSS, JavaScript, SQL, C# and much more. 
                </p>
        </div>
            );
        }
export default About;