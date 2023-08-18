import React from 'react';

const Card = ({cook}) => {
    return (
        <li className='card'>
            <h2> {cook.strMeal}</h2>
            <p> origine : {cook.strArea}</p>
            <img src={cook.strMealThumb}  alt={cook.strMeal}/>
            <p> {cook.strInstructions}</p>


        </li>
    );
};

export default Card;