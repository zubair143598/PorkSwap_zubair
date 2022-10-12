import React from "react";
import {BsCheckLg} from "react-icons/bs"

const Comparision = () => {
  return (
    <div className="container-fluid comparsion">
      <div className="container text-center">
        <div className="row">
          <div className="col mt-5">
            <h1 className="fw-bold">Comparison Table</h1>
            <p className="fw-bold fs-5">
              We are building whole ecosystem tools for future identities and
              data.
            </p>
          </div>
          <div className="row">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">
                    <img className="thimg" src="./Assists/uniswap.png" alt="" />
                  </th>
                  <th scope="col">
                    <img className="thimg" src="./Assists/uniswap.png" alt="" />
                  </th>
                  <th scope="col">
                    <img className="thimg" src="./Assists/uniswap.png" alt="" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="head">
                    <span> Automated Market Maker </span>
                  </th>
                  <td><BsCheckLg className="checkmark" size={30} /></td>
                  <td><BsCheckLg className="checkmark" size={30} /></td>
                  <td><BsCheckLg className="checkmark" size={30} /></td>
                </tr>
                <tr>
                  <th className="head">
                    <span> Spot Trading </span>
                  </th>
                  <td><BsCheckLg className="checkmark" size={30} /></td>
                  <td><BsCheckLg className="checkmark" size={30} /></td>
                  <td><BsCheckLg className="checkmark" size={30} /></td>
                </tr>
                <tr>
                  <th className="head">
                    <span> Futures Trading </span>
                  </th>
                  <td><BsCheckLg className="cred" size={30} /></td>
                  <td><BsCheckLg className="cred" size={30} /></td>
                  <td><BsCheckLg className="checkmark" size={30} /></td>
                </tr>
                <tr>
                  <th className="head">
                    <span> Governance </span>
                  </th>
                  <td><BsCheckLg className="checkmark" size={30} /></td>
                  <td><BsCheckLg className="checkmark" size={30} /></td>
                  <td><BsCheckLg className="checkmark" size={30} /></td>
                </tr>
                <tr>
                  <th className="head">
                    <span> Leveraged Trading</span>
                  </th>
                  <td><BsCheckLg className="cred" size={30} /></td>
                  <td><BsCheckLg className="cred" size={30} /></td>
                  <td><BsCheckLg className="checkmark" size={30} /></td>
                </tr>
                <tr>
                  <th className="head">
                    <span> Gas Fees </span>
                  </th>
                  <td className="cred">$71.53</td>
                  <td className="cred">$0.42	</td>
                  <td className="checkmark">$0.42</td>
                </tr>
                <tr>
                  <th className="head">
                    <span> Inflationary </span>
                  </th>
                  <td><BsCheckLg className="cred" size={30} /></td>
                  <td><BsCheckLg className="cred" size={30} /></td>
                  <td><BsCheckLg className="checkmark" size={30} /></td>
                </tr>
                <tr>
                  <th className="head">
                    <span> Deflationary </span>
                  </th>
                  <td><BsCheckLg className="cred" size={30} /></td>
                  <td><BsCheckLg className="cred" size={30} /></td>
                  <td><BsCheckLg className="checkmark" size={30} /></td>
                </tr>
                <tr>
                  <th className="head">
                    <span> Fixed Supply </span>
                  </th>
                  <td><BsCheckLg className="checkmark" size={30} /></td>
                  <td><BsCheckLg className="cred" size={30} /></td>
                  <td><BsCheckLg className="checkmark" size={30} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparision;
