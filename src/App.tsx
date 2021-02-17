/**
 * Main takeaways:
 *  - a child can be in charge of an onClick, or a parent can
 *  - you can pass functions down as props to children
 *  - onClick DOES NOT exist by default on custom components
 *
 * Task: run the app and play around with it.
 *   - try to break it: mess around with props
 *   - explain why it breaks when you break it
 *
 * Person: explain why
 *  - their catchphrase is logged onClick for the relevant button
 *  - their extraThing is running onClick for the other button
 *
 * PeverseButton: explain why
 *  - its onClick property is showing as its button text
 *  - its notUsed property is running when the button is clicked
 */

import Person from "./Person";
import PerverseButton from "./PerverseButton";

function App() {
  return (
    <div>
      <h1>The People</h1>
      <Person
        name="Bart"
        catchphrase="Cowabunga, man!"
        extraThing={() => window.alert("he's a brat")}
        // onClick={() => console.log('cannot pass through')}
      />
      <Person
        name="Lisa"
        catchphrase="tbh do I even have a catchphrase?"
        extraThing={() => {
          console.log("I like maths, so, um, here's some random numbers?");
          console.log(Math.random(), Math.random(), Math.random());
        }}
      />
      <hr />
      <h2>The menacing buttons</h2>
      <PerverseButton
        onClick="WTF"
        notUsed={() => console.log("what a silly component")}
        guacamole={4.8}
      />
      <PerverseButton
        onClick="THIS IS TERRIBLE PRACTICE"
        notUsed={() => {
          console.log(
            "we highly advise that you DO NOT build a button like this"
          );
          window.alert("GOOD RIDDANCE");
        }}
        guacamole={-12000}
      />
    </div>
  );
}

export default App;
