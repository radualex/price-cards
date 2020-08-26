import React from "react";
import "./CardOption.css";

import BestPriceTag from "../BestPriceTag/BestPriceTag";

interface CardOptionProps {
  title: string;
  currentPrice: string;
  oldPrice: string;
  hasTag: boolean;
}

export default class CardOption extends React.Component<CardOptionProps> {
  render() {
    return (
      <div className="cardOption-wrapper">
        {!this.props.hasTag ? (
          ""
        ) : (
          <div className="tag">
            <BestPriceTag />
          </div>
        )}
        <span className="title">{this.props.title}</span>
        <div className="price-wrapper">
          <span className="current">{this.props.currentPrice}</span>
          <span className="old">{this.props.oldPrice}</span>
        </div>
        <div className="getOffer-wrapper">
          <span className="content">Get offer</span>
          <span className="material-icons">arrow_right_alt</span>
        </div>
      </div>
    );
  }
}
