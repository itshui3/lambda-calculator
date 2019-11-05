import React from "react";

const Display = (props) => {

  const { display } = props;
  console.log(display);
  return <div className="display">{display}</div>;
};

export default Display;