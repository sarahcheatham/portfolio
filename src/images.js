import React, {Component} from 'react';
import Image1 from './puke.jpg'

export default class Images extends React.Component{
    render(){
        return(
            <div className="imagesContainer">
                <img src={Image1} alt="llamito" className="images"/>  
            </div>
        ) 
    }
}