// ...imports
import React, { useState } from "react";
import "./Offers.css";
import offer1 from "../../assets/pizza1.jpg";
import offer2 from "../../assets/burger1.jpg";
import offer3 from "../../assets/biryani.jpeg";
import offer4 from "../../assets/sandwich2.jpg";
import { useCart } from "../../components/cart/CartContext";

const Offers = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState("regular");
  const [selectedCrust, setSelectedCrust] = useState("New Hand Tossed");

  const { addToCart } = useCart();

  const offersData = [
    {
      id: 1,
      name: "50% Off on Pizza",
      description: "Get half-price on all large pizzas.",
      type: "non veg",
      place: "India",
      rating: "5",
      time: "40 mins",
      image: offer1,
      price: "Rs.499",
      discounted: "399",
      sizeOptions: [
        { size: "Regular", price: 199 },
        { size: "Medium", price: 299 },
        { size: "Large", price: 399 }
      ],
     
    },
    {
      id: 2,
      name: "Buy 1 Get 1 Free Burger",
      description: "Order one burger and get another free!",
      type: "non veg",
      place: "India",
      rating: "5",
      time: "40 mins",
      image: offer2,
      price: "Rs.399",
      discounted: "299",
      sizeOptions: [
        { size: "Regular", price: 199 },
        { size: "Medium", price: 299 },
        { size: "Large", price: 399 }
      ],
    
    },
    {
      id: 3,
      name: "50% Off on Biryani",
      description: "Delicious biryani at half the price!",
      type: "non veg",
      place: "India",
      rating: "4.8",
      time: "35 mins",
      image: offer3,
      price: "Rs.299",
      discounted: "199",
      crustOptions: [
        { type: "Cheese Burst biryani", price: 338 },
        { type: "New Hand Tossed biryani", price: 259 }
      ]
    },
    {
      id: 4,
      name: "50% Off on Sandwich",
      description: "Get your favorite sandwich at a discounted price!",
      type: "veg",
      place: "India",
      rating: "4.5",
      time: "25 mins",
      image: offer4,
      price: "Rs.199",
      discounted: "149",
      crustOptions: [
        { type: "Cheese Burst Sandwich", price: 338 },
        { type: "New Hand Tossed Sandwich", price: 259 }
      ]
    },
  ];

  const handleItemClick = (offer) => {
    setSelectedItem(offer);
    setSelectedSize("regular");
    setSelectedCrust(offer.crustOptions?.[0]?.type || "");
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  const handleAddToCart = () => {
    if (!selectedItem) return;

    const sizeObj = selectedItem.sizeOptions?.find(opt => opt.size.toLowerCase() === selectedSize);
    const crustObj = selectedItem.crustOptions?.find(opt => opt.type === selectedCrust);

    const totalPrice = (sizeObj?.price || 0) + (crustObj?.price || 0);

    const itemToAdd = {
      name: selectedItem.name,
      image: selectedItem.image,
      price: totalPrice,
      size: selectedSize,
      crust: selectedCrust,
    };

    addToCart(itemToAdd);
    handleClose(); // Just close the popup now, no alert
  };

  return (
    <section className="section-4">
      <div className="offers-container">
        <h2 className="h-h">Special Food Offers</h2>
        <div className="offers-list">
          {offersData.map((offer) => (
            <div className="offer-card" key={offer.id} onClick={() => handleItemClick(offer)}>
              <div>
                <img src={offer.image} alt={offer.name} className="image-3" />
              </div>
              <div className="info-3">
                <h3>{offer.name}</h3>
                <p className="offer-price"><span>{offer.price}</span> {offer.discounted}</p>
                <div className="design-1">
                  <ul>
                    <li><p>Type: {offer.type}</p></li>
                    <li><p>Place: {offer.place}</p></li>
                  </ul>
                </div>
                <div className="design-1">
                  <ul>
                    <li><p>⭐ {offer.rating}</p></li>
                    <li><p>⏳ {offer.time}</p></li>
                  </ul>
                </div>
                <p>{offer.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedItem && (
          <div className="selected-item">
            <span className="close-btn" onClick={handleClose}>&times;</span>
            <h2>Food Details</h2>
            <img src={selectedItem.image} alt={selectedItem.name} className="selected-image" />
            <h3>{selectedItem.name}</h3>
            <p>{selectedItem.description}</p>

            <div className="options-polls">
              {selectedItem?.sizeOptions?.length > 0 && (
                <>
                  <label className="poll-label">Choose Size:</label>
                  <div className="crust-list">
                    {selectedItem.sizeOptions.map((option, index) => (
                      <label key={index} className="crust-item">
                        <input
                          type="radio"
                          name="size"
                          value={option.size}
                          checked={selectedSize === option.size.toLowerCase()}
                          onChange={() => setSelectedSize(option.size.toLowerCase())}
                        />
                        <span className="crust-name">{option.size}</span>
                        <span className="crust-price">₹{option.price}</span>
                      </label>
                    ))}
                  </div>
                </>
              )}

              {selectedItem?.crustOptions?.length > 0 && (
                <>
                  <label className="poll-label">Choose Crust:</label>
                  <div className="crust-list">
                    {selectedItem.crustOptions.map((crust, index) => (
                      <label key={index} className="crust-item">
                        <input
                          type="radio"
                          name="crust"
                          value={crust.type}
                          checked={selectedCrust === crust.type}
                          onChange={() => setSelectedCrust(crust.type)}
                        />
                        <span className="crust-name">{crust.type}</span>
                        <span className="crust-price">₹{crust.price}</span>
                      </label>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button className="add-now-btn" onClick={handleAddToCart}>Add Now</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Offers;
