import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import InventoryList from './components/InventoryList';
import AddItem from './components/AddItem';

function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(0);

  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  const handleAddItem = () => {
    const newItem = { name: itemName, quantity: itemQuantity };
    setItems([...items, newItem]);
    setItemName('');
    setItemQuantity(0);
    localStorage.setItem('items', JSON.stringify([...items, newItem]));
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  return (
    <div className="p-4 bg-gray-50 h-screen">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>
      <AddItem
        itemName={itemName}
        itemQuantity={itemQuantity}
        setItemName={setItemName}
        setItemQuantity={setItemQuantity}
        handleAddItem={handleAddItem}
      />
      <InventoryList items={items} handleRemoveItem={handleRemoveItem} />
    </div>
  );
}

export default App;