function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl mt-12 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">About ProLearn</h2>
        <p className="text-lg text-gray-700 mb-4">ProLearn is an interactive learning platform created by <span className="font-semibold text-purple-700">Satyendra Chaudhary</span>. Our mission is to make learning Math, programing, and Accounting easy, engaging, and accessible for everyone.</p>
        <p className="text-gray-600">For any queries, contact: <a href="mailto:satyendrachaudhary38@gmail.com" className="text-blue-600 underline">satyendrachaudhary38@gmail.com</a></p>
      </div>
    </div>
  );
}

export default About; 