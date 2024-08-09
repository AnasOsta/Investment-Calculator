import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  const [input, setInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = input.duration >= 1;
  function handleChange(inputIdentifier, value) {
    setInput((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: +value,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput input={input} handleChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter valid values</p>}
      {inputIsValid && <Result input={input} />}
    </>
  );
}

export default App;
