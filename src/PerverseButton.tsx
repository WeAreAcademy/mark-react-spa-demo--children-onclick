interface PerverseButtonProps {
  onClick: string;
  notUsed: () => void;
  guacamole: number;
}

function PerverseButton(props: PerverseButtonProps) {
  return (
    <div>
      <p>Perverse Button number {props.guacamole}</p>
      <button onClick={props.notUsed}>{props.onClick}</button>
    </div>
  );
}

export default PerverseButton;
