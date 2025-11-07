import React, {useState} from 'react';

const ContactUs = () => {
    const [formData, setformData] = useState({
        name: "", 
        email : "",
        message : "",
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setformData((prev) => ({ ...prev, [name] : value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Thank you for reaching out! we'll get back to you soon.");
        setformData({ name : "", email : "", message : ""});
    };
    return (
    <section className="w-full bg-white py-16 px-6 flex justify-center">
      <div className="max-w-4xl w-full bg-gray-50 shadow-xl rounded-2xl p-10 transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-[#030147] mb-6">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Have a question, idea, or project in mind? Fill out the form below and
          we’ll respond as soon as possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6 text-gray-700"
        >
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#030147] transition duration-300"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#030147] transition duration-300"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#030147] transition duration-300"
              placeholder="Type your message here..."
            />
          </div>

          <button
            type="submit"
            className="bg-[#030147] text-white font-semibold rounded-lg py-3 hover:bg-[#07066b] transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-gray-600">Or reach us directly at</p>
          <a
            href="mailto:info@themrl.com"
            className="text-[#030147] font-semibold hover:underline"
          >
            info@themrl.com
          </a>
          <p className="text-gray-600 mt-2">📞 +92 300 1234567</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;


