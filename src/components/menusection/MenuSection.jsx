import React from "react";
import "./MenuSection.css"; // Import your CSS file

const MenuSection = () => {
  return (
    <section>
      <div className="menu-section">
        <div className="content-wrapper">
          <div className="row">
            <div className="text-content col-lg-12">
              <div className="menu-heading text-center mb-5">
                <p className="menu-subtitle mb-3">Menu Card</p>
                <h2 className="menu-title">
                  Wake up early, <span>eat fresh & healthy</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
