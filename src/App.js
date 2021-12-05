import React from 'react';
import './App.css';

class Greeter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: "Hello, World!"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleGreet = this.handleGreet.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleGreet(event) {
        this.setState(state => ({greeting: "Hello, " + state.name + "!"}));
        event.preventDefault();
    }

    render() {
        return <div>
            <form>
                <label>
                    Who are you?
                    <input type="text" value={this.state.name} onChange={this.handleChange}/>
                </label>
                <button onClick={this.handleGreet}>
                    Greet
                </button>
                <p>{this.state.greeting}</p>
            </form>
        </div>;
    }
}

function App() {
  return (
    <div className="App">
        <Greeter/>
    </div>
  );
}

export default App;
