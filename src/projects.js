import React, {Component} from 'react';
import TodoList from './todo'

export default class Projects extends React.Component{
    render(){
        return(
            <div className="projectsContainer">
                <div className="todo">
                    <TodoList/>
                </div>
                {/* <div className="llamito">
                    Llamito
                </div>
                <div className="tictactoe">
                    Tic Tac Toe
                </div>
                <div className="shoppingCart">
                     Shopping Cart
                </div> */}
            </div> 
        );
    }
}