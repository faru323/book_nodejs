import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthorDetail = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:8080/authors:id").then((res) => setCards(res.data));
    }, []);
  return (
    <div>
    {cards.map((card) => {
        return (
          <div className="cards">
            <div className="cardDiv1">
    
              <h4> Author Name:{card.name}{card.surname}</h4>
              <p>
               
              </p>
              <p>
                <b>Books :</b> <span>{card.books}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default AuthorDetail
