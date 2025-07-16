function Help() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl mt-12 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Help & FAQ</h2>
        <ul className="text-left text-gray-700 list-disc list-inside space-y-2">
          <li><span className="font-semibold">How do I use ProLearn?</span> <br />Select a subject from the sidebar, then choose a topic to view its content.</li>
          <li><span className="font-semibold">How do I contact support?</span> <br />Use the Contact Us section on the Home page or email <a href="mailto:satyendrachaudhary38@gmail.com" className="text-blue-600 underline">satyendrachaudhary38@gmail.com</a>.</li>
          <li><span className="font-semibold">Is ProLearn free?</span> <br />Yes, ProLearn is completely free to use for all learners.</li>
        </ul>
      </div>
    </div>
  );
}

export default Help; 