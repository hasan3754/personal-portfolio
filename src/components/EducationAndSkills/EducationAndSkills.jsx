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
      <div className={css.educationHeight}>
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
      <div className={css.educationHeight}>
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
      <div class="row mb-5">
        <div class="col-12 col-sm-6 col-md-4">
          <div className={`${css.card} ${css.cardPurpleBlue} text-white mb-3 mb-md-0`}>
          <div className="card-body">
              <div className="row">
                  <img className={css.imageSocial} style={{ width: 50, height: 50, margin: 'auto' }} src="./laravel.png" alt="" />
              </div>
              <div className="row">
                  <p style={{ margin: 'auto' }}>Laravel</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div className={`${css.card} ${css.cardGreenish} text-white mb-3 mb-md-0`}>
            <div className="card-body">
              <div className="row">
                  <img className={css.imageSocial} style={{ width: 50, height: 50, margin: 'auto' }} src="./vue.png" alt="" />
              </div>
              <div className="row">
                  <p style={{ margin: 'auto' }}>HTML</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div className={`${css.card} ${css.cardPinkish} text-white mb-3 mb-md-0`}>
            <div className="card-body d-flex justify-content-between align-items-end">
              <div className="card-number">
                <div className="h3 m-0">288K</div><small><strong>REVENUE</strong></small>
              </div>
              <div className="card-description text-right"><small>235K</small><br/><small>22.48%</small></div>
            </div>
          </div>
        </div>
        </div>
        <div class="row mb-5">
        <div class="col-12 col-sm-6 col-md-4">
          <div className={`${css.card} ${css.cardBlueish} text-white mb-3 mb-md-0`}>
            <div className="card-body d-flex justify-content-between align-items-end">
              <div className="card-number">
                <div className="h3 m-0">288K</div><small><strong>REVENUE</strong></small>
              </div>
              <div className="card-description text-right"><small>235K</small><br/><small>22.48%</small></div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div className={`${css.card} ${css.cardRainbowish} text-white mb-3 mb-md-0`}>
            <div className="card-body d-flex justify-content-between align-items-end">
              <div className="card-number">
                <div className="h3 m-0">288K</div><small><strong>REVENUE</strong></small>
              </div>
              <div className="card-description text-right"><small>235K</small><br/><small>22.48%</small></div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div className={`${css.card} ${css.cardAnotherish} text-white mb-3 mb-md-0`}>
            <div className="card-body d-flex justify-content-between align-items-end">
              <div className="card-number">
                <div className="h3 m-0">288K</div><small><strong>REVENUE</strong></small>
              </div>
              <div className="card-description text-right"><small>235K</small><br/><small>22.48%</small></div>
            </div>
          </div>
        </div>
        </div>
        <div class="row mb-5">
        <div class="col-12 col-sm-6 col-md-4">
          <div className={`${css.card} ${css.cardPurpleBlue} text-white mb-3 mb-md-0`}>
            <div className="card-body d-flex justify-content-between align-items-end">
              <div className="card-number">
                <div className="h3 m-0">288K</div><small><strong>REVENUE</strong></small>
              </div>
              <div className="card-description text-right"><small>235K</small><br/><small>22.48%</small></div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div className={`${css.card} ${css.cardGreenish} text-white mb-3 mb-md-0`}>
            <div className="card-body d-flex justify-content-between align-items-end">
              <div className="card-number">
                <div className="h3 m-0">288K</div><small><strong>REVENUE</strong></small>
              </div>
              <div className="card-description text-right"><small>235K</small><br/><small>22.48%</small></div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div className={`${css.card} ${css.cardPinkish} text-white mb-3 mb-md-0`}>
            <div className="card-body d-flex justify-content-between align-items-end">
              <div className="card-number">
                <div className="h3 m-0">288K</div><small><strong>REVENUE</strong></small>
              </div>
              <div className="card-description text-right"><small>235K</small><br/><small>22.48%</small></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EducationAndSkills;