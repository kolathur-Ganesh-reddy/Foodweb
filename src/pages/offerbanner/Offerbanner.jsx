import React from "react";
import "./Offerbanner.css";
import burger2 from "../../assets/burger-2.jpg";
import burger3 from "../../assets/burger-3.jpg";
import burger4 from "../../assets/burger-4.jpg";
import { FaArrowRight } from "react-icons/fa";
import { useCart } from "../../components/cart/CartContext"; // 🛒 Cart context

const Offerbaner = () => {
  const { addToCart } = useCart(); // 🛒 Access addToCart function

  // 🔥 Handlers for different burgers
  const handleAddSpicyChicken = () => {
    addToCart({
      name: "Spicy Chicken Burger",
      description: "Juicy, fiery, and packed with bold flavors",
      price: 199,
      image: burger2,
    });
  };

  const handleAddCheeseburger = () => {
    addToCart({
      name: "Cheeseburger & Spicy",
      description: "Classic cheesy delight with spicy twist",
      price: 179,
      image: burger3,
    });
  };

  const handleAddArtisan = () => {
    addToCart({
      name: "Artisan Craft Burger",
      description: "Handcrafted gourmet burger with premium ingredients",
      price: 229,
      image: burger4,
    });
  };

  return (
    <section className="section-4 anime-style">
      <div className="text-h-A">
        <h2>🍔 Blazing Hot Chicken Burger</h2>
      </div>

      <div className="container-2-A">
        {/* Main Promotion Banner */}
        <div className="promo-A anime-glow">
          <div className="promo-text-A">
            <h2>🔥 Spicy Chicken Burger</h2>
            <p>
              Juicy, fiery, and packed with bold flavors — our Spicy Chicken Burger brings the heat!
            </p>
            <button className="anime-btn" onClick={handleAddSpicyChicken}>
              ✨ ADD NOW
            </button>
          </div>
          <img className="promo-img-A anime-bounce" src={burger2} alt="Spicy Chicken Burger" />
        </div>

        {/* Discount Section */}
        <div className="discount-container-A">
          <div className="discount-A fruits comic-box">
            <div className="discount-text-A">
              <h3>🌟 20% Off</h3>
              <h4>Cheeseburger & Spicy</h4>
              <p>
                <a href="#" onClick={(e) => { e.preventDefault(); handleAddCheeseburger(); }}>
                  Add Now <FaArrowRight />
                </a>
              </p>
            </div>
            <img src={burger3} alt="Cheeseburger & Spicy" />
          </div>

          <div className="discount-A baked comic-box">
            <div className="discount-text-A">
              <h3>💥 15% Off</h3>
              <h4>Artisan Craft Burgers</h4>
              <p>
                <a href="#" onClick={(e) => { e.preventDefault(); handleAddArtisan(); }}>
                  Add Now <FaArrowRight />
                </a>
              </p>
            </div>
            <img src={burger4} alt="Artisan Craft Burgers" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerbaner;
