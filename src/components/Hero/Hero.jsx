import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className={css.textOne} variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm a al mahmudul hasan.
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
            I am a professional fullstack developer
            <br />
            Laravel, Codeigniter, nodejs <br /> reactjs, angular, vuejs is my tech stack{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./person.png" alt="" />
        </motion.div>

        <a className={css.email} href="mailto:zainkeepscode@gmail.com">
          mirazlaradev@gmail.com
        </a>

        <div className={css.lowerElements}>
          <div className={css.row}>
            <div className={css.column}>
                <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
                <div className="primaryText">3</div>
                <div className="secondaryText">
                  <div>Years +</div>
                  <div>Experience</div>
                </div>
                </motion.div>
            </div>
            <div className={css.column}>
                <div class="wrapper">
                <div className={css.textAlign}><motion.img className={css.imageMern} variants={fadeIn("right", "tween", 0.3, 1)} src="./mern.png" alt="" /></div>
                <div className={css.textAlign}>
                  <motion.img className={css.image} variants={fadeIn("right", "tween", 0.3, 1)} src="./laravel.jpeg" alt="" />
                  <motion.img className={css.image} variants={fadeIn("right", "tween", 0.3, 1)} src="./vue.png" alt="" />
                  <motion.img className={css.image} variants={fadeIn("right", "tween", 0.3, 1)} src="./angular.png" alt="" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;