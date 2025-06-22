import React from "react";
import "./PromoBanner.css";
import burger2 from "../../assets/burger-2.jpg";
import burger3 from "../../assets/burger-3.jpg";
import burger4 from "../../assets/burger-4.jpg";
import { FaArrowRight } from "react-icons/fa";
import { useCart } from "../../components/cart/CartContext"; // ✅ Import cart context

const PromoBanner = () => {
  const { addToCart } = useCart(); // ✅ Use cart context

  // Static items with full structure
  const promoMain = {
    id: 1,
    name: "Fresh Spicy Chicken Burger",
    description: "Juicy, fiery, and packed with bold flavors—our Spicy Chicken Burger brings the heat!",
    image: burger2,
    price: "299",
    type: "Burger",
    place: "Promo Deal",
    rating: "4.5",
    time: "20"
  };

  const discountFruits = {
    id: 2,
    name: "Cheeseburger & Spicy",
    off: "20%",
    image: burger3,
    price: "299",
    type: "Burger",
    place: "Promo Deal",
    rating: "4.4",
    time: "18"
  };

  const discountBaked = {
    id: 3,
    name: "Artisan Craft Burgers",
    off: "15%",
    image: burger4,
    price: "299",
    type: "Burger",
    place: "Promo Deal",
    rating: "4.6",
    time: "22"
  };

  return (
    <section className="section-1">
      <div className="text-h">
        <h2>Blazing Hot Chicken Burger</h2>
      </div>

      <div className="container-2">
        {/* Main Promotion Banner */}
        <div className="promo">
          <div className="promo-text">
            <h2>{promoMain.name}</h2>
            <p>{promoMain.description} Rs.{promoMain.price}</p>
            <button onClick={() => addToCart(promoMain)}>ADD NOW</button> {/* ✅ Add to cart */}
          </div>
          <img className="promo-img" src={promoMain.image} alt={promoMain.name} />
        </div>

        {/* Discount Section */}
        <div className="discount-container">
          {/* Fruits Discount */}
          <div className="discount fruits">
            <div className="discount-text">
              <h3>{discountFruits.off} Off</h3>
              <h4>{discountFruits.name}</h4>
              <p>Rs.{discountFruits.price}</p>
              <button onClick={() => addToCart(discountFruits)}>
                Add Now <FaArrowRight />
              </button> {/* ✅ Add to cart */}
            </div>
            <img src={discountFruits.image} alt={discountFruits.name} />
          </div>

          {/* Baked Discount */}
          <div className="discount baked">
            <div className="discount-text">
              <h3>{discountBaked.off} Off</h3>
              <h4>{discountBaked.name}</h4>
              <p>Rs.{discountBaked.price}</p>
              <button onClick={() => addToCart(discountBaked)}>
                Add Now <FaArrowRight />
              </button> {/* ✅ Add to cart */}
            </div>
            <img src={discountBaked.image} alt={discountBaked.name} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
