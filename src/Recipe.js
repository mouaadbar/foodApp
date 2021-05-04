import React from 'react';
import './recepe.css';

const Recipe = ({title, calories , image,ingredients}) =>{
    return (
        <div className = "recepe">
            <h1 className="title">{title}</h1>
            <ol>
            {
                ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))
            }
            </ol>
            <p className="calories">calories :{calories}</p>
            <img className="imge" src ={image}  alt=""></img>
           
        </div>
    )
}

export default Recipe;