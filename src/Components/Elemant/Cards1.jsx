import React from "react";

const Cards1 = () => {
  return (
    <div className="container-fluid card1 bg-light">
      <div className="container text-center bg-light ">
        <div className="row">
          <div className="col-md-4  ">
            <div
              className="card mb-3 border-0 mt-5 bg-light"
              style={{ width: "100%" }}
            >
              <div className="card-body ">
                <img
                  src="./Assists/f1.svg"
                  className="card-img-top  cardImg"
                  alt="..."
                />
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                While other spot platform tokens mint 750,000 tokens per day, we're aiming to burn 10% everyday through the revenue generated from the platform. Increasing the value of token over 30X within a year.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 bg-white ">
            <div className="card mb-3 border-0 mt-5 " style={{ width: "100%" }}>
              <div className="card-body  ">
                <img
                  src="./Assists/f2.svg"
                  className="card-img-top cardImg"
                  alt="..."
                />
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                We believe in democratizing access to finance, what else can be a better way to give entire power to the community. Create custom polls, vote for good ones, bring new ideas to the table, change the world for better.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card border-0 mb-3 mt-5 bg-light"
              style={{ width: "100%" }}
            >
              <div className="card-body">
                <img
                  src="./Assists/f3.svg"
                  className="card-img-top cardImg"
                  alt="..."
                />
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                Bringing forward the true meaning of De-Fi that's decentralizing current financial products, bringing derivatives through futures trading so you can increase your returns on profit. Buy long or sell short, it's on you.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 bg-white">
            <div className="card border-0 mb-3" style={{ width: "100%" }}>
              <div className="card-body">
                <img
                  src="./Assists/f6.svg"
                  className="card-img-top cardImg"
                  alt="..."
                />
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                Improved automated market maker to provide instant fulfillment of orders with less slippage, exchange your favourite tokens with 10 times less gas than Ethereum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card border-0 mb-3 bg-light"
              style={{ width: "100%" }}
            >
              <div className="card-body">
                <img
                  src="./Assists/f4.svg"
                  className="card-img-top cardImg"
                  alt="..."
                />
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                Try your luck by gambling the extra tokens that you made by providing liquidity, with a chance to 100X your investment.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 bg-white">
            <div className="card border-0 " style={{ width: "100%" }}>
              <div className="card-body">
                <img
                  src="./Assists/f6.svg"
                  className="card-img-top cardImg"
                  alt="..."
                />
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                While other projects are getting DNS hijacked, we ensure the security of our platform from DNS all the way to Smart Contract are state-of-the-art secured.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-3">
            <img className="imgLogo" src="./Assists/cmc-logo.png" alt="" />
        </div>
        <div className="col-md-3">
        <img className="imgLogo" src="./Assists/cg-logo.webp" alt="" />
        </div>
        <div className="col-md-3">
        <img className="imgLogo" src="./Assists/hb-logo.png" alt="" />
        </div>
        <div className="col-md-3">
        <img className="imgLogo" src="./Assists/cb-logo.png" alt="" />
        </div>
      </div>

    </div>
  );
};

export default Cards1;
