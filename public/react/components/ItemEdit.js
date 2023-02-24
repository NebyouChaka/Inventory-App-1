import React, {useState} from 'react';
import apiURL from '../api';
import { ItemForm } from './ItemForm';

export const ItemEdit = ({item: originalItem, setIsEditing, fetchItems, setSelectedItem}) => {
  const initialItem = {
    title: '',
    price: 0,
    category: '',
    description: '',
    image: ''
  };
  const [item, setItem] = useState(originalItem);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${apiURL}/items/${originalItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify(item),
      });
      setItem(initialItem);
      setIsEditing(false);
      setSelectedItem(null);
      fetchItems();
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  return <ItemForm
    cancelFunction={setIsEditing}
    fetchItems={fetchItems}
    item={item}
    handleSubmit={handleSubmit}
    setItem={setItem}
    method={'edit'}
  />
}