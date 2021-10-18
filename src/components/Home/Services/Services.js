import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className="container py-5">
      <div className="row">
        <h1>Our Services</h1>
        {services.map(service => <Service service={service}></Service>)}
      </div>
    </div>
  );
};

export default Services;