import React from "react";

const OperatorButton = (props) => {
  const {operator} = props
  return (
    <>
      <div className="btn-cont">
        <button>{operator.char}</button>
      </div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;