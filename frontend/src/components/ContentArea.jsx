import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

function ContentArea({ currentMenu, currentTopic, selectedTopic, setSelectedTopic }) {
  if (!selectedTopic || !currentTopic) {
    return (
      <main className="flex-1 p-8 overflow-y-auto flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-12 min-h-[300px] flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-extrabold text-blue-700 mb-4">Welcome to ProLearn!</h2>
          <p className="text-gray-700 text-lg mb-6 max-w-xl">Select a subject from the sidebar to get started. Explore Math, C, or Accounting topics and see detailed content here. Enjoy a colorful, interactive, and professional learning experience!</p>
          <span className="text-6xl">📚</span>
        </div>
      </main>
    );
  }

  const handlePrev = () => {
    if (selectedTopic.index > 0) {
      setSelectedTopic((prev) => ({ ...prev, index: prev.index - 1 }));
    }
  };

  const handleNext = () => {
    if (selectedTopic.index < currentMenu.topics.length - 1) {
      setSelectedTopic((prev) => ({ ...prev, index: prev.index + 1 }));
    }
  };

  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 min-h-[300px] flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">{currentTopic.label}</h2>
          <p className="text-gray-700 text-lg mb-8">{currentTopic.content}</p>
        </div>
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrev}
            disabled={selectedTopic.index === 0}
            className="flex items-center gap-2 px-4 py-2 rounded bg-blue-200 text-blue-800 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-300 transition"
          >
            <ArrowLeftIcon className="h-5 w-5" /> Previous
          </button>
          <button
            onClick={handleNext}
            disabled={selectedTopic.index === currentMenu.topics.length - 1}
            className="flex items-center gap-2 px-4 py-2 rounded bg-blue-200 text-blue-800 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-300 transition"
          >
            Next <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </main>
  );
}

export default ContentArea; 