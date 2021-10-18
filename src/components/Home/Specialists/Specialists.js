import React, { useEffect, useState } from 'react';
import Specialist from '../Specialist/Specialist';

const Specialists = () => {
  const [specialists, setSpecialists] = useState([]);
  useEffect(() => {
    fetch('./specialists.json')
      .then(res => res.json())
      .then(data => setSpecialists(data))
  }, [])
  return (
    <div className="container">
      <div className="row">
        <h1>Our Specialists</h1>
        {specialists.map(specialist => <Specialist specialist={specialist}></Specialist>)}
      </div>
    </div>
  );
};
export default Specialists;