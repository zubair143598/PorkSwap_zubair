import React from "react";

const Roadmap = () => {
  return (
    <div className="container text-center roadmap">
      <div className="row">
        <div className="col-md-12">
          <h1>
            Product <span className="rd"> RoadMap</span>
          </h1>
        </div>
        <div className="col-md-12">
          <img
            src="./Assists/porkswap-timeline.png "
            className="mt-5 mb-5"
            style={{ width: "90%" }}
            alt=""
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-7 mt-5">
          <img src="./Assists/gov.png" className="gov" alt="" />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-4 ">
          <h1 className="m-0 p-0 fw-bolder mt-5  pl-5">Governance Platform</h1>
          <button className="fs-14 font-weight-bold mt-3 mb-3 btn btn-warning btn-lg pl-4 pr-4 shadow ">
            Launched, Start Voting Now
          </button>
          <p className="text-start fs-5 mb-0 pb-0 fw-bolder">
            You'll be able to vote for:
          </p>
          <ul className="text-start fs-5">
            <li>Change in underlying protocol</li>
            <li>Change in pricing oracle</li>
            <li>Change in futures funding rate</li>
            <li>Change in platform fees</li>
            <li>Change inlist/de-list tokens</li>
            <li>Propose new features</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
