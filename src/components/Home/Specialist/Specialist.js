import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Specialist = ({ specialist }) => {
  const { name, title, img } = specialist;
  return (
    <div className="col-md-2 mx-3">
      <Card className="border-0" style={{ width: '14rem' }}>
        <div className="inner"><Card.Img className="img-fluid" variant="top" src={img} /></div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {title}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Specialist;