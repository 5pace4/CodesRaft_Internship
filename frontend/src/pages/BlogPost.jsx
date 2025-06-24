import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogPosts from '../assets/data/blogdata'; //file renmaed in directory

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div>beep bepep! blog not found</div>;
  }

  return (
    <section className="blog-post-section">
      <div className="blog-post-full">
        <img src={post.image} alt={post.title} className="blog-post-image" />
        <h2 className="blog-post-title">{post.title}</h2>
        <p className="blog-post-content">{post.content}</p>
        <p className="back-btn" onClick={() => navigate('/blog')}>
          <i class="fa-solid fa-arrow-left"></i> Back to Blog
        </p>
      </div>
    </section>
  );
}

export default BlogPost;
