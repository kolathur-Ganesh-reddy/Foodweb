// src/components/banner/Banner.jsx
import React from "react";
import "./Banner.css";
import biryani1 from "../../assets/biryani-4.jpg";
import biryani2 from "../../assets/biryani-3.avif";
import biryani3 from "../../assets/biryani-2.jpg";
import { useCart } from "../../components/cart/CartContext";

const MenuBannerSection = () => {
  const { addToCart } = useCart();

  const bannerData = [
    {
      id: 1,
      tag: "Food taste",
      name: "Lucknowi (Awadhi) Biryani",
      image: biryani1,
      price: "199",
    },
    {
      id: 2,
      tag: "Only today",
      name: "Beary Biryani",
      image: biryani2,
      price: "199",
    },
    {
      id: 3,
      tag: "Premium quality",
      name: "Thalassery Biryani",
      image: biryani3,
      price: "199",
    },
  ];

  return (
    <section className="section-2">
      <div className="menu-section">
        <div className="content-wrapper">
          <div className="row">
            <div className="text-content col-lg-12">
              <div className="menu-heading text-center mb-5">
                <p className="menu-subtitle mb-3">
                  dishes
                </p>
                <h2 className="menu-title">
                  Our special Biryani at Rs.199 crafted with love, <span>served with perfection!</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Cards Section */}
      <div className="container-3">
        {bannerData.map((item) => (
          <div className="card" key={item.id}>
            <p>{item.tag}</p>
            <h3>{item.name}</h3>
            <p>Rs. {item.price}</p>
            <button
              onClick={() => addToCart(item)}
              style={{
                display: "inline-block",
                fontSize: "14px",
                fontWeight: "bold",
                color: "#e6a15d",
                textDecoration: "none",
                marginTop: "10px",
                background: "none",
                border: "none",
                cursor: "pointer"
              }}
            >
              ADD NOW &gt;
            </button>
            <img src={item.image} alt={item.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuBannerSection;
