import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [buttonName, setButtonName] = useState("Start");
  const [clicked, setClicked] = useState(false);
  const [lap, setLap] = useState([]);
  const lapItems = lap.map((d) => <li key={d.Lap}>{d.Lap}</li>);
  const [keyFrames, setKeyFrames] = useState(440);

  useEffect(() => {
    if (clicked) {
      const interval = setInterval(() => {
        setCounter(counter + 1);
        setKeyFrames(keyFrames - 440 / 60);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [counter, clicked, keyFrames]);

  const Clock = (counter) => {
    let minutes = counter / 60 - ((counter / 60) % 1);
    let sec = ("0" + (counter % 60)).slice(-2);
    let min = ("0" + minutes).slice(-2);
    let clock = min.toString() + ":" + sec.toString();
    return clock;
  };

  const onClick = () => {
    if (!clicked) {
      setButtonName("Stop");
      setClicked(true);
    } else {
      setButtonName("Start");
      setClicked(false);
    }
  };

  const onClickReset = () => {
    setCounter(0);
    setButtonName("Start");
    setClicked(false);
    setKeyFrames(0);
  };

  const onClickLap = () => {
    setLap((lap) => [...lap, { Lap: Clock(counter) }]);
    setCounter(0);
    setKeyFrames(0);
  };

  const onClickClear = () => {
    setLap([]);
    setCounter(0);
    setButtonName("Start");
    setClicked(false);
    setKeyFrames(0);
  };
  return (
    <div className="App">
      <div className="Clock">
        <div className="Circle">
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle
              className="Animation"
              strokeDashoffset={keyFrames.toString()}
              cx="70"
              cy="70"
              r="70"
            ></circle>
          </svg>
        </div>
        <div className="Digital">{Clock(counter)}</div>
      </div>

      <div>
        <button className="Button" onClick={onClick}>
          {buttonName}
        </button>
        <button className="Button" onClick={onClickReset}>
          Reset
        </button>
        <button className="Button" onClick={onClickLap}>
          Lap
        </button>
        <button className="Button" onClick={onClickClear}>
          Clear
        </button>
      </div>
      <div className="Laps">{lapItems}</div>
    </div>
  );
}

export default App;
