import React from 'react';
import CardTitle from '../CardTitle';
import CardTitleMenu from '../../CardTitleMenu/CardTitleMenu';

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
  <CardTitle
    actions={
      <CardTitleMenu data={data} uxpId="NH4JFP2A69U6GHFL7YLIMI9EZIM72IZR" />
    }
    uxpId="VQ0Z5S02EDHJFHP55YLJR4LFP4WBUMOK">
    Card Title
  </CardTitle>
);
