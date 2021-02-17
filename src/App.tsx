/**
 * Main takeaway: React passes event information into the onClick
 *  handler function which you pass to default JSX elements.
 *
 * Task: experiment with React's MouseEvent
 *
 * Success: explain why we:
 *  - CANNOT pass handleWithStringParameter to button onClick
 *  - CAN pass handleWithFancyParameter to button onClick
 *
 * (Bonus: explain why we CAN pass handleWithNoParameter)
 */

function App() {
  const handleWithNoParameter = () => console.log("success!");
  const handleWithStringParameter = (msg: string) => console.log(msg);
  const handleWithFancyParameter = (e: React.MouseEvent) => console.log(e);

  return (
    <div>
      <h1>My buttons</h1>
      <button
        onClick={(weirdThing) => {
          /**
           * Two ways in which we can learn about weirdThing:
           *
           * 1. log it out
           * 2. hover over it in VS code
           *
           * It's something that can be referred to as a
           *  'Synthetic Event', and is typed as:
           *  React.MouseEvent<HTMLButtonElement, MouseEvent>
           *
           * It looks like a weird complicated typing.
           *  Don't worry about understanding what it looks like.
           *
           * The important thing is: _it is typed_. It won't allow
           *  absolutely _anything_.
           */

          // prohibitively large confusing object
          console.log("too much stuff:", weirdThing);
          // this one might be more interesting
          console.log("an interesting part:", weirdThing.target);

          // de-comment below - TypeScript will save us from a typo!
          // console.log("inspect timeStamp", weirdThing.timestamp)
        }}
      >
        Log React's MouseEvent
      </button>
      {/*
        Try passing each of the function references above:
          - handleWithStringParameter
          - handleWithFancyParameter
      */}
      <button onClick={handleWithNoParameter}>Experimental button</button>
    </div>
  );
}

export default App;
