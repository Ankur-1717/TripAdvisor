import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const card = props.item;
  let navigate = useNavigate() ;
  const handleOnclick = () =>{
      navigate('/cardsDetails/'+card.id) ;
  }
  return (
    <div>
      <div className="card" style={{width: "18rem"}} onClick={handleOnclick}>
        <img src={card.imageURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{card.name}</h5>
          <p className="card-text">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
}
