import React, {useState} from 'react';
import apiURL from '../api';
import { ItemForm } from './ItemForm';

export const ItemAdd = ({setIsAddingItem, fetchItems}) => {
  const initialItem = {
    title: '',
    price: 0,
    category: '',
    description: '',
    image: ''
  };
  const [item, setItem] = useState(initialItem);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${apiURL}/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify(item),
      });
      setItem(initialItem);
      setIsAddingItem(false);
      fetchItems();
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  return <ItemForm
    cancelFunction={setIsAddingItem}
    fetchItems={fetchItems}
    item={item}
    handleSubmit={handleSubmit}
    setItem={setItem}
    method={'add'}
  />
}
