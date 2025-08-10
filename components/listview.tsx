'use client';

type ListViewProps = {
  items: number[];
};

export default function ListView({ items }: ListViewProps) {
  return (
    <div className="mt-5">
      
      <h2 className="text-lg text-black font-semibold mb-3">Added Numbers</h2>
      {items.length === 0 ? (
        <p className="text-black">No numbers added.</p>
      ) : (
        <ul className="list-disc list-inside space-y-1">
          {items.map((num, i) => (
            <li key={i} className="text-gray-800">
              {num}
            </li>
          ))}
        </ul>
      )}
    
    </div>
  );
}