import { useState } from "react";
import "./App.css";
import cam from "./assets/cam.png";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1)); // Remove the last character from input
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };
  return (
    <>
      <div className="back d-flex justify-content-center align-items-center">
        <div>
          <div className="phone rounded-5">
            <div>
              <div className="top">
                <div className="camera-housing">
                  <img className="camera" src={cam} alt="camera" />
                  <div className="display">{input}</div>
                </div>
              </div>
              <div className="bottom">
                <div className="buttons">
                  <button onClick={() => handleClick("7")}>7</button>
                  <button onClick={() => handleClick("8")}>8</button>
                  <button onClick={() => handleClick("9")}>9</button>
                  <button onClick={handleDelete} className="c1">
                    ⌫
                  </button>
                  <button onClick={() => handleClick("4")}>4</button>
                  <button onClick={() => handleClick("5")}>5</button>
                  <button onClick={() => handleClick("6")}>6</button>
                  <button onClick={() => handleClick("*")} className="c1">
                    x
                  </button>
                  <button onClick={() => handleClick("1")}>1</button>
                  <button onClick={() => handleClick("2")}>2</button>
                  <button onClick={() => handleClick("3")}>3</button>
                  <button onClick={() => handleClick("-")} className="c1">
                    -
                  </button>
                  <button onClick={() => handleClick("0")}>0</button>
                  <button onClick={() => handleClick(".")}>.</button>
                  <button onClick={calculate}>=</button>
                  <button onClick={() => handleClick("+")} className="c1">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
