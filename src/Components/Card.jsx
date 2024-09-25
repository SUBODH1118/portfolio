import React from "react";
import photo from'../Images/Myphoto.jpg'

function Card() {
  return (
    <div className="card">
      
      <div className="card-content">
        <h3 className="card-title">Hello ! I am Subodh Manjrekar</h3>
        <img src={photo} className="card-image" />
        <p className="card-description">
          A skilled React developer with designing and developing user
          interfaces for web applications. Proficient in JavaScript, HTML, CSS,
          and React.js library. Strong problem-solving skills and a passion for
          creating interactive and responsive UI designs. Disciplined and highly
          motivated individual with Strong interpersonal skills which translate
          into positive working relationship.
        </p>
      </div>
    </div>
  );
}

export default Card;
