import React, { Component } from 'react';
import ClickCard from "./components/ClickCard";
import Wrapper from "./components/Wrapper/index.js";
import './App.css';

const cards = require("./clickCards.json");

class App extends Component {
  
    state = {
      clickCards: cards
    }
  render() {
    console.log(this.state.clickCards);
    return (
      <Wrapper>
       <h1 className="title">Click Card</h1>
       {
         // this.state.cards.length !== 0 ? 
         this.state.clickCards.map(cards => {
           return (
           <ClickCard
           key={cards.id}
           name={cards.name}
           image={cards.image}
          />
         )
       })
      //  :""
       };
       
    </Wrapper>
    )
  }
}

export default App;