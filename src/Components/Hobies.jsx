import React from "react";
import "../Components/Web.css";
import treck from "../Images/treck.jpg";
import topic from "../Images/things.jpg";
import volley from "../Images//volley.jpg";

function Hobies() {
  return (
    <>
      <div className="div">
        <h2>HOBIES</h2>
      </div>
      <div className="Hobies">
        <div className="Hobies-A">
          <div className="div">Tracking </div>
          <div className="text">
            Trekking allows you to experience the beauty of the natural world
            firsthand. Many trekkers develop a deep appreciation for the
            environment and often engage in eco-friendly practices.
          </div>
          <div className="">
            <img className="ven" src={treck} alt="" />
          </div>
        </div>
        <div className="Hobies-B">
          <div className="div">Learning new things.</div>
          <div className="text">
            The tech field is always evolving with new programming languages,
            frameworks, and tools. As a hobby, coding offers endless
            opportunities to learn and stay up-to-date with the latest trends.
          </div>
          <div className="">
            <img className="topic" src={topic} alt="" />
          </div>
        </div>
        <div className="Hobies-C">
          <div className="div">Playing Volleyball</div>
          <div className="text">
            Volleyball involves a variety of physical activities like jumping,
            sprinting, and diving, which build cardiovascular endurance,
            strength, and agility. It improves hand-eye coordination, reflexes,
            and motor skills.
          </div>
          <div className="">
            <img className="topic" src={volley} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hobies;
