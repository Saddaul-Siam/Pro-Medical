import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const DoctorsDetails = () => {
  const [service, setService] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    fetch('/doctors.json')
      .then(rse => rse.json())
      .then(data => setService(data))
  }, []);
  const services = service.filter(bp => bp.id === id);
  // console.log(services);
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-7">
          <img className="img-fluid w-75" src={services[0]?.img} alt="" />
        </div>
        <div className="col-md-5">
          <h2>{services[0]?.name}</h2>
          <p> {services[0]?.details}</p>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/doctors"><Button className="btn rounded-pill px-4" variant="primary">See all</Button></Link>
        </div>
      </div>
    </div>
  );
};
export default DoctorsDetails;