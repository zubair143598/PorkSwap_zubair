import React from "react";
import Particle from "./Particle";
const Hero = () => {
  return (
    <>
    {/* <Particle/> */}
      <div className="container-fluid hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Decentralized Spot and Futures Trading on BSC</h1>
              <p>
                Automated market maker powered, taking De-Fi game to the next
                level. Make instant spot exchange, leveraged trades, provide
                liquidity to earn returns and rewards.
              </p>
              <div className="d-grid gap-2 mx-auto">
                <button className="btn btn1 btn-warning">
                  Spot Trading Platform Launched 🚀
                </button>
              </div>
              <hr />
              <div className="col-md-12 col-12">
                <button className="btn btn2 btn-danger m-1 ">Earn PSWAP</button>
                <button className="btn btn2 btn-danger m-1">
                  Trade on PCS
                </button>
                <button className="btn btn2 btn-danger m-1">
                  Governance .
                </button>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <img
                className="img-fluid d-none d-md-block image"
                src="./Assists/porkswap-pink.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light text-center">
        <div className="row">
          <div className="col-md-12">
            <h3 className="mt-5">As seen on </h3>
          </div>
          <div className="col-md-3">
            <img className="logoImg" src="./Assists/Yahoo.png" alt="" />
          </div>
          <div className="col-md-3">
            <img
              className="logoImg"
              src="./Assists/logo-bloomberg.svg"
              alt=""
            />
          </div>
          <div className="col-md-3">
            <img
              className="logoImg"
              src="./Assists/logo-benzinga.webp"
              alt=""
            />
          </div>
          <div className="col-md-3">
            <img className="logoImg" src="./Assists/news-btc.png" alt="" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Hero;
