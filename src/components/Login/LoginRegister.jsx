import React, { useState } from "react";
import { motion } from "framer-motion";
import "./LoginRegister.css";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container-00">
      <motion.div
        className="form-box-00"
        animate={{ rotateY: isLogin ? 0 : 180 }}
        transition={{ duration: 0.8 }}
      >
        <div className="form-face-00 front-00">
          <h2>Login</h2>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="button-00">Login</button>
          <p>
            Don't have an account?{" "}
            <span onClick={() => setIsLogin(false)}>Register</span>
          </p>
        </div>

        <div className="form-face-00 back-00">
          <h2>Register</h2>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button className="button-00">Register</button>
          <p>
            Already have an account?{" "}
            <span onClick={() => setIsLogin(true)}>Login</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginRegister;
