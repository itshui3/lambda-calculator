import React, {useState} from "react";
import {operators} from '../../../data.js';
import OperatorButton from './OperatorButton';
//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  const [opers] = useState(operators);
  const { num1, num2, setNum1, setNum2, display, setDisplay, compute, setCompute } = props;

  // STEP 2 - add the imported data to state
  return (
    <div className="operators">
      {opers.map( (elem, index) => (
        <OperatorButton key={index} operator={elem} num1={num1} num2={num2} setNum1={setNum1} setNum2={setNum2} display={display} setDisplay={setDisplay} compute={compute} setCompute={setCompute} />
      ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Operators;