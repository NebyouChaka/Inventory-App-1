import React from 'react';
import apiURL from '../api';

export const Item = ({item, setSelectedItem, fetchItems, children, editButton}) => {

  const handleDelete = async () => {
    try {
      await fetch(`${apiURL}/items/${item.id}`, {
        method: 'DELETE',
      });
      setSelectedItem(null);
      fetchItems();
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return <div className="item-container">
    <h3>{item.title}</h3>
    <div className="price-box">
      <div>${item.price}</div>
      <button onClick={() => setSelectedItem(children ? null : item)}>{children ? 'Back to Items' : 'Details'}</button>
      {children && <button className="btn-danger" onClick={handleDelete}>Delete</button> }
      {editButton}
    </div>
    {children}
    <img src={item.image} alt={item.title} />
  </div>
}