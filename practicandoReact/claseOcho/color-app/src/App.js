import React, { Component } from 'react'
import Button from './components/Button';
import "./App.css";

function shuffleColors(array) {
  let suffle = array.length,  randomIndex;
  while (suffle !== 0) {
    randomIndex = Math.floor(Math.random() * suffle);
    suffle--;
    [array[suffle], array[randomIndex]] = [
      array[randomIndex], array[suffle]];
  }
  return array;
}


export default class App extends Component {
  state = {
    colors: ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME","PURPLE"]
  }

  shuffle = () => {
    this.setState(()=> {
      return {
        colors: shuffleColors(this.state.colors)
      }
    })
  }

  
  render() {
    return (
      <section className="container">
        <div className="panel">
          {this.state.colors.map(color => <div key={color} className={color}>{color}</div>)}
        </div>
        <Button fn={this.shuffle} />
      </section>
    )
  }
}
