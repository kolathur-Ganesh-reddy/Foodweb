import React from "react";

const OfferFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="details-text-2">
      <div className="row">
        <div className="col-lg-12 m-auto">
          <div className="details-contains-2 text-center">
            <ul className="details-list-2">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`details-products-2 ${activeCategory === category ? "active-2" : ""}`}
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

export default OfferFilter;
