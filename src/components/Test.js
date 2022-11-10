import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Test01 = (props) => {
  return (
    <div style={{ position: "relative" }}>
      <AnimatePresence>
        <motion.div
          key={props.id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ ease: "easeInOut" }}
          style={{ position: "absolute" }}
        >
          {props.title}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Test01;
