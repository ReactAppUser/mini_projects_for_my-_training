import './App.css';
import Button from "./Button";
import {useState} from "react";
import Congratulation from './Congratulation'

function App() {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count +1)
    };

  return (
    <div className="App">
        <Congratulation />
      <Button handleClick={handleClick} count={count} />
      <Button handleClick={handleClick} count={count} />
    </div>
  );
}

export default App;
