import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import MenuFilters from "./MenuFilters";

const images = import.meta.glob("../../assets/*", { eager: true });

const menuData = [
  { name: "Pizza", image: images["../../assets/pizza1.jpg"].default, rating: 5, time: 120, type: "Non Veg", place: "india", price: 499, category: "Pizza" },
  { name: "Burger", image: images["../../assets/burger1.jpg"].default, rating: 4.3, time: 80, type: "Non Veg", place: "india", price: 359, category: "Burger" },
  { name: "Chicken Biryani", image: images["../../assets/biryani.jpeg"].default , rating: 4, time: 100, type: "Veg", place: "india", price: 149, category: "Non veg" },
  { name: "Chicken", image: images["../../assets/chiken1.webp"].default , rating: 4.5, time: 120, type: "Non Veg", place: "india", price: 379, category: "Non veg" },
  { name: "Bread Chicken Sandwich", image: images["../../assets/sandwich2.jpg"].default , rating: 5, time: 120, type: "Non Veg", place: "india", price: 99, category: "Non veg" },
  { name: "Sandwich", image: images["../../assets/shanvege1.jpg"].default , rating: 5, time: 120, type: "Veg", place: "india", price: 159, category: "veg" },
];

const categories = ["All", "Pizza", "Burger", "Non veg", "veg"];

const MenuList = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const term = params.get("search");
    if (term) {
      setSearchTerm(term);
    }
  }, [location.search]);

  const filteredMenu = menuData.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <MenuFilters
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    

      <div className="menu-list-row">
        <div id="menu-dish">
          {filteredMenu.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuList;
