export default function Resultado(props) {
  let finalResult = "";

  if (props.player.loseVs === props.cpu.option && props.player.option) {
    finalResult = "CPU wins!";
  } else if (props.cpu.loseVs === props.player.option && props.player.option) {
    finalResult = "You win!";
  } else if (props.player.option === props.cpu.option && props.player.option) {
    finalResult = "Draw!";
  }
  return (
    <div>
      <h1>Result: {finalResult}</h1>
    </div>
  );
}
