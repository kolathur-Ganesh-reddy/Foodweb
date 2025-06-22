import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/item/${encodeURIComponent(item.name)}`, { state: { item } });
  };

  return (
    <div
      className={`col-lg-4 col-sm-6 dish-box-wp ${item.category.toLowerCase()}`}
      data-cat={item.category.toLowerCase()}
      onClick={handleClick} // Navigate to details page on click
      style={{ cursor: "pointer" }}
    >
      <div className="dish-box text-center">
        <div className="dist-img">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="dish-rating">
          {item.rating} <i className="uil uil-star"></i>
        </div>
        <div className="dish-title">
          <h3 className="h3-title">{item.name}</h3>
          <p>{item.time} mins</p>
        </div>
        <div className="dish-info">
          <ul>
            <li>
              <p>Type</p>
              <b>{item.type}</b>
            </li>
            <li>
              <p>place</p>
              <b>{item.place}</b>
            </li>
          </ul>
        </div>
        <div className="dist-bottom-row">
          <ul>
            <li>
              <b>Rs. {item.price}</b>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
