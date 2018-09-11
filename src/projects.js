import React, {Component} from 'react';

export default class Projects extends React.Component{
    render(){
        return(
            <div className="projectsContainer">
                <div className="todo">
                    Todo List
                </div>
                <div className="llamito">
                    Llamito
                </div>
                <div className="tictactoe">
                    Tic Tac Toe
                </div>
                <div className="shoppingCart">
                     Shopping Cart
                </div>
            </div> 
        );
    }
}