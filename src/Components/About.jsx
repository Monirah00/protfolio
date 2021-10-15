import React from "react";

function About() {
  return (
    <div>
      <div className="About-bg bg-black">
        <div className="container ">
          <div className="row">
            <h2 className="About-Me">About Me</h2>
            <hr className="text-white" />
            <div className="col-lg-6 col-md-12 col-sm-12 text-center text-white Colum-6">
              <h2>Educational Qualifications </h2>
              <hr className="text-white" />
              <h4>Bsc : World University of Bangladesh</h4>
              <h4>Diploma : Chandpur Polytechnic Institute</h4>
              <h4>School : Darani Para High School</h4>
            </div>
            <div className="col-lg-6 col-12 text-center text-white Colum-6 ">
              <h3>Employment History</h3>
              <h4>Synesis IT BDBL Bhaban, Level-3</h4>
              <h5>12 Kazi Nazrul Islam Ave, Dhaka -1215 </h5>
              <h5>www.synesisit.com.bd </h5>
              <p className="text-bold">
                Executive Officer ( March-15, 2021 - Continuing)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
