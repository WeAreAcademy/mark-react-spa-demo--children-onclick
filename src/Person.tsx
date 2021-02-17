interface PersonProps {
  name: string;
  catchphrase: string;
  extraThing: () => void; // type: a function with no return value
}

function Person(props: PersonProps) {
  return (
    <div>
      <h2>{props.name}</h2>
      <button
        onClick={() => {
          console.log("I'm a generic button! I always do the same thing!");
        }}
      >
        Generic button
      </button>
      <button onClick={() => console.log(props.catchphrase)}>
        Log catchphrase
      </button>
      {/* using the function passed down from parent */}
      <button onClick={props.extraThing}>Extra thing</button>
    </div>
  );
}

export default Person;
