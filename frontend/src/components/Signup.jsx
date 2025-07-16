import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({ name: '', class: '', mobile: '', email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can add actual signup logic (API call etc.)
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mt-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Sign Up for ProLearn</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <input type="text" name="class" value={form.class} onChange={handleChange} placeholder="Class" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <input type="text" name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile Number" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <button type="submit" className="bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition">Sign Up</button>
          {submitted && <div className="text-green-600 font-semibold mt-2">Signup successful! You can now <Link to='/login' className='text-blue-600 underline'>login</Link>.</div>}
        </form>
        <div className="text-center mt-4 text-sm">
          Already have an account? <Link to="/login" className="text-blue-600 underline">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup; 