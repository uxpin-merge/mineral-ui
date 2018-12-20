import React from 'react';
import Dropdown from '../Dropdown';
import Button from '../../Button';

const data = [
  {
    text: 'Menu item',
    secondaryText: 'Secondary text'
  },
  {
    divider: true
  },
  {
    text: 'Danger variant',
    variant: 'danger'
  },
  {
    text: 'Disabled menu item',
    disabled: true
  }
];

export default (
  <Dropdown data={data} key="1526ABF05067F99EF65F83152E26DA39">
    <Button key="SPNM3VK5JSHWM6LK9JJ7OTHYF96AX6KU">Menu</Button>
  </Dropdown>
);
