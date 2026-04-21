import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'



const TitleCards = ({ onCardClick }) => {
    const cardsRef = useRef();
const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel);
},[])
    
  return (
    <div className='title__cards'>
        <h2>Trending Searches</h2>
        <div className="card__list" ref={cardsRef}>
            {cards_data.map((card, index) => {
                return (
                    <div 
                    className="card" 
                    key={index} 
                    onClick={() => onCardClick(card.name)}
                    style={{ cursor: 'pointer' }}>
                        <img src={card.image} alt="" />
                        <p>{card.name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default TitleCards