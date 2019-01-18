import React from 'react';
import CardTitleMenu from '../CardTitleMenu';

const data = [
  {
    items: [
      {
        onClick: "() => { console.log('Clicked 1') }",
        text: 'MenuItem 1'
      },
      {
        onClick: "() => { console.log('Clicked 2') }",
        text: 'MenuItem 2'
      },
      {
        divider: true
      },
      {
        onClick: "() => { console.log('Clicked 3') }",
        text: 'MenuItem 3'
      }
    ]
  }
];

export default (
  <CardTitleMenu data={data} uxpId="QATTOR6N3QK74G14MFCTCWGEA7MWM0KA" />
);
