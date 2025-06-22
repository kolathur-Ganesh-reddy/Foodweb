import React, { useState } from "react";
import OfferItem from "./OffreItem";
import OfferFilter from "./OfferFilter";
const images = import.meta.glob("../../assets/*", { eager: true });

const menuData = [
  { name: "Pizza", image: images["../../assets/pizza1.jpg"].default, rating: 5, time: 120, type: "Non Veg", place: "india", price: 499, category: "Pizza", description : "20% Off on Pizza", discounted : "399", },
  { name: "Burger", image: images["../../assets/burger1.jpg"].default, rating: 4.3, time: 80, type: "Non Veg", place: "india", price: 399, category: "Burger", description : "10% Off on Burger", discounted : "299" },
  { name: "Chicken Biryani", image: images["../../assets/biryani.jpeg"].default , rating: 4, time: 100, type: "Veg", place: "india", price: 249, category: "Non veg", description : "20% Off on Chicken Biryani", discounted : "299" },
  { name: "Chicken", image: images["../../assets/chiken1.webp"].default , rating: 4.5, time: 120, type: "Non Veg", place: "india", price: 379, category: "Non veg", description : "15% Off on Chicken", discounted : "299" },
  { name: "Bread Chicken Sandwich", image: images["../../assets/sandwich2.jpg"].default , rating: 5, time: 120, type: "Non Veg", place: "india", price: 299, category: "Non veg", description : "15% Off on Bread Chicken Sandwich", discounted : "199" },
  { name: "Sandwich", image: images["../../assets/shanvege1.jpg"].default , rating: 5, time: 120, type: "Veg", place: "india", price: 399, category: "veg", description : "10% Off on Sandwich", discounted : "299" },
];

const categories = ["All", "Pizza", "Burger", "Non veg", "veg"];

const OfferList = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu = activeCategory === "All" 
    ? menuData 
    : menuData.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div>
      <OfferFilter categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <div className="menu-list-row-2">
      <div id="menu-dish-2">
         {filteredMenu.map((item, index) => (
    <OfferItem key={index} item={item} />
  ))}
</div>

      </div>
    </div>
  );
};

export default OfferList;
