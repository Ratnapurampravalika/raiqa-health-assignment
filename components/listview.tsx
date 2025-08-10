'use client';

type ListViewProps = {
  items: number[];
};

export default function ListView({ items }: ListViewProps) {
  if (items.length === 0) {
    return <p>No items added .</p>;
  }

  return (
    <ul style={{ paddingLeft: 20 }}>
      {items.map((item, index) => (
        <li key={index} style={{ marginBottom: 6 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}