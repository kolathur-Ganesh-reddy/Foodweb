import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ItemDetails.css"; // Import CSS for styling
import { IoMdStarHalf } from "react-icons/io";
import MenuItem from "./MenuItem"; // Import MenuItem component
import menuData from "./menuData"; // Import menu items
import { useCart } from "../../components/cart/CartContext"; // path might vary

const ItemDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item;
  const { addToCart } = useCart(); // Accessing the addToCart function from context
  console.log("Item added to cart:", item);

  if (!item) {
    return <p>Item not found!</p>;
  }

  return (
    <section className="section-3">
      <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
      
      <div className="item-details-container">
        <div className="item-details">
          <img src={item.image} alt={item.name} className="item-image" />
          <div className="item-info">
            <h2 className="item-name">{item.name}</h2>
            <p className="item-price">Price: Rs. {item.price}</p> 
            <div className="item-design">
              <ul>
                <li><p className="item-type">Type: {item.type}</p></li>
                <li><p className="item-place">Place: {item.place}</p></li>
              </ul>
            </div>
            <div className="item-design">
              <ul>
                <li><p className="item-rating"><IoMdStarHalf className="star-icon"/>{item.rating}</p></li>
                <li><p className="item-calories">{item.time} mins</p></li>
              </ul>
            </div>
            <p className="item-desc">Delicious {item.name} with fresh ingredients.</p>
            <button className="order-btn" onClick={() => addToCart(item)}>Add Now</button>

          </div>
        </div>
      </div>

      {/* New Section: Show Other Menu Items */}
      <h2 className="menu-section-title">Other Menu Items</h2>
      <div className="menu-items-container">
        {menuData.map((menuItem, index) => (
          <MenuItem key={index} item={menuItem} />
        ))}
      </div>
    </section>
  );
};

export default ItemDetails;
