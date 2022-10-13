import React from "react";

const Token = () => {
  return (
    <div className="container text-center token">
      <div className="row">
        <div className="col ">
          <h1>Token distribution</h1>
        </div>
      </div>
      <div className="row ">
            <div className="col-md-3 mb-3"></div>
            <div className="col-md-1 mt-5">
                <h1 className="fw-bolder">10%</h1>
                <p className="fs-5 fw-bolder ">Liquidity</p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2 ">
                <h1 className="fw-bolder">50%</h1>
                <p className="fs-5 fw-bolder ">Liquidity reward (locked)</p>
            </div>

            <div className="col-md-2 mt-5">
            <h1 className="fw-bolder">10%</h1>
          <p className="fs-5 fw-bolder ">Team - locked</p>
         </div>
            <div className="col-md-3"></div>
            <div className="row">
            <div className="col-md-2"></div>
                <div className="col-md-2 ">
                <h1 className="fw-bolder">10%</h1>
                <p className="fs-5 fw-bolder ">Growth Haking</p>
            </div>
            <div className="col-md-4"></div>
                <div className="mb-5 col-md-2 ">
                <h1 className="  fw-bolder">20%</h1>
                <p className="fs-5 fw-bolder">Public sale</p>
            </div>
            <div className="col-md-2"></div>
            </div>
    </div>
        
      
    </div>
  );
};

export default Token;
