import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Books = () => {
    let navigate = useNavigate();
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/books").then((res) => setCards(res.data));
  }, []);
  const handleClick = () => {
    navigate('/books/:id')
  };
  return (
    <div className="salam">
      {cards.map((card) => {
        return (
          <div className="cards">
            <div className="cardDiv" onClick={handleClick}>
              <div>
                <img src={card?.url} alt="images" />
              </div>
              <h4> Title:{card.name}</h4>
              <p>
                <b>Category :</b> <span>{card.category}</span>
              </p>
              <p>
                <b>Price :</b> <span>{card.price}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Books;