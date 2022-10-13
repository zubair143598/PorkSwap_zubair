import React from "react";

const PSWAP = () => {
  return (
    <div className="container pswap">
      <div className="row  ">
        <div className="col-md-12 text-center ">
          <h1>
            $PSWAP <span className="rd"> Utilities</span>
          </h1>
        </div>
        <div className="row">
          <div className="col-md-4 ">
            <div className="card border-0 mb-4 p-4" style={{ width: "80%" }}>
              <div className="card-body">
                <img
                  src="./Assists/u1.png"
                  className="card-img-top cardImg"
                  alt="..."
                />
                <h5 className="card-subtitle mb-2 ">Governance</h5>
                <p className="card-text">
                  Vote to modify underlying protocol, change in pricing oracle,futures funding rate, platform fees, list/de-list tokens, new features<br /><br /><br /><br />
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 ">
            <div className="card border-0 p-4 mb-4" style={{ width: "80%" }}>
              <div className="card-body">
                <img
                  src="./Assists/u1.png"
                  className="card-img-top cardImg"
                  alt="..."
                />
                <h5 className="card-subtitle mb-2 ">Incentives</h5>
                <p className="card-text">
                  Liquidity providers will be incentivized in $PSWAP for their participation in spot and leverage liquidity pools, and LP tokens can be staked for ARR of around 125%.
                  <br /><br /><br />
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 mb-4 p-4" style={{ width: "80%" }}>
              <div className="card-body">
                <img
                  src="./Assists/u1.png"
                  className="card-img-top cardImg"
                  alt="..."
                />
                <h5 className="card-subtitle mb-2 "> Deflation</h5>
                <p className="card-text">
                  With a fixed supply of 1 million tokens, and only 200,000 in circulation, $PSWAP token will increase in value overtime since it'll be scarce and the team will buy back and burn
                  tokens from platform revenue generated through spot and
                  futures trading. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PSWAP;
