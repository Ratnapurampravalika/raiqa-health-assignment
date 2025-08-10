"use client"
import { useState } from "react";
import ListView from "./listview";


export default function Counter(){
  const [Count , setCount] =useState(0);
  const [items, setItems] =useState<number[]>([]);
  const[sortAsc, setSortAsc]=useState(true);
  function increment(){
    setCount(Count+1);
  }
  function decrement(){
if (Count>0){
setCount(Count-1);
}
  }
  function addItem(){
    if(Count>0 && items.indexOf(Count)===-1){
      let newItems=items.concat(Count);
      if (sortAsc){
        newItems=newItems.sort(function(a,b){
          return a-b;
        });
      }else{
        newItems=newItems.sort(function(a,b){
          return b-a;
        });
      }
      setItems(newItems);
      setCount(0);
    }else{
      console.log('count is zero or already exists');
    }
  }
   function toggleSort() {
    const newSort = !sortAsc;
    setSortAsc(newSort);

    let newItems = [...items];

    if (newSort) {
      newItems.sort((a, b) => a - b);
    } else {
      newItems.sort((a, b) => b - a);
    }

    setItems(newItems);
  }

  function resetAll() {
    setItems([]);
    setCount(0);
    setSortAsc(true);
  }

  return (
    <main className="max-w-md mx-auto mt-10 space-y-8 px-4 sm:px-6">
      <section className="bg-white rounded-xl shadow p-6">
        <h1 className="text-center text-2xl font-semibold mb-6">Counter</h1>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <button
            onClick={decrement}
            aria-label="Decrease Count"
            className="w-14 h-12 text-3xl font-bold bg-gray-200 rounded-lg hover:bg-gray-300 transition sm:w-16 sm:h-14"
          >
            –
          </button>
          <span className="min-w-[3rem] text-center text-black text-4xl font-extrabold">
            {Count}
          </span>
          <button
            onClick={increment}
            aria-label="Increase Count"
            className="w-14 h-12 text-3xl font-bold bg-gray-200 rounded-lg hover:bg-gray-300 transition sm:w-16 sm:h-14"
          >
            +
          </button>
        </div>
        <button
          onClick={addItem}
          className="mt-8 ml-22 w-1/2 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Add
        </button>
      </section>

      <section className="bg-white rounded-xl shadow p-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xl font-bold">ListView</h2>
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={toggleSort}
              className="px-2 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition flex items-center gap-2"
            >
              Sort {sortAsc ? '⬆️' : '⬇️'}
            </button>
            <button
              onClick={resetAll}
              className="px-2 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition"
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