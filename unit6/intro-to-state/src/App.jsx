import { useState } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";
import Welcome from "./components/welcome/Welcome";
import AddUser from "./components/adduser/AddUser";

const iCount = () => {
  console.log('runs every time')
  return 0;
}

function App() {
  //const [counter, setCounter] = useState(0);
  const [counter, setCounter] = useState(iCount);
  const [names, setNames] = useState(["Frodo", "Sam", "Pipin", "Merry"]);

  const displayWelcome = () => {
    return names.map((thename, index) => (
      <Welcome 
        key={index} 
        name={thename} 
        names={names} 
        setNames={setNames} 
      />
    ));
  };
  return (
    <div className="App">
      <Counter count={counter} setCount={setCounter} />
      <AddUser names={names} setNames={setNames}/>
      {
        names.length > 0 ?
        displayWelcome() :
        <h1 style={{textAlign:"center"}}>Add a user!!!!</h1>
      }
      {displayWelcome()}
    </div>
  );
}

export default App;
