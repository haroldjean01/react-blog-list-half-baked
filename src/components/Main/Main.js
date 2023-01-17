import React from 'react';
import { useBlogs } from '../../hooks/useBlogs.js';
import { fetchBlogs } from '../../services/fetchBlogs.js';
import BlogCard from '../BlogCard/BlogCard.js';

export default function Main() {
  const blogs = useBlogs();
  return (
    <div>
      {blogs.map((blog) => {
        <BlogCard key={blog.name} {...blog} />;
      })}
    </div>
  );
}
