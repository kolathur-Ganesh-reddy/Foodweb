import React from "react";
import { motion } from "framer-motion";
import women from "../../assets/women2.png";
import chief from "../../assets/chief-1.png";
import men from "../../assets/man1.jpg";
import pzza from "../../assets/pzza1.jpg";
import burgger from "../../assets/burger10.avif";
import kebab from "../../assets/Kebab1.jpg";
import banner from "../../assets/banner10.jpg";
const team = [
  {
    name: "Yuki Tanaka",
    role: "Creative Chef",
    image: chief,
  },
  {
    name: "Haruto Sakamoto",
    role: "Food Technologist",
    image: men,
  },
  {
    name: "Airi Nakamura",
    role: "Customer Experience",
    image: women,
  },
];

const About = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-[#f9f5ff] via-[#f2ecff] to-[#e8f0ff]">
      {/* Hero Section */}
      <section
        className="h-[70vh] bg-cover bg-center flex items-center justify-center text-white text-center"
       style={{ backgroundImage: `url(${banner})` }}

      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">ABOUT FOODY</h1>
          <p className="mb-6 text-pink-200 italic">Handcrafted with love by ThemeWagon</p>
          <button className="px-6 py-2 bg-pink-500 rounded-full hover:bg-pink-600 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-purple-800">THE RESTAURANT</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-6">
          <motion.img
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            src= {kebab}
            alt="Dish 1"
            className="rounded-lg shadow-xl"
          />
          <motion.img
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            src={burgger}
            alt="Restaurant"
            className="rounded-lg shadow-xl"
          />
          <motion.img
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            src= {pzza}
            alt="Dish 2"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="max-w-4xl mx-auto text-gray-700 text-sm grid sm:grid-cols-2 gap-6">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            A small river named Duden flows by their place and supplies it with the necessary regelialia...
          </motion.p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 text-center bg-[#fef6ff]">
        <h2 className="text-4xl font-bold mb-12 text-pink-600">MEET THE TEAM</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-4">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white p-6 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 border border-purple-200"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 mx-auto object-cover rounded-full shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-700">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
