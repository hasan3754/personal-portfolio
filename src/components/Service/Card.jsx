import React from 'react'
import styled from 'styled-components';
import css from "./Service.module.scss";

const Card = (props) => {
    const { Icon, disc, title, icons, designation } = props;
  return (
    <Container>
        <div className="col-12"><img className={`${css.image}`} src={"./" + Icon} alt="project" /></div>
        <div className="col-12">
            <h1 className="text-left mt-2 textTcolor">{designation}</h1>
            <h1 className="text-left textTcolor">{title}</h1>
            <div className="row">
            <div className="col-5 text-left textTcolor">Tech stack:</div>
            <div className="col-7">
            <div className="text-left">
                  <>
                        {icons.map((item) => (
                            <img className={`mr-2 ${css.img}`} src={item} alt="" />
                        ))}
                  </>
            </div>
            </div>
            </div>
            <p className="text-left textTcolor">{disc}</p>
            <button className={`${css.button} textTcolor`}>Projects</button>
        </div>
    </Container>
  )
}

export default Card;

const Container = styled.div`
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.25);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);  
    padding: 38px;  
    filter: drop-shadow(0 30px 10px rgba(0,0,0,0.125));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    text-align: center;
    span{
        font-size: 4rem;
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

    p{
        font-size: 0.8rem;
    }
`