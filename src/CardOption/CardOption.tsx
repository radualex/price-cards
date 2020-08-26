import React from "react";
import "./CardOption.css";

export default class CardOption extends React.Component {
  render() {
    return (
      <div className="cardOption-wrapper">
        <span className="title">.IO</span>
        <div className="price-wrapper">
          <span className="current">$28.88/yr</span>
          <span className="old">Instead of $32.89/yr</span>
        </div>
        <div className="getOffer-wrapper">
          <span className="content">Get offer</span>
          <span className="material-icons">arrow_right_alt</span>
        </div>
      </div>
    );
  }
}
