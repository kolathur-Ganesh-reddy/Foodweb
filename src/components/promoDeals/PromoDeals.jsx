import React from "react";
import "./PromoDeals.css";
import { useCart } from "../../components/cart/CartContext"; // ✅ Import useCart

const deals = [
  {
    id: 1,
    name: "Delicious Pizza",
    description: "Fresh & Hot Pizza",
    image: "https://coolwallpapers.me/picsup/5745760-pizza-wallpapers.jpg",
    price: "349",
    type: "Pizza",
    place: "Promo Deal",
    rating: "4.3",
    time: "25"
  },
  {
    id: 2,
    name: "Only Today",
    description: "Buy 1 Get 1 Free",
    image: "https://img.freepik.com/premium-photo/traditional-italian-pizza-delicious-taste-pepperoni-pizza-generative-ai_911620-10480.jpg",
    price: "399",
    type: "Pizza",
    place: "Promo Deal",
    rating: "4.6",
    time: "22"
  },
  {
    id: 3,
    name: "Premium Quality",
    description: "Gourmet Pizza",
    image: "https://plazzapizza.online/images/plazza-pizza/1612694122-pizza-2.jpg",
    price: "459",
    type: "Pizza",
    place: "Promo Deal",
    rating: "4.8",
    time: "28"
  },
];

const PromoDeals = () => {
  const { addToCart } = useCart(); // ✅ Get addToCart from context

  return (
    <section>
      <div className="text-2">
        <div className="text-h3">
          <h1>Bite Into Happiness: Fresh & Tasty Pizzas</h1>
        </div>
      </div>
      <div className="deals-wrapper">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="deal-card"
            style={{ backgroundImage: `url(${deal.image})` }}
          >
            <h3 className="deal-title">{deal.name}</h3>
            <p className="deal-description">{deal.description}</p>
            <button onClick={() => addToCart(deal)}>ADD NOW &gt;</button> {/* ✅ Add to cart */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoDeals;
