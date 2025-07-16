import { BookOpenIcon, CalculatorIcon, CurrencyDollarIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const menuIcons = {
  math: <CalculatorIcon className="h-5 w-5 inline-block mr-2" />,
  c: <BookOpenIcon className="h-5 w-5 inline-block mr-2" />,
  accounting: <CurrencyDollarIcon className="h-5 w-5 inline-block mr-2" />,
};

function Sidebar({ menus, openMenu, setOpenMenu, selectedTopic, setSelectedTopic }) {
  const handleMenuClick = (menuKey) => {
    if (openMenu === menuKey) {
      setOpenMenu(null);
      // If the selected topic belongs to this menu, clear it
      if (selectedTopic && selectedTopic.menu === menuKey) {
        setSelectedTopic(null);
      }
    } else {
      setOpenMenu(menuKey);
    }
  };

  return (
    <aside className="w-64 bg-white shadow-lg p-4 flex flex-col gap-4">
      {menus.map((menu) => (
        <div key={menu.key}>
          <button
            className={`flex items-center w-full px-2 py-2 rounded font-semibold text-lg transition justify-between ${openMenu === menu.key ? 'bg-blue-100 text-blue-700' : 'hover:bg-blue-50 text-gray-700'}`}
            onClick={() => handleMenuClick(menu.key)}
          >
            <span className="flex items-center">
              {menuIcons[menu.key]}
              {menu.label}
            </span>
            <ChevronDownIcon
              className={`h-5 w-5 ml-2 transition-transform duration-200 ${openMenu === menu.key ? 'rotate-180' : ''}`}
            />
          </button>
          <AnimatePresence initial={false}>
            {openMenu === menu.key && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="pl-8 mt-2 flex flex-col gap-1"
              >
                {menu.topics.map((topic, idx) => (
                  <li key={topic.key}>
                    <button
                      className={`w-full text-left px-2 py-1 rounded transition ${selectedTopic && selectedTopic.menu === menu.key && selectedTopic.index === idx ? 'bg-purple-200 text-purple-900 font-bold' : 'hover:bg-purple-50 text-gray-600'}`}
                      onClick={() => setSelectedTopic({ menu: menu.key, index: idx })}
                    >
                      {topic.label}
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar; 