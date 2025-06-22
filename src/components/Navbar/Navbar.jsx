import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { NavbarMenu } from "../../mockdata/data";
import { IoFastFood } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import ResponsiveMenu from "./ResponsiveMenu";
import "./Navbar.css";
import { useCart } from "../cart/CartContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/menu?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 animated-navbar">
        <div className="container flex justify-between items-center pt-8 pb-4">
          {/* Logo */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <IoFastFood />
            <p>Tasty</p>
            <p className="text-secondary">Bites</p>
          </div>

          {/* Menu Items */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-primary font-semibold"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Icons and Search */}
          <div className="flex items-center gap-4">
            {/* Search input */}
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search for delicious food..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <CiSearch onClick={handleSearch} className="search-icon" />
            </form>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                <PiShoppingCart />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </Link>

            {/* Login */}
            <Link
              to="/login"
              className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <IoMdMenu className="text-4xl" />
          </div>
        </div>
      </nav>

      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
