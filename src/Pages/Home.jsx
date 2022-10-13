import React from 'react'
import Cards1 from '../Components/Elemant/Cards1'
import Comparision from '../Components/Elemant/Comparision'
import Hero from '../Components/Elemant/Hero'
import PlatForm from '../Components/Elemant/PlatForm'
import PSWAP from '../Components/Elemant/PSWAP'
import Roadmap from '../Components/Elemant/Roadmap'
import YTVideo from '../Components/Elemant/YTVideo'
import FAQs from '../Components/Utils/FAQs'



const Home = () => {
  return (
    <>
    <Hero/>
    <Cards1/>
    <YTVideo/>
    <PlatForm/> 
    <PSWAP/>
    <Comparision/>
    <Roadmap/>
    <FAQs/>
    </>
  )
}

export default Home