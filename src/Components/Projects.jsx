import React from "react";
import "../Components/Web.css";
import filmvault from "../Images/work1.jpg";
import movie from '../Images/movies.jpg'
import foodMenu from '../Images/food.png'
import watchList from "../Images/watchlist.jpg";

function Projects() {
  return (
    <div className="projects">
      <h1 className="main-title">MY WORK</h1>
      {/* <h1 class="font-effect-shadow-multiple">Multiple Shadow Effect</h1> */}
      <div className="container">
        <div className="work-A">
          <img className="film" src={filmvault} alt="" />
          <img className="web" src={movie} alt="" />
          <img className="web-A" src={watchList} alt="" />
        </div>
        <div className="work-A">
          <img className="film" src={foodMenu} alt="" />
        </div>
        <div className="work-A">
          <img className="film" src={filmvault} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
