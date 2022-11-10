import React, {  useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./Title.module.scss";


const containerVariants = {
  hidden: {
    opacity: 0,
    y: "-30vh",
  },
  visible: {
    opacity: 1,
    y:0,
    transition: { type: "spring", delay: 0.5 }
  },
  exit:{
    opacity: 0,
    y:'30vh',
    transition:{ ease: 'easeInOut'}
  }
};

const Title = ({title}) => {
 
  return (
    <section className={classes.title}>

      <AnimatePresence>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          {title}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Title;