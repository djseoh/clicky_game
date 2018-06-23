import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Title from "./components/Title";
import cards from "./cards.json";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

    state = {
        cards,
        winCount: 0
  
    };
// add function for clicking on image.
// if image is clicked, create an array with clicked images.
// if image clicked is already in the array, restart game.
// if image is not in the array, increase the wincount by 1.
handleResults = () => {
    
    winCard.push(cards.id);
    if (!winCard.cards.id) {
        win();
    } else{
        restart();
    }

};
const win = () => {
    this.setState({ winCount: this.state.winCount + 1});
};
const restart = ()=> {
    this.setState({winCount: 0})
}

    render() {
        return (
           
           <Router>
            <Wrapper >
                <Title 
                winCount={this.state.winCount}
                />
                {this.state.cards.map(cards=>(
                <Card className="wrapper"
                src={cards.image}
                handleResults={this.handleResults}
                />
                ))}   
            </Wrapper>
            </Router>
        )
    }
}
export default App;