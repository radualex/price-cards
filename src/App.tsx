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
        <CardStarted
          title={"Get .biz domain with 45% off"}
          price={"$4.88/yr"}
        />
        <CardOption
          title={".IO"}
          currentPrice={"$28.88/yr"}
          oldPrice={"Instead of $32.89/yr"}
          hasTag={true}
        />
        <CardOption
          title={".SO"}
          currentPrice={"$35.88/yr"}
          oldPrice={"Instead of $64.88/yr"}
          hasTag={false}
        />
      </div>
      <Button content={"View more"} />
    </div>
  );
}
