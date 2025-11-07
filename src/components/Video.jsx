import React from "react";

const Video = () => {
  return (
    <section className="w-[90%] flex flex-col my-5 mx-auto md:flex-row items-start justify-between px-5 md:px-15 py-16 bg-white">
      <div className="md:w-1/2 w-full space-y-6">
        <div className="w-10 h-1 bg-yellow-400 rounded-full mb-2"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#f6b322]">
          Leading Real Estate Agency In Pakistan
        </h2>
        <div className="space-y-4 text-gray-800 leading-relaxed">
          <p>
            <strong>The Masters Real Estate &amp; Builders</strong> has led the
            real estate industry since its inception by providing exceptional
            services to our valued clients. It was founded in 1976 with the goal
            of providing unrivaled real estate consulting on a shoestring
            budget.
          </p>
          <p>
            However, the company’s plan was modified by providing a
            comprehensive real estate solution, such as real estate advisory up
            to the construction level.
          </p>
          <p>
            <strong>Since 1976, The Masters Real Estate &amp; Builders</strong>{" "}
            has been the leading real estate agency in Pakistan, with a team of
            highly skilled and professional realtors. We offer reliable
            investment advice and investment opportunities in the best
            commercial and residential real estate projects.
          </p>
        </div>
        <button className="bg-[#030147] text-white px-6 py-2 rounded-md hover:bg-[#05026a] transition-all duration-300">
          Learn More
        </button>
      </div>
      <div className="md:w-1/2 w-full mt-10 md:mt-0 flex justify-center">
        <div className="w-full max-w-[560px] h-[350px] rounded-xl overflow-hidden shadow-xl">
          <iframe
            className="w-full h-full rounded-xl"
            title="Capital Smart City Site Visit 2022 | Capital Smart City Development Updates |The Masters Real Estate"
            src="https://www.youtube.com/embed/7e5Mxv9Ress"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;
