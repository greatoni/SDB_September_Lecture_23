import { useState } from 'react';
import './App.css';
import Counter from './components/counter/Counter';
import Welcome from './components/welcome/Welcome';

function App() {


  const [counter, setCounter] = useState(0);
  const [names, setNames] = useState(['Frodo','Sam','Pipin','Merry']);

  const displayWelcome = () => {
  return (
  names.map((thename,index) =>
    <Welcome  
    key={index}
    name={thename} 
    names={names}
    setNames={setNames}
    />
  
  ))
}
  return (
    <div className="App">
    <Counter 
    count ={counter}
    setCount = {setCounter}
    />
      {displayWelcome()}
    </div>

  );
}

export default App;
