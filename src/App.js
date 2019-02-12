//imports dependencies and files

import React, { Component } from 'react';
import Navbar from "./components/NavBar/NavBar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import BobCard from "./components/BobCard/BobCard";
import Bob from "./Bob.json";



import './App.css';

class App extends Component {

  state = {
    Bob,
    clickedCard: [],
    score: 0
  };

//when card is clicked, remove card from array

imageClick = event => {
  const currentBob = event.target.alt;
  const CardAlreadyClicked = 
    this.state.clickedCard.indexOf(currentBob) > -1;



//if a card is clicked that has already been clicked, the game is reset and cards reshuffled

if (CardAlreadyClicked) {
  this.setState({
    Bob: this.state.Bob.sort(function(a,b) {
      return 0.5 - Math.random();

  }),
  clickedCard: {},
  score: 0
});
alert("Sorry, you lost.  Wanna play again?");

//if you click on a card that hasn't already been clicked, score increases and cards reshuffle
} else {
  this.setState(
    {
      Bob: this.state.Bob.sort(function(a, b){
        return 0.5 - Math.random();
      }),
      clickedCard: this.state.clickedCard.concat(
        currentBob
      ),
      score: this.state.score +1
    },
    ()=> {
      if (this.state.score === 12) {
        alert("Yay! You win!");
        this.setState({
          Bob: this.state.Bob.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCard: [],
          score: 0
       
        });
      }
    }
  );
  }
};


  render() {
    return (
      
    <div>
      <Navbar score={this.state.score}/>
      <Jumbotron />
      <div className="wrapper">
      {this.state.Bob.map(fish => (
        <BobCard
        imageclick={this.imageClick}
        id={Bob.id}
        key={Bob.id}
        image={Bob.id}
        />
      ))}
        
        </div>
    

    </div>
   
        
      
    );
  }
}

export default App;
