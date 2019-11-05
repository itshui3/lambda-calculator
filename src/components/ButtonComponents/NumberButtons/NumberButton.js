import React from "react";

const NumberButton = (props) => {
  const { num, display, setDisplay } = props;


  const registerNum = () => {
    if (display === "0") {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  }

  if (num === "0") {
    return (
      <>
        <div className="btn-cont zero">
          <button onClick={registerNum}>{num}</button>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="btn-cont">
        <button onClick={registerNum}>{num}</button>
      </div>
    </>
  );
};

export default NumberButton;