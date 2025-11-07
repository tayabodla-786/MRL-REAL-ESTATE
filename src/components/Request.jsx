import React from "react";
import {FiArrowRight} from "react-icons/fi"

const Request = () => {
    return (
        <section className="relative bg-linear-to-b from-[#030147] via-[#020130] to-[#00001f] overflow-hidden mt-4">
            <div className="absolute top-10 left-0 w-full">
                <svg
                    viewBox="0 0 1440 120"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full"
                >
                    <path
                        fill="#fff"
                        fillOpacity="1"
                        d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
                    ></path>
                </svg>
            </div>
            <div className="relative z-10 py-10 px-6 md:px-12">
                <div className="max-w-5xl mx-auto bg-white shadow-md p-10 md:p-14">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                        Request a call back from our <br />
                        <span className="text-black">Real Estate Expert!</span>
                    </h2>
                    <div className="w-8 h-[3px] bg-[#1569fa] mb-5"></div>

                    <p className="text-gray-700 text-sm md:text-base mb-8 max-w-xl">
                        Simply fill out the form below, and we’ll get back to you as soon as
                        possible. If you prefer, you can also email us.
                    </p>

                    <form className="grid md:grid-cols-2 gap-4 md:gap-5">
                        <select
                            defaultValue="Lahore Smart City"
                            className="bg-[#CACACA] text-gray-700 text-sm px-3 py-3 w-full rounded-sm 
               focus:outline-none focus:ring-2 focus:ring-[#bfbeeb] focus:bg-white 
               transition-all duration-300 ease-in-out"
                        >
                            <option>Lahore Smart City</option>
                            <option>Capital Smart City</option>
                            <option>Blue World City Islamabad</option>
                            <option>Bahria Town Lahore</option>
                        </select>
                        <input
                            type="text"
                            placeholder="First name"
                            className="bg-[#CACACA] text-gray-700 text-sm px-3 py-3 w-full rounded-sm 
               focus:outline-none focus:ring-2 focus:ring-[#bfbeeb] focus:bg-white 
               transition-all duration-300 ease-in-out"
                        />
                        <input
                            type="text"
                            placeholder="Mobile number"
                            className="bg-[#CACACA] text-gray-700 text-sm px-3 py-3 w-full rounded-sm 
               focus:outline-none focus:ring-2 focus:ring-[#bfbeeb] focus:bg-white 
               transition-all duration-300 ease-in-out md:col-span-1"
                        />
                        <button
                            type="submit"
                            className="bg-[#1a1a1a] text-white font-semibold text-sm uppercase 
               flex items-center justify-center gap-2 px-6 py-3 hover:opacity-90 
               transition-all duration-300 ease-in-out hover:translate-x-0.5"
                        >
                            Submit <FiArrowRight />
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Request;
