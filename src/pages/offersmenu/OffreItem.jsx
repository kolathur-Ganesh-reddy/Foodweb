import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useCart } from "../../components/cart/CartContext"; // Cart context

const OfferItem = ({ item }) => {
  const [activeItem, setActiveItem] = useState(null);
  const { addToCart } = useCart(); // Use cart context

  const handleClick = () => {
    setActiveItem(item);
  };

  const closeDetail = () => {
    setActiveItem(null);
  };

  const handleAddNow = () => {
    // Use description as name when adding to cart
    const itemWithDescriptionAsName = {
      ...activeItem,
      name: activeItem.description,
    };
    addToCart(itemWithDescriptionAsName);
  };

  const renderDetail = () =>
    ReactDOM.createPortal(
      <div className="item-detail-overlay">
        <div className="item-detail-top">
          <button className="close-btn" onClick={closeDetail}>×</button>
          <h2>{activeItem.name}</h2>
          <img src={activeItem.image} alt={activeItem.name} />
          <p>{activeItem.description}</p>
          <p>
            <strong>Price:</strong> Rs. {activeItem.discounted}
            <span className="original-price"> {activeItem.price}</span>
          </p>
          <button className="add-now-btn-3" onClick={handleAddNow}>Add Now</button>
        </div>
      </div>,
      document.body
    );

  return (
    <>
      {activeItem && renderDetail()}

      <div
        className={`col-lg-4 col-sm-6 dish-box-wp-2 ${item.category.toLowerCase()}`}
        data-cat={item.category.toLowerCase()}
        style={{ cursor: "pointer", marginBottom: "20px" }}
        onClick={handleClick}
      >
        <div className="dish-box-2 text-center">
          <div className="dist-img-2">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="dish-title-2">
            <h3 className="h3-title-2">{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.time} mins</p>
          </div>
          <div className="dish-info-2">
            <ul>
              <li>
                <p>Type</p>
                <b>{item.type}</b>
              </li>
              <li>
                <p>Place</p>
                <b>{item.place}</b>
              </li>
            </ul>
          </div>
          <div className="dist-bottom-row-2">
            <ul>
              <li>
                <b>
                  Rs. <span className="original-price">{item.price}</span>{" "}
                  {item.discounted}
                </b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferItem;
