import React from 'react'
import {Link} from 'react-router-dom'
import {blogData} from '../constants/blogdata.js'

const Blogs = () => {
    const sidebarUpdates = [
        {
      title: "Luxury Apartments Demand Rising in Multan",
      date: "Oct 03, 2025",
    },
    {
      title: "The Address DHA Multan Nears Completion",
      date: "Sep 28, 2025",
    },
    {
      title: "New Commercial Blocks Announced at Royal Pavilion",
      date: "Sep 20, 2025",
    },
    {
      title: "Investors Eye Capital Smart City Phase 2",
      date: "Sep 12, 2025",
    },
    ];

  return (
    <section className='flex flex-col md:flex-row items-start justify-center bg-white py-16 px-10 gap-12'>
        {/* LEFT COLUMN — BLOG CARDS */}
        <div className='flex flex-col space-y-12 w-full md:w-[65%]'>
            {blogData.map((blog) => (
                <div
                key={blog.id}
                 className='bg-white shadow-[0_4px_15px_rgba(0,0,0,0.08)] rounded-xl overflow-hidden hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-all duration-300'>
                    <img 
                    src={blog.image}
                     alt={blog.title}
                     className='w-full h-[480px] object-cover'
                      />
                      <div className='p-6'>
                        <h2 className='text-2xl font-bold text-[#030147] mb-4'>
                            {blog.title}
                        </h2>
                        <Link to={`/blog/${blog.id}`}>
                        <button className='bg-black text-white px-6 py-2 rounded-md hover:bg-[#030147] transition-all duration-300'>
                            Read More
                        </button>
                        </Link>
                      </div>
                 </div>
            ))}
        </div>
        {/* RIGHT COLUMN — REAL ESTATE UPDATES */}
        <aside className="hidden md:flex flex-col w-[30%] bg-gray-50 shadow-md rounded-xl p-6 space-y-6">
        <h3 className="text-xl font-semibold text-[#030147] border-b pb-3">
          Latest Real Estate Updates
        </h3>
        {sidebarUpdates.map((update, idx) => (
          <div key={idx} className="border-b border-gray-200 pb-3">
            <h4 className="text-gray-700 font-medium hover:text-[#D39B2F] transition duration-300 cursor-pointer">
              {update.title}
            </h4>
            <p className="text-sm text-gray-400 mt-1">{update.date}</p>
          </div>
        ))}
      </aside>
      
    </section>
  );
};

export default Blogs;
