import React from 'react';
import RadioGroup from '../RadioGroup';

const data = [
  {
    label: 'Fluorite',
    value: 'fluorite'
  },
  {
    label: 'Magnetite',
    value: 'magnetite'
  },
  {
    label: 'Quartz',
    value: 'quartz'
  }
];

export default (
  <RadioGroup
    data={data}
    defaultChecked="quartz"
    uxpId="HT9WU09S0XSJNWKDZPE1CFVVH11FXRDC"
    name="minerals-2"
  />
);
