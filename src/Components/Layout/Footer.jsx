import React from 'react'
import {FaMediumM} from "react-icons/fa"
import {IoLogoTwitter} from "react-icons/io"
import {FaFacebookF} from "react-icons/fa"
import {ImYoutube2} from "react-icons/im"
import {BsTelegram} from "react-icons/bs"

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img src="./Assists/headerLogo.png" className='img1' alt="" />
            <p className='text-white fs-5'>Decentralized Spot and Futures Trading on Binance Smart Chain</p>
          </div>
          <div className="col-md-6"></div>
          <div className="col-md-3">
            <FaMediumM className='icon m-2' size={40}/>
            <IoLogoTwitter className='icon m-2' size={40}/>
            <FaFacebookF className='icon m-2' size={40}/>
            <ImYoutube2 className='icon m-2' size={40}/>
            <BsTelegram className='icon m-2' size={40}/>
            <a className='email' href="">
              <p className='fs-5'>exchange@porkswap.finance</p>
            </a>
          </div>
        </div>
        <hr className='hr'/>
        <br /><br />
        <div className="row">
        <div className="col-md-12 text-center text-white mb-5 fs-5" >Copyright © 2022 PorkSwap.finance</div>
        </div>
      </div>
    </div>
  )
}

export default Footer