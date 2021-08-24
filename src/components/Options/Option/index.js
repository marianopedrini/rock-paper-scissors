export default function Option(props) {
  return (
    <div className="option-item" onClick={props.choose}>
      <h2>{props.option}</h2>
      <i className={props.icon}></i>
    </div>
  );
}
