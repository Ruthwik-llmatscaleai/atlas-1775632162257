import React from 'react';

function InventoryList({ items, handleRemoveItem }) {
  return (
    <ul className="list-none p-0 m-0">
      {items.map((item, index) => (
        <li
          key={index}
          className="bg-white p-4 rounded-md shadow-md mb-4 flex justify-between"
        >
          <span className="font-bold">{item.name}</span>
          <span>Quantity: {item.quantity}</span>
          <button
            className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700"
            onClick={() => handleRemoveItem(index)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default InventoryList;