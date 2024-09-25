import React from "react";
// import Insta from "../Images/Logo.jpg";
import Insta from "../Images/InsTA.webp";
import LinkedIn from "../Images/InLink.webp";
import facebook from "../Images/facebook.webp";
import "../Components/Web.css";
import twit from'../Images/twit.webp'

function Contact() {
  return (
    <>
      <div className="touch">
        <div className="btn">Get In Touch</div>
      </div>
      <div className="pro">
        <div className="contain-A">
          <a
            href="https://www.google.com/search?q=shiddat&oq=shiddat&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDU5ODNqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="Insta" src={Insta} alt="Clickable" />
          </a>
        </div>
        <div className="contain-B">
          <a
            href="www.linkedin.com/in/subodh-manjrekar-a60401276"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="Linked" src={LinkedIn} alt="Clickable" />
          </a>
        </div>
        <div className="contain-C">
          <a
            href="https://www.google.com/search?q=shiddat&oq=shiddat&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDU5ODNqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="Insta" src={twit} alt="Clickable" />
          </a>
        </div>
        <div className="contain-D">
          <a
            href="https://www.google.com/search?q=shiddat&oq=shiddat&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDU5ODNqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="Insta" src={facebook} alt="Clickable" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
