

import React from 'react';
import { Item } from './Item';

export const ItemsList = ({items, setSelectedItem}) => {
	return <div id="item-list">
		{
			items.map((item, idx) => {
				return <Item item={item} key={idx} setSelectedItem={setSelectedItem} />
			})
		}
	</div>
} 