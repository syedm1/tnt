import React, { useState } from "react";
import {
  calculatorStyles,
  displayStyles,
  expressionStyles,
  numbersButtonStyles,
  numbersStyles,
  operandsButtonStyles,
  operatorsStyles,
  panelStyles,
  resultButtonStyles
} from "../../styles/tsxBased/calculatorPagestyles";

const Calculator = () => {
  /* todo: 
  - refactor core logic into seprate component 
  - enhance reduce operands function
  - enhance css
  - extract util functions
  - add tests
  */

  const [display, setDisplay] = useState("");
  const [expression, setExpression] = useState([]);
  const WHOLE_NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const OPERANDS = ["+", "-", "÷", "x"];

  const handleClick = (value: string) => {
    setDisplay(value);
    setExpression([...expression, value]);
  };

  const handleCalculation = (
    acc: number | string,
    array: Array<number | string>,
    index: number,
    opernad: string
  ) => {
    const current_operand = reduceMultiOperands(array, index, opernad);
    if (array[index + 1] > array.length) return 0;

    const value1: number = StringToNumber(acc);
    const value2: number = StringToNumber(array[index + 1]);

    if (current_operand === "+") {
      return value1 + value2;
    }
    switch (current_operand) {
      case "+":
        return value1 + value2;
      case "-":
        return value1 - value2;
      case "x":
        return value1 * value2;
      case "÷":
        return value1 / value2;
      default:
        return 0;
    }
  };

  const StringToNumber = (value: string | number): number => {
    return +value;
  };

  const reduceMultiOperands = (
    array: Array<number | string>,
    index: number,
    operand: string
  ) => {
    let current_operand = operand;
    let current_index = index;
    while (
      index + 1 < array.length &&
      typeof array.at(current_index + 1) === "string"
    ) {
      current_operand = array[current_index + 1].toString();
      current_index = current_index + 1;
    }
    return current_operand;
  };

  const handleResult = () => {
    const result = expression
      .join("")
      .split(/(\D)/g)
      .map((value) => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, value, index, array) => {
        switch (value) {
          case "+":
            return handleCalculation(acc, array, index, "+");
          case "-":
            return handleCalculation(acc, array, index, "-");
          case "x":
            return handleCalculation(acc, array, index, "x");
          case "÷":
            return handleCalculation(acc, array, index, "÷");
          default:
            return acc;
        }
      });
    setDisplay(result.toString());
    setExpression([""]);
  };

  const getNumberButtons = () => {
    return (
      <>
        {WHOLE_NUMBERS.reverse().map((x) =>
          x !== 0 ? makeNumberbutton(x) : makeNumberZerobutton(0)
        )}
      </>
    );
  };

  const getOperandsButtons = () => {
    return <>{OPERANDS.map(makeOperandButton)}</>;
  };

  const getResultButton = () => {
    return (
      <button style={resultButtonStyles} onClick={() => handleResult()}>
        =
      </button>
    );
  };

  const makeNumberbutton = (data) => {
    return (
      <button style={numbersButtonStyles} onClick={() => handleClick(data)}>
        {data}
      </button>
    );
  };

  const makeNumberZerobutton = (data) => {
    return (
      <button
        style={{ ...numbersButtonStyles, width: "100%" }}
        onClick={() => handleClick(data)}
      >
        {data}
      </button>
    );
  };

  const makeOperandButton = (data) => {
    return (
      <button style={operandsButtonStyles} onClick={() => handleClick(data)}>
        {data}
      </button>
    );
  };

  return (
    <div className="Calculator" style={calculatorStyles}>
      <h3 className="display" style={displayStyles}>
        {display}
      </h3>
      <span className="expression" style={expressionStyles}>
        {expression}
      </span>
      <section className="panel" style={panelStyles}>
        <section className="numbers" style={numbersStyles}>
          {getNumberButtons()}
        </section>
        <section className="operators" style={operatorsStyles}>
          {getOperandsButtons()}
          {getResultButton()}
        </section>
      </section>
    </div>
  );
};

export default Calculator;
