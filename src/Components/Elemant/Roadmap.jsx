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
        <div className="col-md-6">
            <img src="./Assists/gov.png" className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
