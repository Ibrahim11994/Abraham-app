import React from 'react'
import Hero from '../component/Hero'
import Analytics from '../component/Analytics'
import NewsLetter from '../component/NewsLetter'
import Card from '../component/Card'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Analytics/>
      <NewsLetter/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default Home
