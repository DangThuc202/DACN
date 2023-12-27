import React from "react"
import BlogCard from "./BlogCard"
import { Box, Grid } from "@mui/material"

const BlogList = ({ blogs }) => {
  console.log('blogs:', blogs)
  return (
    <Box sx={{ backgroundColor: '#fff', padding: '20px' }}>
      <Grid container spacing={2}>
        {blogs.map(blog => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <BlogCard
              title={blog.title}
              content={blog.content}
              author={blog.author}
              summary={blog.summary}
              featured_image={blog.featured_image}
              published_date={blog.published_date}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
export default BlogList 