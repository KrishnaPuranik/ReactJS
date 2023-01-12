import React from "react";
import ReactDOM from "react-dom";

const heading1 = React.createElement(
    "h1",
    {
      id: "title",
      className: "A1 A2",
    },
    "Namaste Everyone on ReactJS!"
  );
  console.log(heading1);
  const heading2 = React.createElement(
    "h2",
    {
      id: "title",
      className: "A1 A2",
    },
    "Namaste Everyone on ReactJS!"
  );
  const container = React.createElement(
    "div",
    {
        id: "container"
    },
    [heading1, heading2]
  )
  const root1 = ReactDOM.createRoot(document.getElementById("root"));
  root1.render(container);