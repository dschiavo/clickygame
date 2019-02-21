//imports dependencies and files

import React, { Component } from 'react';
import NavBar from "./components/NavBar/NavBar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import BobCard from "./components/BobCard/BobCard";
import './App.css';



const Bob = require('./Bob.json');





  //sets state to 0 or empty
class App extends Component {
  state = {
    Bob,
    clickedBob: [],
    score: 0
  };

//when you click on a card it is removed from the Bob array and put in clickedBob array
  imageClick = event => {
    const currentBob = event.target.alt;
    const BobAlreadyClicked =
      this.state.clickedBob.indexOf(currentBob) > -1;

//if you click on a card that has already been selected, the game is reset and cards reordered
    if (BobAlreadyClicked) {
      this.setState({
        Bob: this.state.Bob.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedBob: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available card, your score is increased and cards reordered
    } else {
      this.setState(
        {
          Bob: this.state.Bob.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedBob: this.state.clickedBob.concat(
            currentBob
          ),
          score: this.state.score + 1
        },
//if all 12 are correct you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              Bob: this.state.Bob.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedBob: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (<div>
      <NavBar 
        score={this.state.score}
      />
      <Jumbotron />
      <div>
        {this.state.Bob.map(Bob => (
          <BobCard
            imageClick={this.imageClick}
            id={Bob.id}
            key={Bob.id}
            image={Bob.image}
          />
        ))}
      </div>
      
    </div>
  );
}
}
export default App;
