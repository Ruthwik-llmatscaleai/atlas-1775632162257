import React from 'react';

function AddItem({
  itemName,
  itemQuantity,
  setItemName,
  setItemQuantity,
  handleAddItem,
}) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4">
      <h2 className="font-bold text-lg mb-2">Add Item</h2>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Item Name"
        className="p-2 border border-gray-300 rounded-md w-full mb-2"
      />
      <input
        type="number"
        value={itemQuantity}
        onChange={(e) => setItemQuantity(e.target.value)}
        placeholder="Item Quantity"
        className="p-2 border border-gray-300 rounded-md w-full mb-2"
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
        onClick={handleAddItem}
      >
        Add Item
      </button>
    </div>
  );
}

export default AddItem;