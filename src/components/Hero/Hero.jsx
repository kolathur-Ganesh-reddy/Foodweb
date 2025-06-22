import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float, MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import HeroImg from "../../assets/images-1-removebg-preview.png";
import './Hero.css';

const AnimeDonut = () => {
  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <mesh rotation={[0.3, 0.3, 0]}>
        <torusGeometry args={[1.6, 0.5, 16, 100]} />
        <MeshWobbleMaterial
          color={"#ff6ec4"}
          emissive={"#ff6ec4"}
          factor={0.8}
          speed={2}
        />
      </mesh>
    </Float>
  );
};

const Hero = () => {
  return (
    <section className="sect relative bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 overflow-hidden">
      {/* Animated background sparkles */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-24 left-12 w-24 h-24 bg-pink-300 rounded-full blur-3xl animate-ping" />
        <div className="absolute bottom-24 right-20 w-32 h-32 bg-purple-400 rounded-full blur-2xl animate-bounce" />
        <div className="absolute top-1/2 left-[40%] w-96 h-96 bg-pink-100 opacity-20 rounded-full blur-[90px] animate-pulse" />
      </div>

      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-[650px] px-6 py-16 font-playfair">
        {/* Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center text-center md:text-left space-y-6"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 drop-shadow-md tracking-wider">
            THAT SANDWICH PLACE
          </h1>
          <p className="text-gray-700 text-lg xl:max-w-[500px] italic">
            🍱 The best sandwich you’ll ever have. Nothing more, nothing less.
          </p>
          <div className="flex justify-center md:justify-start mt-6">
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px #ff6ec4" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg transition-all duration-300"
            >
              ✨ Order Now
            </motion.button>
          </div>
        </motion.div>

        {/* Image + 3D Canvas */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative flex justify-center items-center"
        >
          <img
            src={HeroImg}
            alt="Hero Sandwich"
            className="relative z-10 w-[350px] md:w-[500px] xl:w-[600px] drop-shadow-[0_8px_20px_rgba(0,0,0,0.2)] transform hover:scale-105 transition duration-500"
          />
          {/* 3D Canvas Element */}
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 2, 2]} />
              <AnimeDonut />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate />
            </Canvas>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
