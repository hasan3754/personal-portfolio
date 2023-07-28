import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import css from "./Service.module.scss";

const Services = () => {
  return (
    <Container id="service" className={css.wrapper}>
          <div style={{width: "110%"}}>
            <Slide direction="left" duration={20000} triggerOnce={true}>
              <img style={{float: "right", width: "10%"}} src="./running.gif" alt="" />
            </Slide>
          </div>
      <Container id="service" className={css.wrapperTwo}>
      <Slide direction="down" triggerOnce={true}>
        <h1 className={css.margin}>Companies I have Worked for</h1>
      </Slide>
      <Cards>
        <Slide direction="left" triggerOnce={true}>
          <Card
            Icon='bitnet.png'
            designation='Junior software engineer'
            title={"jan 2020 - june 2020 · 6 month's"}
            icons={['./laravel.jpeg']}
            disc={`After passing my Bsc in cse from daffodil international university. I have started my career in bitnet solutions as a junior software engineering. I have Worked in a team of laravel developers to develop and enhance several projects.`}
          />
        </Slide>
        <Slide direction="down" triggerOnce={true}>
          <Card
            Icon='infocrat.png'
            designation='Junior software engineer'
            title={"July 2020 - October 2021 · 1 yr 4 month's"}
            icons={['./laravel.jpeg','./angular.png']}
            disc={`I have worked in Infocrat solution as a fullstack laravel and angular developer. I have worked in various erp built with laravel and and angular and some customized software. Here i have worked in laravel microservice framework lumen.`}
          />
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <Card
            Icon='syntech.png'
            designation='Senior software engineer'
            title={"Nov 2021 - Present · 1 yr 9 month's"}
            icons={['./laravel.jpeg','./vue.png','./angular.png']}
            disc={`Then I Joined syntech solution as a senior software engineer. Here i have worked as a team leader of several portions of multiple government projects. I am working as a fullstack laravel, codeigniter, angular, vuejs developer.`}
          />
        </Slide>
      </Cards>
    </Container>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
