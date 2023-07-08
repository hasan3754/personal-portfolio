import React from "react";
import { workExp } from "../../utils/data";
import css from "./EducationAndSkills.module.scss";
import {motion} from 'framer-motion'
import { fadeIn, slideIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";
import { Slide } from "react-awesome-reveal";
const EducationAndSkills = () => {
  return (
    <div>
    <div style={{width: "110%"}}>
      <Slide direction="left" duration={10000}>
        <img style={{float: "right", width: "10%"}} src="./working.gif" alt="" />
      </Slide>
    </div>      
    <Slide direction="down">
      <h1 className={css.margin} style={{ marginTop: 40 }}>My education and skills</h1>
    </Slide>
    <div className="row" style={{ width: "80%", margin: "auto" }}>
      <div className="col-6">
      <div>
        <div class={css.block}>
          <div>
            <h4>Degree : Bsc in Computer science and engineering</h4>
            <h4>Institute : Daffodil international university</h4>
            <h4>Duration : 2014-2019</h4>
            <p>Achieving my bachelors degree was a great journey. I have practiced and learned computer science from my university. I solved competitive proramming problems and also done several projects course wise.</p>
            <a href="https://daffodilvarsity.edu.bd/department/cse/program/1/1/undergraduate">Courses</a>
          </div>
        </div>
        <div class={css.sock}></div>
        <div class={css.dock}></div>
      </div>
      <div>
        <div class={css.block}>
          <div>
            <h4>Degree : Bsc in Computer science and engineering</h4>
            <h4>Institute : Daffodil international university</h4>
            <h4>Duration : 2014-2019</h4>
            <p>Achieving my bachelors degree was a great journey. I have practiced and learned computer science from my university. I solved competitive proramming problems and also done several projects course wise.</p>
            <a href="https://daffodilvarsity.edu.bd/department/cse/program/1/1/undergraduate">Courses</a>
          </div>
        </div>
        <div class={css.sock}></div>
        <div class={css.dock}></div>
      </div>
      </div>
      <div className="col-6">
        <Slide direction="right">
        <img className={css.imageSocial} style={{ width: "137%" }} variants={fadeIn("right", "tween", 0.3, 1)} src="./timemanagement.gif" alt="" />
        </Slide>
      </div>
    </div>
    <div className="row" style={{ width: "80%", margin: "auto" }}>
      <div className="col-6">
      <Slide direction="left">
      <div className={css.rainbowbox}>
      <h3 className={css.margin} style={{ marginTop: 20 }}>Hard worker</h3>
      <p style={{ padding: 20 }}>I am a hard working person. I do hardwork to meet my deadlines. I really care about the software being error free. I have developed delivered morethan  5 complex Web projects. I have gained good experience by doing these. It is impossible to achieve success without putting in a lot of effort. But I also keep a work life balance myself. Hark work is nothing without happiness. When a person is happy he can contribute even better to his work and improve life of other human beings.</p>
      </div>
      </Slide>
      </div>
      <div className="col-6">
        <Slide direction="right">
        <img className={css.imageSocial} style={{ width: "57%", marginLeft: 205, marginTop: 78 }} variants={fadeIn("right", "tween", 0.3, 1)} src="./hardwork.gif" alt="" />
        </Slide>
      </div>
    </div>
    <div className="row" style={{ width: "80%", margin: "auto" }}>
      <div className="col-6">
      <Slide direction="left">
      <div className={css.rainbowbox}>
      <h3 className={css.margin} style={{ marginTop: 20 }}>Team worker</h3>
      <p style={{ padding: 20 }}>I am a team working person. I can complete my tasks alone also. when I am working in a team I really care about the communication between all team members. I always maintain good communication about business logic of software to my other team members. I also discuss  about how can we improve user experience of the software we are developing.</p>
      </div>
      </Slide>
      </div>
      <div className="col-6">
        <Slide direction="right">
        <img className={css.imageSocial} style={{ width: "86%", marginLeft: 90, marginTop: 77 }} variants={fadeIn("right", "tween", 0.3, 1)} src="./teamwork.gif" alt="" />
        </Slide>
      </div>
    </div>
    </div>
  );
};

export default EducationAndSkills;