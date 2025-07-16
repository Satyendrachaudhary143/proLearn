import { useState } from 'react';

function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can add actual form submission logic (API call etc.)
  };

  return (
    <section className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-4 sm:p-8 mt-8 sm:mt-12 mb-8 sm:mb-12 flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
      {/* Contact Info */}
      <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2 sm:mb-4">Contact Us</h2>
        <div className="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2 font-semibold">Satyendra Chaudhary</div>
        <div className="block mb-1">Email: <a href="mailto:satyendrachaudhary38@gmail.com" className="text-blue-600 break-all">satyendrachaudhary38@gmail.com</a></div>
        <div className="block mb-2 sm:mb-4">Mobile: <a href="tel:8840859444" className="text-blue-600 ">8840859444</a></div>
        <div className="text-gray-500 text-xs sm:text-sm">Feel free to reach out for any queries or feedback!</div>
      </div>
      {/* Contact Form */}
      <form className="flex-1 flex flex-col gap-3 sm:gap-4 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
          <input type="text" name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile Number" className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        </div>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows={4} className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        <button type="submit" className="bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition">Send Message</button>
        {submitted && <div className="text-green-600 font-semibold mt-2">Thank you for contacting us!</div>}
      </form>
    </section>
  );
}

export default ContactUs; 