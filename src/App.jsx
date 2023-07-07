import React from 'react'
// import Experties from './components/Experties/Experties'
// import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Services from "./components/Service/Services";
import Hero from './components/Hero/Hero'
import People from './components/People/People'
import Portfolio from './components/Portfolio/Portfolio'
import Qualities from './components/Qualities/Qualities'
import EducationAndSkills from './components/EducationAndSkills/EducationAndSkills'
import css from './styles/App.module.scss'
const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`${css.container}`}>
      <Header/>
       <Hero/>
      {/* <Experties/> */}
      {/* <Work/> */}
      <Services className={`${css.containerTwo}`} />
      <Qualities />
      <EducationAndSkills />
      <Portfolio/>
      <People/>
      {/*<Footer/> */}
    </div>
  )
}

export default App