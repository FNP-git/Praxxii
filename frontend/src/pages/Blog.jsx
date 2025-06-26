import React from 'react';
import './Blog.css';
import BlogCard from '../components/BlogCard';
import useWorksAnimation from '../hooks/useWorksAnimation'; // adjust the path as needed
import blg1 from '../assets/blg1.png';
import blg2 from '../assets/blg2.png';
import Navbar from '../components/Navbar';
import Bbb from '../components/Bbb';
import Footer from '../components/Footer';

const blogData = [
  {
    id: 1,
    image: blg1,
    title: 'Your trusted source for used engines and used transmissions!',
    description:
      'At Praxxii Global, we specialize in delivering thoroughly tested, reliable, and cost-effective used engines and transmissions to customers across the nation. Whether you need a replacement part or are looking to upgrade your vehicle’s performance, our experts help you choose the right fit for your make and model. Each component undergoes rigorous quality checks to ensure durability and optimal performance on the road.',
  },
  {
    id: 2,
    image: blg2,
    title: 'Get your deal now for used engines and transmissions!',
    description:
      'Finding the right used engine or transmission can be time-consuming and risky — but not with us. Praxxii Global offers incredible deals on premium, performance-checked auto parts backed by our service guarantee. Our transparent pricing, fast shipping, and experienced support make it easy to find exactly what your car needs while saving you time and money.',
  },
  {
    id: 3,
    image: blg1,
    title: 'How to choose the right used engine for your vehicle',
    description:
      'Choosing a used engine isn’t just about cost — it’s about compatibility, condition, and long-term reliability. In this blog, we break down the key factors to consider: engine codes, mileage, warranties, and testing certifications. Whether you’re a first-time buyer or a seasoned DIY mechanic, this guide will help you make an informed decision for a hassle-free replacement.',
  },
];

const Blog = () => {
  useWorksAnimation();

  const handleCardClick = (blog) => {
    // Navigate to BlogPage.jsx later
    console.log('Open full blog page:', blog);
  };

  return (
    <>
    <section className="blog-section">
      <h2 className="blog-heading slide-left-works">BLOGS & POSTS</h2>
      <h2 className="subhead fade-up-works">
        Expert Tips, Auto Insights, And Industry News You Can Trust.
      </h2>
      <div className="blog-cards">
        {blogData.map((blog) => (
          
          <BlogCard
            key={blog.id}
            image={blog.image}
            title={blog.title}
            description={blog.description}
            onClick={() => handleCardClick(blog)}
          />
        
        ))}
      </div>
    </section>
    </>
  );
};

export default Blog;
