import { motion } from "framer-motion";
import WavyText from "./WavyText";
import classes from "./Expanded.module.scss";

const Expanded = ({ expandedVariants, textExpandedVariants, text, replay }) => {
  console.log(replay)
  return (
    <>
      <motion.div
        className={classes.expanded}
        variants={expandedVariants}
        transition={{ duration: 1, ease: "easeIn" }}
      ></motion.div>
      <div className={classes.expanded_mask}>
        <motion.div
          variants={textExpandedVariants}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className={classes.text}
        >
          <WavyText text={text}  replay={replay}/>
        </motion.div>
      </div>
      
    </>
  );
};

export default Expanded;
