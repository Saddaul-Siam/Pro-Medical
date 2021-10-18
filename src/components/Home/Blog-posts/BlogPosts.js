import React, { useEffect, useState } from 'react';
import BlogPost from '../Blog-post/BlogPost';

const BlogPosts = () => {
  const [blogPost, setBlogPost] = useState([]);
  useEffect(() => {
    fetch('./blogPost.json')
      .then(res => res.json())
      .then(data => setBlogPost(data))
  }, [])
  return (
    <div className="container py-5">
      <div className="row">
        <h1 className="py-5">Here’s to your health</h1>
        {blogPost.map(blogPost => <BlogPost key={blogPost.id} blogPost={blogPost}></BlogPost>)}
      </div>
    </div>
  );
};


export default BlogPosts;