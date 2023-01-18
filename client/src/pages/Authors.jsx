import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Authors = () => {
    let navigate = useNavigate();
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/authors").then((res) => setCards(res.data));
  }, []);
  const handleClick = () => {
    navigate('/authors/:id')
  };
  return (
    <div className="salam">
      {cards.map((card) => {
        return (
          <div className="cards">
            <div className="cardDiv1" onClick={handleClick}>
    
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
  );
};

export default Authors;