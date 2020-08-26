import React from "react";
import "./CardStarted.css";

interface CardStartedProps {
  title: string;
  price: string;
}

export default class CardStarted extends React.Component<CardStartedProps> {
  render() {
    return (
      <div className="cardStarted-wrapper">
        <span className="title">{this.props.title}</span>
        <span className="current">{this.props.price}</span>
        <div className="getOffer-wrapper">
          <span className="content">Get started</span>
          <span className="material-icons">arrow_right_alt</span>
        </div>
      </div>
    );
  }
}
