import { ServicesMenu } from './components/ServicesMenu';
import { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-neutral-100 py-8">
      <div className="max-w-[816px] mx-auto mb-4 flex items-center justify-between px-4">
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage(1)}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? 'bg-black text-white'
                : 'bg-white text-black border border-neutral-300'
            }`}
          >
            Page 1
          </button>
          <button
            onClick={() => setCurrentPage(2)}
            className={`px-4 py-2 rounded ${
              currentPage === 2
                ? 'bg-black text-white'
                : 'bg-white text-black border border-neutral-300'
            }`}
          >
            Page 2
          </button>
        </div>
        <div className="text-sm text-neutral-600">
          Page {currentPage} of 2
        </div>
      </div>
      <ServicesMenu currentPage={currentPage} />
    </div>
  );
}
