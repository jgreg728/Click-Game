import React, { Component } from 'react';
import ClickCard from "./components/ClickCard";
import Wrapper from "./components/Wrapper/index.js";
import './App.css';

const fighter = require("./clickCards.json");

class App extends Component {
  
    state = {
      clickCards: fighter,
      currentScore: 0,
      topScore: 0
    }

    handleCardClick = (id) => {
      let guessedCorrectly = false;

      // const cardClicked = this.state.smashList.find(fighter => fighter.id === id)
      const updatedSmashList = this.state.smashList.map(fighter =>
        {
          // check id when clicked
          if (fighter.id === id) {
            // if the fighter wasn't clicked
            if(!fighter.clicked) {
              fighter.clicked = true;
              guessedCorrectly = true;
            }
          }

          return fighter
          
        });
        
        (guessedCorrectly) ?
          this.handleCorrectGuess(updatedSmashList) :
          this.handleIncorrectGuess(updatedSmashList)
        }

        shuffleFighters = (smashList) => smashList.sort(() => .5 - 
        Math.random());

      handleCorrectGuess = (smashList) => {
        const {currentScore, topScore} = this.state;

        const newScore = currentScore + 1;

        const newTopScore = (newScore > topScore) ? newScore :
        topScore;

        this.setState({
          smashList: this.shuffleFighters(smashList),
          currentScore: newScore,
          topScore: newTopScore,
        })
      }

      handleIncorrectGuess = (smashList) => {
        const resetSmashList = smashList.map(fighter => {
          fighter.clicked = false;
          return fighter;
        })

        this.setState({
          smashList: this.shuffleFighters(resetSmashList),
          currentScore: 0
        })
      }

    render() {
    console.log(this.state.clickCards);
    return (
      <Wrapper>
       <h1 className="title">Click Card</h1>
       {
         this.state.clickCards.map(fighter => {
           return (
           <ClickCard
           key={fighter.id}
           name={fighter.name}
           image={fighter.image}
          />
         )
       })
      
       };
       
    </Wrapper>
    )
  }
}

export default App;