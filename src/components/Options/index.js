import Option from "./Option";

export default function Options() {
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
  const numbers = [1, 2, 3];

  return (
    <div className="options-container">
      {options.map((each) => (
        <Option option={each.option} icon={each.icon} />
      ))}
    </div>
  );
}
