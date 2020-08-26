import React from "react";
import "./Button.css";

interface ButtonProps {
  content: string;
}

export default class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <div className="button-wrapper">
        <span>{this.props.content}</span>
      </div>
    );
  }
}
