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
        <img style={{float: "right", width: "10%"}} src="./cycle.gif" alt="" />
      </Slide>
    </div>      
    <Slide direction="down">
      <h1 className={css.margin} style={{ marginTop: 40, marginBottom: 150 }}>My education and skills</h1>
    </Slide>
    <div className="row" style={{ width: "80%", margin: "auto" }}>
      <div className="col-5">
      <div className={css.educationHeight}>
        <div class={css.block}>
          <div>
            <h5>Degree : Bsc in Computer science and engineering</h5>
            <h5>Institute : Daffodil international university</h5>
            <h5>Duration : 2014-2019</h5>
            <p>Achieving my bachelors degree was a great journey. I have practiced and learned computer science from my university. I solved competitive proramming problems and also done several projects course wise.</p>
          </div>
        </div>
        <div class={css.sock}></div>
        <div class={css.dock}></div>
      </div>
      <div className={css.educationHeight}>
        <div class={css.block}>
          <div>
            <h5>Degree : Bsc in Computer science and engineering</h5>
            <h5>Institute : Daffodil international university</h5>
            <h5>Duration : 2014-2019</h5>
            <p>Achieving my bachelors degree was a great journey. I have practiced and learned computer science from my university. I solved competitive proramming problems and also done several projects course wise.</p>
          </div>
        </div>
        <div class={css.sock}></div>
        <div class={css.dock}></div>
      </div>
      </div>
      <div className="col-2">
      </div>
      <div className="col-5">
      <div class="row mb-5">
        <div class="col-12 col-sm-6 col-md-4">
          <div className={`${css.card} ${css.cardPurpleBlue} text-white mb-3 mb-md-0`}>
          <div className="card-body">
              <div className="row">
                  <img className={css.imageSocial} style={{ maxWidth: 90, maxHeight: 50, margin: 'auto' }} src="./laravel.png" alt="" />
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
                  <img className={css.imageSocial} style={{ maxWidth: 90, maxHeight: 50, margin: 'auto' }} src="./vue.png" alt="" />
              </div>
              <div className="row">
                  <p style={{ margin: 'auto' }}>Vue</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div className={`${css.card} ${css.cardPinkish} text-white mb-3 mb-md-0`}>
          <div className="card-body">
              <div className="row">
                  <img className={css.imageSocial} style={{ maxWidth: 90, maxHeight: 50, margin: 'auto' }} src="./phplogo.png" alt="" />
              </div>
              <div className="row">
                  <p style={{ margin: 'auto' }}>PHP</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="row mb-5">
        <div class="col-12 col-sm-6 col-md-4">
          <div className={`${css.card} ${css.cardBlueish} text-white mb-3 mb-md-0`}>
          <div className="card-body">
              <div className="row">
                  <img className={css.imageSocial} style={{ maxWidth: 90, maxHeight: 50, margin: 'auto' }} src="./reactlogo.png" alt="" />
              </div>
              <div className="row">
                  <p style={{ margin: 'auto' }}>React</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div className={`${css.card} ${css.cardBlueish} text-white mb-3 mb-md-0`}>
          <div className="card-body">
              <div className="row">
                  <img className={css.imageSocial} style={{ maxWidth: 90, maxHeight: 50, margin: 'auto' }} src="./nodelogo.png" alt="" />
              </div>
              <div className="row">
                  <p style={{ margin: 'auto' }}>Node js</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div className={`${css.card} ${css.cardAnotherish} text-white mb-3 mb-md-0`}>
          <div className="card-body">
              <div className="row">
                  <img className={css.imageSocial} style={{ maxWidth: 90, maxHeight: 50, margin: 'auto' }} src="./codeigniter.jpg" alt="" />
              </div>
              <div className="row">
                  <p style={{ margin: 'auto' }}>Codeigniter</p>
              </div>
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