
import React, {useState} from 'react';
import apiURL from '../api';

export const ItemForm = ({cancelFunction, item, handleSubmit, setItem, method}) => {
  const {
    title,
    price,
    category,
    description,
    image
  } = item;

  const formTitle = method === 'add' ? 'Add Item' : 'Edit Item';


  return <div className="item-container" id="item-add">
    <h3>{formTitle}</h3>
    <form className='form-input-list' onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" name="title" value={title} onChange={(ev) => setItem({...item, title: ev.target.value})}/>
      <label>Price:</label>
      <input type="number" name="price" value={price} onChange={(ev) => setItem({...item, price: ev.target.value})}/>
      <label>Category:</label>
      <input type="text" name="category" value={category} onChange={(ev) => setItem({...item, category: ev.target.value})}/>
      <label>Description:</label>
      <textarea name="description" value={description} onChange={(ev) => setItem({...item, description: ev.target.value})}/>
      <label>Image URL:</label>
      <input type="text" name="image" value={image} onChange={(ev) => setItem({...item, image: ev.target.value})}/>
      <span className='options-container'>
        <button type="submit">Submit</button>
        <button className='btn-danger' onClick={() => cancelFunction(false)}>Cancel</button>
      </span>
    </form>
  </div>
}