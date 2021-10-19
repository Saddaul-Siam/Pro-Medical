import React from 'react';
import { useHistory } from 'react-router';
import img from "../../../images/error.png"
const NotFound = () => {
  const history = useHistory();
  const handelClick = () => {
    history.push('/')
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="py-5 ">
        <img src={img} alt="" />
        <div className="d-flex justify-content-center">
          <div>
            <h1>Page Not Found!</h1>
            <p>Please try searching for some other page.</p>
            <div className="d-flex justify-content-center">
              <button onClick={handelClick} className="btn btn-info">Back to Home</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;