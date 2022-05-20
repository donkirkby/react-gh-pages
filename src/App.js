import React, { useState } from 'react';
import './App.css';

function Greeter(props) {
    const [greeting, setGreeting] = useState("Hello, World!"),
        [name, setName] = useState('');

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleGreet(event) {
        setGreeting("Hello, " + name + "!");
        event.preventDefault();
    }

    return <div>
        <form>
            <label>
                Who are you?
                <input type="text" value={name} onChange={handleChange}/>
            </label>
            <button onClick={handleGreet}>
                Greet
            </button>
            <p>{greeting}</p>
        </form>
    </div>;
}

function App() {
  return (
    <div className="App">
        <Greeter/>
    </div>
  );
}

export default App;
