import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
  const { name, img, id } = service;
  return (
    <div className="col-md-3">
      <Link to={`/service/${id}`} className="fw-bold text-decoration-none text-black">
        <Card className="border-0" style={{ width: '18rem' }}>
          <div className="inner">
            <Card.Img className="" variant="top" src={img} />
          </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div >
  );
};

export default Service;