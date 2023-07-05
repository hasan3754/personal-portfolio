import React from "react";
import { workExp } from "../../utils/data";
import css from "./Qualities.module.scss";
import {motion} from 'framer-motion'
import { fadeIn, slideIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";
import { Slide } from "react-awesome-reveal";
const Qualities = () => {
  return (
    <div>      
    <Slide direction="down">
    <h1 className={css.margin}>My Professional qualities</h1>
    </Slide>
    <div className="row">
      <div className="col">
      <div className={css.rainbowbox}>
      <h3 className={css.margin}>Time management</h3>
      <p>I have awesome time management qualities. I always complete my task on time. As i have exceptional Programming skill. Time management is easy for me.</p>
      </div>
      </div>
      <div className="col">
        <Slide direction="right">
        <img className={css.imageSocial} variants={fadeIn("right", "tween", 0.3, 1)} src="./timemanagement.gif" alt="" />
        </Slide>
      </div>
    </div>
    </div>
  );
};

export default Qualities;