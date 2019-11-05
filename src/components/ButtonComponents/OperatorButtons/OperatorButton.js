import React from "react";
import { add, subtract, multiply, divide, computeBySign } from '../../FunctionalComponents/Equations';

const OperatorButton = (props) => {
  const {operator, num1, num2, setNum1, setNum2, display, setDisplay, compute, setCompute} = props;

  return (
    <>
      <div className="btn-cont">
        <button onClick={processNum}>{operator.char}</button>
      </div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
 
  function processNum() {
    if(!num1) {
      setNum1(display);
      setDisplay("0");
      setCompute(operator.value);
    } else if (!num2) {
      setNum2(display);
      setDisplay("0");
    } else {
      setDisplay(computeBySign(compute, num1, num2));
      setNum1("");
      setNum2("");
    }
  }

};

export default OperatorButton;