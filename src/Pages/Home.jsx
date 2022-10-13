import React from 'react'
import Cards1 from '../Components/Elemant/Cards1'
import Comparision from '../Components/Elemant/Comparision'
import FaqsPrac from '../Components/Elemant/FaqsPrac'
import Hero from '../Components/Elemant/Hero'
import PlatForm from '../Components/Elemant/PlatForm'
import PSWAP from '../Components/Elemant/PSWAP'
import Roadmap from '../Components/Elemant/Roadmap'
import Token from '../Components/Elemant/Token'
import TokenPrac from '../Components/Elemant/TokenPrac'
import YTVideo from '../Components/Elemant/YTVideo'
import FAQs from '../Components/Utils/FAQs'



const Home = () => {
  return (
    <>
    <Hero/>
    <Cards1/>
    <YTVideo/>
    <Token/>
    <PlatForm/> 
    <PSWAP/>
    <Comparision/>
    <Roadmap/>
    <FAQs/>
    {/* <TokenPrac /> */}
    {/* <FaqsPrac/> */}
    </>
  )
}

export default Home