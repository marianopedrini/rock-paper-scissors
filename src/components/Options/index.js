import { useState } from "react";
import Option from "./Option";
import Result from "../Result";

export default function Options() {
  const [myPick, setMyPick] = useState("none");
  const [cpuPick, setCpuPick] = useState("none");

  const options = [
    {
      option: "rock",
      icon: "far fa-hand-rock",
      loseVs: "paper",
    },
    {
      option: "paper",
      icon: "far fa-hand-paper",
      loseVs: "scissors",
    },
    {
      option: "scissors",
      icon: "far fa-hand-scissors",
      loseVs: "rock",
    },
  ];

  const chooseOptions = (event) => {
    const myPick = options.find(
      (each) => each.option === event.target.textContent
    );
    setMyPick(myPick);
    cpuChoose();
  };

  const cpuChoose = () => {
    const cpuChoose = options[Math.floor(Math.random() * options.length)];
    setCpuPick(cpuChoose);
  };

  return (
    <main>
      <div className="main-container">
        <section className="options-container">
          {options.map((each, key) => (
            <Option
              key={key}
              option={each.option}
              icon={each.icon}
              choose={chooseOptions}
            />
          ))}
        </section>

        <section className="choose">
          <div>
            <h3>Player picks</h3>
            <h3 className="pick">{myPick.option}</h3>
          </div>
          <h3>Vs.</h3>
          <div>
            <h3>CPU picks</h3>
            <h3 className="pick">{cpuPick.option}</h3>
          </div>
        </section>

        <Result player={myPick} cpu={cpuPick}></Result>

        <section className="scoreboard">
          <h4>Scoreboard</h4>
          <div>
            <div>
              <h3>You</h3>
              <h3>0</h3>
            </div>
            <div>
              <h3>Draw</h3>
              <h3>0</h3>
            </div>
            <div>
              <h3>CPU</h3>
              <h3>0</h3>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
