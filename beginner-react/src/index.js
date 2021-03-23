import React from "react";
import ReactDOM from "react-dom";

import Card from "./components/Card";
import Collapse from "./components/Collapse";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group w-100">
          <div className="col">
            <Collapse href="collapsExample1">
              <Card
                cardTitle="Card Title I"
                cardText="Card Text I"
                updateTime="Last updated 10 min ago"
                cardImage="https://via.placeholder.com/350x150"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapsExample2">
              <Card
                cardTitle="Card Title II"
                cardText="Card Text II"
                updateTime="Last updated 15 min ago"
                cardImage="https://via.placeholder.com/350x150"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapsExample3">
              <Card
                cardTitle="Card Title III"
                cardText="Card Text III"
                updateTime="Last updated 20 min ago"
                cardImage="https://via.placeholder.com/350x150"
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
