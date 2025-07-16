import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ContentArea from './ContentArea';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import About from './About';
import Help from './Help';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const sidebarMenus = [
  {
    key: 'math',
    label: 'Math',
    topics: [
      { key: 'set', label: 'Set', content: 'Set is a collection of well-defined objects.' },
      { key: 'factor', label: 'Factor', content: 'A factor is a number that divides another number exactly.' },
      { key: 'algebra', label: 'Algebra', content: 'Algebra is the study of mathematical symbols.' },
    ],
  },
  {
    key: 'c',
    label: 'C',
    topics: [
      { key: 'syntax', label: 'Syntax', content: 'C syntax refers to the rules for writing C programs.' },
      { key: 'loops', label: 'Loops', content: 'Loops are used to repeat a block of code.' },
    ],
  },
  {
    key: 'accounting',
    label: 'Accounting',
    topics: [
      { key: 'balance', label: 'Balance Sheet', content: 'A balance sheet shows assets, liabilities, and equity.' },
      { key: 'ledger', label: 'Ledger', content: 'A ledger is a book for recording transactions.' },
    ],
  },
];

function MainLayout() {
  const [openMenu, setOpenMenu] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentMenu = selectedTopic ? sidebarMenus.find((m) => m.key === selectedTopic.menu) : null;
  const currentTopic = currentMenu ? currentMenu.topics[selectedTopic.index] : null;

  // Handler to close sidebar on mobile when a topic is selected
  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/learn" element={
          <div className="flex flex-1 overflow-hidden relative">
            {/* Mobile Sidebar Toggle */}
            <button
              className="md:hidden absolute top-2 left-2 z-20 p-2 rounded bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => setSidebarOpen((prev) => !prev)}
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? <XMarkIcon className="h-7 w-7 text-blue-700" /> : <Bars3Icon className="h-5 w-5 text-blue-700" />}
            </button>
            {/* Sidebar (responsive) */}
            <div className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-200 md:static md:translate-x-0 md:w-64 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
              <Sidebar
                menus={sidebarMenus}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                selectedTopic={selectedTopic}
                setSelectedTopic={(topic) => handleTopicSelect(topic)}
              />
            </div>
            {/* Overlay for mobile when sidebar is open */}
            {sidebarOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close sidebar overlay"
              />
            )}
            {/* Content Area */}
            <main className="flex-1 p-0 md:p-8 overflow-y-auto w-full">
              <ContentArea
                currentMenu={currentMenu}
                currentTopic={currentTopic}
                selectedTopic={selectedTopic}
                setSelectedTopic={setSelectedTopic}
              />
            </main>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default MainLayout; 