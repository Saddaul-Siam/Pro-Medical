import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Specialist = ({ specialist }) => {
  const { name, title, img, id } = specialist;
  return (
    <div className="col-sm-6 col-md-6 col-lg-2 mx-lg-3">
      <Link to={`/specialist/${id}`} className="fw-bold text-decoration-none text-black">
        <Card className="border-0" style={{ width: '14rem' }}>
          <div className="inner"><Card.Img className="img-fluid" variant="top" src={img} /></div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <span className="fw-normal">{title}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default Specialist;