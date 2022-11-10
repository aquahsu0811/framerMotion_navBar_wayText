import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import WavyText from "./WavyText";
import Expanded from "./Expanded";

import classes from "./MainNavigation.module.scss";

const navList = [
  {
    id: 0,
    href: "/Works",
    title: "My Works",
    content: "Works",
  },
  {
    id: 1,
    href: "/About",
    title: "About Me",
    content: "About",
  },
  {
    id: 2,
    href: "/Contact",
    title: "Contact",
    content: "Contact",
  },
];

const expandedVariants = {
  hover: {
    scaleY: 30,
    backgroundColor: "#1c1c1c",
    transition: {
      duration: 1,
      //staggerChildren: 0.4
    },
  },
  tap:{
    scale: 20,
    color: "#CCCCCC",
    transition: {
      duration: 0.3,
    },
  }
};

const textExpandedVariants = {
  hover: {
    color: "#CCCCCC",
    opacity:1,
    transition: {
      duration: 0.1,
    },
  }
};

const textVariants = {
  hover: {
    opacity: 0.5,
    color: "#fff",

    transition: {
      duration: 0.1,
      delay: 0.1
    },
  },
};

const MainNavigation = (props) => {
  const [hoverText, setHoverText] = useState("");
  const [replay, setReplay] = useState(true);

  const hoverHandler=(text)=>{
    setHoverText(text);
    setReplay(!replay);
    console.log("r",replay);
    setTimeout(() => setReplay(true), 100);
  };

  return (
    <div>
      <nav className={classes.header}>
        <motion.ul
          initial="reset"
          whileHover="hover"
          whileTap="tap"
        >
          {navList.map((list) => (
            <li key={list.id}  onMouseEnter={() =>{ hoverHandler(list.content) }}>
              <Link to={list.href}>
                <motion.span variants={textVariants} >{list.title}</motion.span>
              </Link>
            </li>
          ))}

          <Expanded expandedVariants={expandedVariants} text={hoverText} textExpandedVariants={textExpandedVariants} replay={replay}/>
        </motion.ul>
        
      </nav>
      
    </div>
  );
};

export default MainNavigation;
