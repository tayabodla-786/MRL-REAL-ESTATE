import React from 'react'
import { NavLink } from "react-router-dom";

const linkClasses =
    "relative text-lg font-medium text-white hover:text-[#D39B2F] transition duration-300 pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-[#D39B2F] after:transition-all after:duration-300 hover:after:w-full";


const activeStyle =
    "text-[#D39B2F] after:w-full after:bg-[#D39B2F]";

const Navbar = () => {
  return (
    <div className='h-[210px] w-full bg-[#012549] flex justify-around gap-30 items-center'>
      <img src="https://themrl.com/wp-content/uploads/2019/09/png-MRL-Logo.png" width={"100px"}/>
      <ul className='text-white flex gap-8 text-[19px]'>
        <li>
            <NavLink
            to="/"
            className={({isActive}) =>
              `${linkClasses} ${isActive ? activeStyle : ""}`
            }
            >
                HOME
       <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#D39B2F] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </NavLink>
        </li>

        <li>
            <NavLink
            to="/blog"
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? activeStyle : ""}`
            }
            >
                Blogs
       <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#D39B2F] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </NavLink>
        </li>

        <li>
            <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? activeStyle : ""}`
            }
            >
                Contact Us
       <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#D39B2F] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
