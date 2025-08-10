'use client';

import { useState } from 'react';
import ListView from './listview';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<number[]>([]);
  const [sortAsc, setSortAsc] = useState(true);

  function increment() {
    setCount(prev => prev + 1);
  }

  function decrement() {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  }

  function addItem() {
    if (count > 0 && !items.includes(count)) {
      const updated = [...items, count];
      setItems(
        sortAsc
          ? updated.sort((a, b) => a - b)
          : updated.sort((a, b) => b - a)
      );
      setCount(0);
    }
  }

  function toggleSort() {
    const newOrder = !sortAsc;
    setSortAsc(newOrder);
    setItems(
      newOrder
        ? [...items].sort((a, b) => a - b)
        : [...items].sort((a, b) => b - a)
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow space-y-4">
      
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          –
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button
          onClick={increment}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          +
        </button>
      </div>

      
      <div className="flex justify-center">
        <button
          onClick={addItem}
          className="px-6 py-2 bg-blue-500 text-white rounded bg-blue-600"
        >
          Add
        </button>
      </div>

    
      <div className="flex justify-center">
        <button
          onClick={toggleSort}
          className="px-6 py-2 bg-red-600 text-white rounded bg-green-600"
        >
          Sort {sortAsc ? 'Descending' : 'Ascending'}
        </button>
      </div>

      
      <ListView items={items} />
    </div>
  );
}