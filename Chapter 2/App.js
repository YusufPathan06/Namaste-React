import React from 'react';
import ReactDOM from'react-dom/client';

const heading1 = React.createElement("h1", { id: "title" }, "heading 1 for parcel");
const heading2 = React.createElement("h1", { id: "title" }, "heading 2 for parcel");
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
