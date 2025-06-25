import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PromoBanner from "./components/promoBanner/PromoBanner";
import PromoDeals from "./components/promoDeals/PromoDeals";
import MenuSection from "./components/menusection/MenuSection";
import MenuList from "./components/menusection/MenuList";
import BannerSlider from "./components/bannerSlider/BannerSlider";
import Banner from "./components/bannerdishes/Banner";
import FoodList from "./components/FoodList/FoodList";
import ItemDetails from "./components/menusection/ItemDetails";
import Offers from "./pages/offers/Offers";
import Offerbaner from "./pages/offerbanner/Offerbanner";
import Offertitle from "./pages/offertitle/Offertitle";
import OffersMenu from "./pages/offersmenu/OffersMenu";
import OfferList from "./pages/offersmenu/OfferList";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/cart/CartContext";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import LoginRegister from "./components/Login/LoginRegister";
import SplashScreen from "./components/SplashScreen/SplashScreen";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <CartProvider>
      <Router basename="/Foodweb">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <PromoBanner />
              <MenuSection />
              <MenuList />
              <PromoDeals />
              <FoodList />
              <BannerSlider />
              <Banner />
              <Footer />
            </>
          } />
          <Route path="/offers" element={
            <>
              <Offertitle/>
              <Offers/>
              <Offerbaner/>
              <OffersMenu/>
              <OfferList/>
              <Footer />
            </>
          }/>
          <Route path="/about" element={
            <>
              <About/>
              <Footer />
            </>
          }/>
          <Route path="/item/:name" element={
            <>
              <ItemDetails />
              <Footer />
            </>
          } />
          <Route path="/cart" element={
            <>
              <Cart />
              <Footer />
            </>
          } />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/menu" element={<MenuList />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
