import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
  const [doctors, setDoctors] = useState([])
  useEffect(() => {
    fetch('./doctors.json')
      .then(res => res.json())
      .then(data => setDoctors(data))
  }, []);
  return (
    <div>
      <div className="doctors-banner"></div>
      <div className="container">
        <div className="row py-5">
          {doctors?.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)}
        </div>
      </div>
    </div>
  );
};

export default Doctors;