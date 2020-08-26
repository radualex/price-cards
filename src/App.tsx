import * as React from "react";
import "./styles.css";

import CardOption from "./CardOption/CardOption";
import CardStarted from "./CardStarted/CardStarted";
import Button from "./Button/Button";

export default function App() {
  return (
    <div className="App">
      <h1>Explore current top deals</h1>
      <div className="subTitle">
        <h2>
          Check out our best deals across our product range, and get what your
          website needs.
        </h2>
      </div>
      <div className="cards-wrapper">
        <CardStarted />
        <CardOption />
        <CardOption />
      </div>
      <Button content={"View more"} />
    </div>
  );
}
