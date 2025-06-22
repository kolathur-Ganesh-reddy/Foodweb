import React from "react";

const MenuFilters = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="details-text">
      <div className="row">
        <div className="col-lg-12 m-auto">
          <div className="details-contains text-center">
            <ul className="details-list">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`details-products ${activeCategory === category ? "active" : ""}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuFilters;
