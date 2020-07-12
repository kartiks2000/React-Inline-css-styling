import React,{ Component } from 'react';
import './App.css';
import Userinput from './Userinput/Userinput';

class App extends Component {

  state ={
    inp:"woooo"
  }

  inputchanged = (event) => {
    this.setState({
      inp:event.target.value
    });
  }

  render(){
    return (
      <div className="App">
        <h1>hello</h1>
        <Userinput changed={this.inputchanged} text={this.state.inp}></Userinput>
      </div>
    );
  }
}

export default App;
