import React from "react";

function computeBySign(sign, num1, num2) {
  if (sign === "+") {
    return num1 + num2;

  } else if (sign === "*") {
    return num1 * num2;

  } else if (sign === "-") {
    return num1 - num2;

  } else if (sign === "/") {
    return num1 / num2;

  }
}

function add(x, y) {
  return x * y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x , y) {
  return x / y;
}

export { add, subtract, multiply, divide, computeBySign }