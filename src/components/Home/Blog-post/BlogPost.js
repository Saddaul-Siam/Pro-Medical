import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogPost = ({ blogPost }) => {
  const { name, title, img } = blogPost;
  return (
    <div className="col-md-3">
      <Card className="border-0" style={{ width: '18rem' }}>
        <div className="inner">
          <Card.Img className="" variant="top" src={img} />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {title}
          </Card.Text>
          <Link to="/" className="fw-bold text-decoration-none">READ MORE  <i className="fas fa-plus-circle"></i></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogPost;