import React, {Component} from 'react';
import Image1 from './puke.jpg';
import Image2 from './todo.png';
import Button from './button.js';

export default class Images extends React.Component{
   
    render(){
        console.log(this)
        return(
            <div className="imagesContainer">
                <img 
                    src={Image1} 
                    alt="llamito" 
                    id="image1"
                />
                <Button href="https://sarahcheatham.github.io/web-workbook/09week/checkpoint-3/" text="Play Llamito!" className="box"/>
                <img 
                    src={Image2} 
                    alt="todo list" 
                    id="image2"
                /> 
                <Button href="https://sarahcheatham.github.io/todo/todo-list/" text="View My App" className="box2"/>
            </div>
        ) 
    }
}