import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
  const { img, title, name, id } = doctor;
  return (
    <div className=" col-md-3">
      <Link to={`/doctor/${id}`} className="fw-bold text-decoration-none text-black">
        <Card className="border-0" style={{ width: '18rem' }}>
          <div className="inner">
            <Card.Img className="" variant="top" src={img} />
          </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text><p className="fw-normal">{title}</p></Card.Text>
            <Link to={`/doctor/${id}`} className="fw-bold text-decoration-none">READ MORE  <i className="fas fa-plus-circle"></i></Link>
          </Card.Body>
        </Card>
      </Link>
    </div >
  );
};

export default Doctor;