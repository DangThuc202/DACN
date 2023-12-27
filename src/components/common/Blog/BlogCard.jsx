import React from 'react'
import './BlogCard.css'

const BlogCard = ({ title, summary,
  featured_image, published_date }) => {
  const date = new Date(published_date)
  const formattedDate = date.toLocaleDateString()
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>Date: {formattedDate}</p>
      <img src={featured_image} alt="blog" />
      <p>{summary}</p>
    </div>
  )
}
export default BlogCard