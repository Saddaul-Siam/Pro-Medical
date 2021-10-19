import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Specialist = ({ specialist }) => {
  const { name, title, img, id } = specialist;
  return (
    <div className="col-md-2 mx-3">
      <Link to={`/specialist/${id}`} className="fw-bold text-decoration-none text-black">
        <Card className="border-0" style={{ width: '14rem' }}>
          <div className="inner"><Card.Img className="img-fluid" variant="top" src={img} /></div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <p className="fw-normal">{title}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default Specialist;