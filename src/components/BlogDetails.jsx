import React from 'react'
import {useParams, Link} from "react-router-dom"
import {blogData} from '../constants/blogdata'

const BlogDetails = () => {
    const {id} = useParams();
    const blog = blogData.find((item) => item.id === parseInt(id));

    if(!blog) return <div className="text-center py-20 text-xl">Blog not found.</div>;
  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-16 px-6">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-[60vw] h-[500px] object-cover rounded-xl shadow-md mb-8"
      />
      <h1 className="text-3xl font-bold text-[#030147] mb-6 text-center w-[60vw]">
        {blog.title}
      </h1>
      <p className="text-gray-800 leading-relaxed whitespace-pre-line w-[60vw]">
        {blog.details}
      </p>

      <Link to="/blog">
        <button className="mt-10 bg-black text-white px-6 py-2 rounded-md hover:bg-[#030147] transition-all duration-300">
          Back to Blogs
        </button>
      </Link>
    </div>
  );
};

export default BlogDetails;
