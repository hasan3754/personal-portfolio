import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import css from "./Service.module.scss";

const Services = () => {
  return (
    <Container id="service" className={css.wrapper}>
      <Container id="service" className={css.wrapperTwo}>
      <Slide direction="down">
        <h1 className={css.margin}>Companies I have Worked for</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon='bitnet.png'
            designation='Intern'
            title={"jan 2020 - june 2020 · 6 month's"}
            icons={['./laravel.jpeg']}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon='infocrat.png'
            designation='Junior software engineer'
            title={"July 2020 - October 2021 · 1 yr 4 month's"}
            icons={['./laravel.jpeg','./angular.png']}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon='syntech.png'
            designation='Senior software engineer'
            title={"Nov 2021 - Present · 1 yr 9 month's"}
            icons={['./laravel.jpeg','./vue.png','./angular.png']}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
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
