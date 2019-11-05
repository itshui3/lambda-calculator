import React from "react";

const SpecialButton = (props) => {
  const { special } = props;
  return (
    <>
      <div className="btn-cont">
        <button>{special}</button>
      </div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton;