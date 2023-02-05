import React from 'react'
import "./home.css"
import Social from './Social'
import Data from './Data'

const home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">'</div>
      <div className="home__content grid">
        <Social />
        <div className="home__img"></div>
        <Data />
      </div>
    </section>
  )
}

export default home