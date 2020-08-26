import React from "react";
import "./CardStarted.css";

export default class CardStarted extends React.Component {
  render() {
    return (
      <div className="cardStarted-wrapper">
        <span className="title">Get .biz domain with 45% off</span>
        <span className="current">$4.88/yr</span>
        <div className="getOffer-wrapper">
          <span className="content">Get started</span>
          <span className="material-icons">arrow_right_alt</span>
        </div>
      </div>
    );
  }
}
