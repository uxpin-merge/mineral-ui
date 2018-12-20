import React from 'react';
import Table from '../Table';

const data = [
  {
    Fruits: 'Pomello',
    Vegetables: 'Bok Choi',
    Grains: 'Chia',
    Dairy: 'Pule',
    Protein: 'Crickets'
  },
  {
    Fruits: 'Starfruit',
    Vegetables: 'Romanesco',
    Grains: 'Sorghum',
    Dairy: 'Casu marzu',
    Protein: 'Barnacles'
  },
  {
    Fruits: 'Durian',
    Vegetables: 'Ramps',
    Grains: 'Teff',
    Dairy: 'Vieux Lille',
    Protein: 'Inca nuts'
  },
  {
    Fruits: 'Persimmons',
    Vegetables: 'Fiddleheads',
    Grains: 'Quinoa',
    Dairy: 'Milbenkase',
    Protein: 'Spirulina'
  }
];

export default (
  <Table
    data={data}
    hideTitle
    key="5012e33f-61f6-4493-be79-32466de8a2d8"
    rowKey="Fruits"
    title="Foods of the World"
  />
);
