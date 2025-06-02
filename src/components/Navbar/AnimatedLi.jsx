import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AnimatedLi = ({ title, path }) => {
  const MotionLink = motion.create(Link);

  return (
    <motion.li
      whileHover="hovered"
      initial="initial"
      className="relative overflow-hidden py-6"
    >
      <span className="invisible">{title}</span>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <MotionLink
          className="block w-full"
          variants={{
            initial: { y: 0, opacity: 1 },
            hovered: { y: 20, opacity: 0 },
          }}
          transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          to={path}
        >
          {title}
        </MotionLink>

        <MotionLink
          className="block w-full absolute top-0 left-0 text-blue-700 "
          variants={{
            initial: { y: -20, opacity: 0 },
            hovered: { y: 0, opacity: 1 },
          }}
          transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          to={path}
        >
          {title}
        </MotionLink>
      </div>
    </motion.li>
  );
};

export default AnimatedLi;
