import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogdata';

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="blog-section" className="blog-section">
      <span className="section-tag">Blog</span>
      <h2>Our Latest Blog Posts</h2>
      <div className="blog-container">
        {currentPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h3 className="blog-post-title">{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            <Link to={post.link} className="blog-link">
              Read More
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Blog;
