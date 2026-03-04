import { useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import "./splash.css";

export default function SplashScreen({ onFinish }) {

  useEffect(() => {
    setTimeout(() => {
      onFinish();
    }, 4000);
  }, []);

  return (
    <div className="splash">

      <Particles
        options={{
          particles: {
            number: { value: 80 },
            color: { value: "#00A8FF" },
            links: {
              enable: true,
              color: "#00A8FF",
              distance: 120
            },
            move: { speed: 2 }
          }
        }}
      />

      <motion.h1
        className="logo glitch-text"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        INTERVIEW.AI
      </motion.h1>

      {/* old tv glitch layer */}
      <div className="glitch-overlay"></div>

    </div>
  );
}