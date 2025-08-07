// src/components/BlogDetails.js
import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { id: 1, title: 'React Basics', author: 'Priya' },
    { id: 2, title: 'Learning Hooks', author: 'Karthik' }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>{blog.title} by {blog.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;
