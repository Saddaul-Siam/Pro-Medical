import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const BlogPostsDetails = () => {
  const [blogPost, setBlogPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch('/blogPost.json')
      .then(rse => rse.json())
      .then(data => setBlogPost(data))
  }, []);
  const blog = blogPost.filter(bp => bp.id === id);
  // console.log(blog[0]);
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-7">
          <img className="img-fluid w-75" src={blog[0]?.img} alt="" />
        </div>
        <div className="col-md-5">
          <h2>{blog[0]?.name}</h2>
          <p> {blog[0]?.details}</p>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/"><Button className="btn rounded-pill px-4" variant="primary">See all</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostsDetails;