import React from 'react';
import Select from '../Select';
import IconCloud from '../../../../packages/mineral-ui-icons/src/IconCloud';
import IconWbSunny from '../../../../packages/mineral-ui-icons/src/IconWbSunny';

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
    text: 'Icon at start',
    value: 'iconStart',
    iconStart: <IconCloud key="NP4Z1C9PJW9Z4J36NY6BUFI0JRFT1WCF" />
  },
  {
    text: 'Icon at end',
    value: 'iconEnd',
    iconEnd: <IconWbSunny key="CEFQWE4EMYU45HRQNVJCHX3FQ6QY8JO8" />
  }
];

export default <Select data={data} key="EW6KZL8ZZIXSSNAMNU7DHV34F5UQVP1X" />;
