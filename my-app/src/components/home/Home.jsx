import React from 'react'
import Social from './Social'
import "./home.css"
import Data from './Data'

const Home = () => {
  return (
    <section className='home section' id="home">
        <div className='home__container container'>
            <div className='home__content'></div>
            <Data />
            <br></br>
            <Social />
        </div>
    </section>
  )
}

export default Home
