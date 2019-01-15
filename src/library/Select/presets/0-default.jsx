import React from 'react';
import Select from '../Select';

const data = [
  {
    text: 'Select item',
    secondaryText: 'Secondary text',
    value: 'basic'
  },
  {
    divider: true
  },
  {
    text: 'Danger variant',
    variant: 'danger',
    value: 'variant'
  },
  {
    text: 'Disabled menu item',
    disabled: true,
    value: 'disabled'
  }
];

export default <Select data={data} uxpId="EW6KZL8ZZIXSSNAMNU7DHV34F5UQVP1X" />;
