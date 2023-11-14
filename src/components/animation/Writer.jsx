import React from "react";
import Typewriter from "typewriter-effect";
import "./writer.css";

const Writer = () => {
    const data = "Sales Force"
  return (
    <div className="writer">
        <div className="writer-text">
        <div className="writer-h3">
        <h3>Discover the Companies Employing.</h3>
        </div>
        <div >
        <Typewriter
            onInit={(typewriter) => {
            typewriter
                .typeString("Welcomes You")
                .pauseFor(1000)
                .deleteAll()
                .typeString(data)
                .start();
            }}
        />
        </div>
        </div>
    </div>
  );
};

export default Writer;
