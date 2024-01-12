import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Card(props) {
  const card = props.item;
  let navigate = useNavigate() ;
  const handleOnclick = () =>{
      navigate('/cardsDetails/'+card.id) ;
  }
  return (
    <div>
      <div className="card" style={{width: "18rem"}} onClick={handleOnclick}>
        <img src={card.imageURL} className="img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{card.name}</h5>
          <p className="card-text">
            {card.description}
          </p>
          <p className="mt-2 fw-bold">${card.price}</p>
          <button className="btn btn-outline-primary">
            <Link className="text-decoration-none text-black" href={`/cardsDetails/:${card.id}`}>View More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
