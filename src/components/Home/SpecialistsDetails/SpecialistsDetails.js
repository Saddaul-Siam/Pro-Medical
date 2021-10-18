import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SpecialistsDetails = () => {
  const [Specialists, setSpecialists] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch('/specialists.json')
      .then(rse => rse.json())
      .then(data => setSpecialists(data))
  }, []);
  const spc = Specialists.filter(specialist => specialist.id === id);
  console.log(spc[0]);
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-7">
          <img className="img-fluid w-75" src={spc[0]?.img} alt="" />
        </div>
        <div className="col-md-5">
          <h2>{spc[0]?.name}</h2>
          <p> {spc[0]?.details}</p>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/"><Button className="btn rounded-pill px-4" variant="primary">See all</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialistsDetails;