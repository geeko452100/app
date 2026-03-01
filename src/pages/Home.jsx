import React from "react";
import '/src/stylesheet/Home.css';

function Home() {
    return (
      <div className="Background">
        <video autoPlay muted loop id="typingVideo"
          src="/assets/Typing.mp4" type="video/mp4" />
              <h1 className="white-text">Gavin T.'s Portfolio </h1>
              <br />
              <p className="center">
                <q>The computer programmer is a creator of universes for which he alone is the lawgiver.
                <br />No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or
                <br />field of battle and to command such unswervingly dutiful actors or troops.</q>
                <br /><br />-Joseph Weizenbaum 
                <br />
                <br /> My name is Gavin T. Griffith. Welcome to my portfolio website. On it, I will tell you about my background and experience.
                <br />
                <br /> Thanks for stopping by and enjoy! 
                </p>
                
        </div>
      );
    }

export default Home;