import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Navbar from "./components/Title";
import cards from "./cards.json";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
    state = {
        cards,
        winCount: 0
    };
    render() {
        return (
           
           <Router>
            <Wrapper >
                <Navbar />
                {this.state.cards.map(cards=>(
                <Card className="wrapper"
                src={cards.image}
                />
                ))}    
            </Wrapper>
            </Router>
            
           
        )
    }
}
export default App;