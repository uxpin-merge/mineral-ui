import React from 'react';
import Menu from '../Menu';

const data = [
  {
    items: [
      {
        text: 'Menu item 1',
        secondaryText: 'Secondary text'
      },
      {
        text: 'Menu item 2',
        secondaryText: 'Secondary text'
      }
    ]
  },
  {
    items: [
      {
        text: 'Menu item 1',
        secondaryText: 'Secondary text'
      },
      {
        text: 'Menu item 2',
        secondaryText: 'Secondary text'
      }
    ]
  }
];

export default <Menu data={data} />;
