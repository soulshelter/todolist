import React from "react";
export default ({ name, children }) => (
  <div>
    <h1>{name}</h1>
    <ul>{children}</ul>
  </div>
);
