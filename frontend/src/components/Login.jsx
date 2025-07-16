function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mt-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Login to ProLearn</h2>
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="password" placeholder="Password" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <button type="submit" className="bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition">Login</button>
        </form>
        <div className="text-center mt-4 text-sm">
          Don't have an account? <a href="#" className="text-blue-600 underline">Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Login; 