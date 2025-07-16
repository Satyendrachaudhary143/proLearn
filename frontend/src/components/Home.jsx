// import Header from './Header';
import Footer from './Footer';
import ContactUs from './ContactUs';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-100">
      {/* <Header /> */}
      <main className="flex-1 flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center py-12 sm:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white shadow-lg mb-8 sm:mb-16 relative overflow-hidden min-w-0">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
          <div className="relative z-10 flex flex-col items-center w-full px-2 sm:px-0">
            <h2 className="w-full text-3xl sm:text-5xl font-extrabold mb-3 sm:mb-4 drop-shadow-lg text-center">Welcome to ProLearn</h2>
            <p className="w-full text-base sm:text-xl font-medium mb-4 sm:mb-6 text-center drop-shadow">Your interactive platform for learning <span className="font-bold text-yellow-200">Math</span>, <span className="font-bold text-green-200">programing</span>, and <span className="font-bold text-pink-200">Accounting</span>. Explore topics, test your knowledge, and grow your skills with a beautiful, easy-to-use interface.</p>
            <Link to="/learn" className="mt-2 sm:mt-4 px-6 sm:px-8 py-2 sm:py-3 bg-yellow-400 text-blue-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 transition text-base sm:text-lg">Start Learning</Link>
          </div>
        </section>
        {/* Improved Contact Section */}
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default Home; 