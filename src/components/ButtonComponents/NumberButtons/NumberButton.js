import React from "react";


const NumberButton = (props) => {
  const {num} = props;
  console.log(props);
  if (num === "0") {
    return (
      <>
        <div className="btn-cont zero">
          <button>{num}</button>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="btn-cont">
        <button>{num}</button>
      </div>
    </>
  );
};

export default NumberButton;