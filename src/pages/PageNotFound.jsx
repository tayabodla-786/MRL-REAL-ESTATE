import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion"

const PageNotFound = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-[#030147] via-[#0a085c] to-[#030147] text-white px-6'>
      <motion.h1 
      nitial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[8rem] font-extrabold tracking-widest"
        >
        404
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-2xl md:text-3xl font-semibold mt-2"
      >
        Page Not Found
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-gray-300 mt-4 max-w-md text-center"
      >
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <NavLink
          to="/"
          className="mt-8 inline-block relative z-50 bg-white text-[#030147] font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Go Back Home
        </NavLink>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 text-[10rem] font-bold text-white/10 select-none"
      >
        MRL
      </motion.div>
    </div>
  );
};

export default PageNotFound;
