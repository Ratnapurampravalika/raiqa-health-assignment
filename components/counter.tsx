'use client';

import { useState } from 'react';
import ListView from './listview';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<number[]>([]);
  const [sortAsc, setSortAsc] = useState(true);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

  const addItem = () => {
    if (count > 0 && !items.includes(count)) {
      const updatedItems = [...items, count];
      const sortedItems = sortAsc
        ? updatedItems.sort((a, b) => a - b)
        : updatedItems.sort((a, b) => b - a);
      setItems(sortedItems);
      setCount(0);
    }
  };

  const toggleSort = () => {
    const newSortAsc = !sortAsc;
    setSortAsc(newSortAsc);
    const sortedItems = newSortAsc
      ? [...items].sort((a, b) => a - b)
      : [...items].sort((a, b) => b - a);
    setItems(sortedItems);
  };

  const resetAll = () => {
    setItems([]);
    setCount(0);
    setSortAsc(true);
  };

  return (
    <main className="max-w-md mx-auto mt-10 space-y-8 px-4 sm:px-6">
    
      <section className="bg-white rounded-xl shadow p-6">
        <h1 className="text-center text-black text-2xl font-semibold mb-6">Counter</h1>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <button
            onClick={decrement}
            aria-label="Decrease count"
            className="w-16 h-12 text-3xl text-black font-bold bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            –
          </button>
          <span className="min-w-[3rem] text-black text-center text-4xl font-extrabold">
            {count}
          </span>
          <button
            onClick={increment}
            aria-label="Increase count"
            className="w-16 h-12 text-3xl text-black font-bold bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            +
          </button>
        </div>
        <button
          onClick={addItem}
          className="mt-8 ml-23 w-1/2 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Add
        </button>
      </section>

 
      <section className="bg-white rounded-xl shadow p-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-xl text-black font-bold">ListView</h1>
          <div className="flex gap-3">
            <button
              onClick={toggleSort}
              className="px-3 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition flex items-center gap-2"
            >
              Sort  {sortAsc ? '⬆️' : '⬇️'}
            </button>
            <button
              onClick={resetAll}
              className="px-3 py-2 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              Reset
            </button>
          </div>
        </div>

        <ListView items={items} />
      </section>
    </main>
  );
}