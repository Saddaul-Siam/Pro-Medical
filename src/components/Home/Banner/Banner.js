import React from 'react';
import './Banner.css'
const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 d-flex justify-content-center">
            <span className="title">Wellcome to <span className="title-color">ProMedical</span></span>
          </div>
          <div className="col-md-6">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;