import React from "react";

const SpecialButton = (props) => {
  const { special, setDisplay } = props;

  const reset = () => {
    setDisplay("0");
  }

  return (
    <>
      <div className="btn-cont">
        <button onClick={reset}>{special}</button>
      </div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton;