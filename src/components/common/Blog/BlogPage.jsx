import React, { useEffect, useState } from 'react'
import BlogList from './BlogList'
import { Box } from '@mui/material'
import HeaderCovid from '../HeaderCovid'
import Header from '../Header'
import Background3 from '../Background3'
import Background4 from '../Background4'
import Pay from '../DoctorPage/Pay'
import Background9 from '../Background9'
import Footer from '../Footer'
import homePageService from '../../../services/homePageService'
const BlogPage = () => {
  const [blogs, setBlogs] = useState([])


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await homePageService.getBlogsHomePage()
        setBlogs(response)
      } catch (error) {
        console.error('Error fetching blogs:', error)
      }
    }
    fetchBlogs()
  }, [])



  return (
    <Box sx={{ backgroundColor: '#fff' }}>
      <HeaderCovid />
      <Header />
      <div className="blog-page">
        <h1 style={{ textAlign: 'center' }}>BLOG</h1>
        <BlogList blogs={blogs} />
      </div>
      <Background3 />
      <Background4 />
      <Pay />
      <Background9 />
      <Footer />
    </Box>
  )
}

export default BlogPage