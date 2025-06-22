import React from "react";
import "./Offertitle.css";
import { BiSolidOffer } from "react-icons/bi";
const Offertitle = () => {
  // Data for the banner cards
  return (
    <section className="section">
      {/* Menu Section */}
      <div className="menu-section-1">
        <div className="content-wrapper-1">
          <div className="row-1">
            <div className="text-content-1 col-lg-12">
              <div className="menu-heading-1 text-center mb-5">
                <p className="menu-subtitle-1 mb-3">
                   <BiSolidOffer />
                </p>
                <h2 className="menu-title-1">
                  Our special Offers Disnes crafted with love, <span>served with perfection!</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offertitle;
