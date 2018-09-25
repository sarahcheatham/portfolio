import React, {Component} from 'react';
import Image1 from './puke.jpg';
import Image2 from './todo.png';

export default class Images extends React.Component{
   
    render(){
        return(
            <div className="imagesContainer">
                <a href="https://sarahcheatham.github.io/web-workbook/09week/checkpoint-3/">
                    <img src={Image1} alt="llamito" id="image1" onClick={()=>this.renderLinks()}/>
                </a>
                <img src={Image2} alt="todo list" id="image2"/>
            </div>
        ) 
    }
}