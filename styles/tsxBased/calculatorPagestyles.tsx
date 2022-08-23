export const calculatorStyles = {
  display: "flex",
  flexFlow: "column",
  width: "100%",
  fontFamily: "sans-serif",
  textAlign: "center"
} as React.CSSProperties;
export const displayStyles = {
  width: "40%",
  minHeight: "40px",
  alignSelf: "center",
  background: "lightgray",
  padding: "10px",
  borderRadius: "6px"
} as React.CSSProperties;

export const panelStyles = {
  display: "flex",
  justifyContent: "center"
} as React.CSSProperties;

export const numbersStyles = {
  display: "flex",
  flexFlow: "wrap",
  flexDirection: "row-reverse",
  flexWrap: "wrap",
  justifyItems: "stretch",
  width: "90px"
} as React.CSSProperties;

export const expressionStyles = {
  height: "30px",
  color: "#3b81ef",
  opacity: 0.5
} as React.CSSProperties;

export const operatorsStyles = {
  display: "flex",
  flexFlow: "column"
} as React.CSSProperties;

export const operandsButtonStyles = {
  color: "white",
  background: "#3b81ef",
  borderLeft: "none",
  borderBottom: 0
} as React.CSSProperties;

export const numbersButtonStyles = {
  fontSize: "1rem",
  width: "30px",
  border: "1px solid #3b81ef",
  color: "whitesmoke",
  background: "gray"
} as React.CSSProperties;

export const resultButtonStyles = {
  fontSize: "1rem",
  width: "30px",
  border: "1px solid #3b81ef",
  color: "#3b81ef"
} as React.CSSProperties;
