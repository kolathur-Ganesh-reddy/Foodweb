import React from "react";
import { IoFastFood } from "react-icons/io5";
import { ImSpinner2 } from "react-icons/im"; // Spinner icon
import "./SplashScreen.css";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="text-center">
        <div className="text-4xl flex items-center justify-center gap-3 font-bold uppercase splash-logo-text mb-4">
          <IoFastFood className="text-primary text-5xl animate-pulse" />
          <p>Tasty</p>
          <p className="text-secondary">Bites</p>
        </div>
        <ImSpinner2 className="spinner-icon" />
      </div>
    </div>
  );
};

export default SplashScreen;
