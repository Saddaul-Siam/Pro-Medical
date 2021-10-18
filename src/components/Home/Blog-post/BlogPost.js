import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogPost = ({ blogPost }) => {
  const { name, title, img, id } = blogPost;
  return (
    <div className="col-md-3">
      <Link to={`/blog/${id}`} className="fw-bold text-decoration-none text-black">
        <Card className="border-0" style={{ width: '18rem' }}>
          <div className="inner">
            <Card.Img className="" variant="top" src={img} />
          </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {title}
            </Card.Text>
            <Link to={`/blog/${id}`} className="fw-bold text-decoration-none">READ MORE  <i className="fas fa-plus-circle"></i></Link>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default BlogPost;