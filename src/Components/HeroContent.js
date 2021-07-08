import React from "react";
import HeroImg from "../assets/hero.png";
import appleIcon from "../assets/appleicon.png";

function HeroContent() {
  return (
    <div className="hero-container">
      <div className="text">
        <h1 className="hero-heading">Track Your Buddies!</h1>
        <h4 className="hero-subheading">
          Discover new friends and/or build up your new community for others to
          flock to.
        </h4>
        <div className="btn-container">
          <img src={appleIcon} alt="" className="apple-icon" />
          <div className="btn-text">
            <span className="download-on">Download on the</span>
            <br />
            <span className="app-store">App Store</span>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={HeroImg} />
      </div>
    </div>
  );
}

export default HeroContent;
