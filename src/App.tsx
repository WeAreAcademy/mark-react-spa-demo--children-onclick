/**
 * Main takeaway: a higher order function is 'a function that returns
 *  a function' - and so its return value COULD potentially be assigned
 *  as an onClick prop.
 *
 * Task: refactor to use the makeClickHandler
 *
 * Success: explain why:
 *  - shoutString('hi') CANNOT be passed to onClick
 *  - logStringLowercase('hi') CANNOT be passed to onClick
 *  - makeClickHandler('hi') CAN be passed to onClick
 */

function App() {
  // returns a string, no side-effects
  const shoutString = (message: string) => {
    return `${message.toUpperCase()}!!!!!!`;
  };

  // no return, side-effect: prints something
  const logStringLowercase = (message: string) => {
    console.log(message.toLowerCase());
  };

  // returns a function!
  const makeClickHandler = (message: string) => {
    return () => {
      // returned function will print message twice
      console.log("once:", message);
      console.log("twice:", message);
    };
  };

  return (
    <div>
      <h1>My buttons</h1>
      <button
        onClick={() => {
          console.log("once:", "happy");
          console.log("twice:", "happy");
        }}
      >
        Log 'happy' twice
      </button>
      <button
        onClick={() => {
          console.log("once:", "sad");
          console.log("twice:", "sad");
        }}
      >
        Log 'sad' twice
      </button>
      <button onClick={makeClickHandler("indifferent")}>
        Log 'indifferent' twice
      </button>
    </div>
  );
}

export default App;
