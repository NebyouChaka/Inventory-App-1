import React, {useState} from 'react';
import { Item } from './Item';
import { ItemEdit } from './ItemEdit';

export const ItemSingle = ({item, setSelectedItem, fetchItems}) => {
  const [isEditing, setIsEditing] = useState(false);

  const editButton = isEditing
    ? <button className="btn-danger" onClick={() => setIsEditing(false)}>Cancel</button>
    : <button onClick={() => setIsEditing(true)}>Edit</button>

  return <>
    {
      isEditing
        ? <ItemEdit item={item} setIsEditing={setIsEditing} fetchItems={fetchItems} setSelectedItem={setSelectedItem}/>
        : null
    }
    <Item item={item} setSelectedItem={setSelectedItem} fetchItems={fetchItems} editButton={editButton}>
      <h3>Category: {item.category}</h3>
      <div>{item.description}</div>
    </Item>
  </>
}
