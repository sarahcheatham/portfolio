import React, {Component} from 'react';


export default class Button extends React.Component{
   
    render(){
        return(
            <span className={this.props.className}>
                <div className="overlay">
                </div>
                <div className="button">
                    <a href={this.props.href}>{this.props.text}</a>
                </div>
            </span>
        ) 
    }
}