import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogPost = ({ blogPost }) => {
  const { name, title, img, id } = blogPost;
  return (
    <div className="col-sm-6 col-md-6 col-lg-3">
      <Link to={`/blog/${id}`} className="fw-bold text-decoration-none text-black">
        <Card className="border-0" style={{ width: '18rem' }}>
          <div className="inner">
            <Card.Img className="" variant="top" src={img} />
          </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <span className="fw-normal">{title}</span>
            </Card.Text>
            <h6 className="text-primary">READ MORE  <i className="fas fa-plus-circle"></i></h6>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default BlogPost;