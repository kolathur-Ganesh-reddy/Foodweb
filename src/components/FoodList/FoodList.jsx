import React, { useState } from "react";
import "./FoodList.css";
import { useCart } from "../../components/cart/CartContext";
import fd1 from "../../assets/fd1.jpg";
import fd2 from "../../assets/fd2.jpg";
import fd3 from "../../assets/fd3.jpg";
import fd4 from "../../assets/fd4.jpg";
import fd5 from "../../assets/fd5.jpg";
import fd6 from "../../assets/fd6.jpg";

const foodItems = [
  { name: "Golden Fries", description: "Crispy Fries, Salt, Butter, Cheese, Spices", price: 199, image: fd1 },
  { name: "Grilled Chicken Burger", description: "Chicken Breast, Tomatoes, Cheese, Iceberg Salad", price: 159, image: fd2 },
  { name: "Spicy Chicken Wings", description: "Deep Fried Chicken Wings", price: 219, image: fd3 },
  { name: "Fresh Garden Salad", description: "Tomatoes, Cucumber, Black Beans, Olives, Salad, Cheese", price: 130, image: fd4 },
  { name: "Garlic Potato Wedges", description: "Crispy Garlic Baked Potato Wedges, Cheese, Salt", price: 160, image: fd5 },
  { name: "Classic Chicken Salad", description: "Chicken Meat, Special Gravy, Fresh Bread", price: 200, image: fd6 },
];

const FoodList = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { addToCart } = useCart();

  const handleOrderNow = () => {
    if (selectedItem) {
      addToCart(selectedItem); // Keep modal open
    }
  };

  return (
    <section>
      <div className="text-h1">
        <h1>Hot & Crispy Inferno</h1>
      </div>

      <div className="food-list">
        {foodItems.map((item, index) => (
          <div key={index} className="food-item" onClick={() => setSelectedItem(item)}>
            <img src={item.image} alt={item.name} />
            <div className="food-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <div className="food-price">Rs. {item.price}</div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="food-details-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setSelectedItem(null)}>&times;</span>
            <img className="image-1" src={selectedItem.image} alt={selectedItem.name} />
            <div className="item-info1">
              <h2 className="text-h2">{selectedItem.name}</h2>
              <p className="text-p1">{selectedItem.description}</p>
              <div className="food-prices">Rs. {selectedItem.price}</div>
              <button className="order-btn" onClick={handleOrderNow}>Add Now</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FoodList;
