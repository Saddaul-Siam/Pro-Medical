import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({ service }) => {
  const { details, title, img } = service;
  return (
    <div className="col-md-3">
      <Card  className="border-0" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;