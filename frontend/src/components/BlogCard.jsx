// BlogCard.jsx
import React from 'react';
import './BlogCard.css';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaEye,
  FaRegCommentDots,
  FaHeart,
  FaShare,
} from 'react-icons/fa6';

const BlogCard = ({ image, title, description, onClick }) => {
  const trimmedDescription =
    description.length > 120 ? description.slice(0, 120) + '...' : description;

  return (
    <>
    <a href="#">
    <div className="blog-card" onClick={onClick}>
      <div className="blog-img" style={{ backgroundImage: `url(${image})` }}></div>
      <h3 className="blog-title">{title}</h3>
      <p className="blog-desc">{trimmedDescription}</p>
      <div className="blog-social">
        <FaFacebookF />
        <FaLinkedinIn />
        <FaInstagram />
        <FaXTwitter />
      </div>
      <div className="blog-meta">
        <span>
          <FaEye /> 858
        </span>
        <span>
          <FaRegCommentDots /> 12
        </span>
        <span>
          <FaHeart /> 52
        </span>
        <span>
          <FaShare /> Share
        </span>
      </div>
    </div>
    </a>
    </>
  );
};

export default BlogCard;
