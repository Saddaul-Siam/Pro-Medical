import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('/allServices.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, []);
  const category = "diagnosis";
  const servicesDiagnosis = services.filter(service => service.category === category);
  // console.log(servicesDiagnosis);

  const category2 = "therapy";
  const servicesTherapy = services.filter(service => service.category === category2);
  // console.log(servicesTherapy);

  const category3 = "labTests";
  const servicesLabTests = services.filter(service => service.category === category3);
  // console.log(servicesLabTests);
  return (
    <div>
      <div className="service-banner"></div>
      <div className="container py-5">
        <div className="row">
          <h1>Diagnosis</h1>
          {servicesDiagnosis.map(service => <Service key={service.id} service={service}></Service>)}
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <h1>Therapy</h1>
          {servicesTherapy.map(service2 => <Service key={service2.id} service={service2}></Service>)}
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <h1>Lab Tests</h1>
          {servicesLabTests.map(service3 => <Service key={service3.id} service={service3}></Service>)}
        </div>
      </div>
    </div>
  );
};

export default Services;