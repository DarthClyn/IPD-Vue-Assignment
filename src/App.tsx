import React, { useState } from 'react';
import { Pagination } from './components/Pagination';
import { generateMockData } from './utils/mockData';

const ITEMS_PER_PAGE = 10;
const TOTAL_ITEMS = 50;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const items = generateMockData(TOTAL_ITEMS);
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = items.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Pagination Example
        </h1>
        
        <div className="bg-white rounded-lg shadow">
          <div className="divide-y divide-gray-200">
            {currentItems.map((item) => (
              <div key={item.id} className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          
          <Pagination
            currentPage={currentPage}
            totalItems={TOTAL_ITEMS}
            itemsPerPage={ITEMS_PER_PAGE}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;