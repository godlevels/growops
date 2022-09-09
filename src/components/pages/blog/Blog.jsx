import React from 'react'
import Cards from '../../Cards'
import './blog.css'

const Blog = () => {
  return (
    <div id='blog'>
        <div className='container'>
            <div className="blog">
                <div className='blog-up'> 
                    {/* <h1>blog</h1> */}
                    <h2>blog posts</h2>
                    {/* <div className='blog-line'></div> */}
                </div>

                <div className="blog__containter">
                <Cards />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog