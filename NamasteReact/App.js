import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
    className: "A1 A2",
    key: "h1",
  },
  "Namaste Everyone on ReactJS!"
);
console.log(heading1);
// React.createElement
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
    className: "A1 A2",
    key: "h2",
  },
  "Namaste Everyone on ReactJS!"
);
// JSX
const heading3 = (
  <h1 id="title" key="h3">
    Namaste React heading 3
  </h1>
);

// Functional Component
const HeaderComponent = () => {
  return <h1> Hi Krishna </h1>
}

const HeaderComponent1 = () => {
  return (
  <div>
    <h1> Hi Krishna </h1>
    <h2>Hi Moorthi</h2>
  </div>
  );
}

const HeaderComponent2 = () =>  (
  <div>
    <h1> Hi Krishna </h1>
    <h2>Hi Moorthi</h2>
  </div>
  );

  const test = 20;

  const HeaderComponent3 = function () {
    return (
    <div>
      {console.log("Any JS code")}
      {1+3}
      {test}
      {heading1}
      {heading2}
      <HeaderComponent/> /* Component Composition */
      {HeaderComponent1()}
      <h1> Hi Krishna </h1>
      <h2>Hi Moorthi</h2>
    </div>
    );
  }

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2, heading3]
);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
// root1.render(container);
root1.render(<HeaderComponent3/>);
root1.render(HeaderComponent3());
