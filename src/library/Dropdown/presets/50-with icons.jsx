import React from 'react';
import Dropdown from '../Dropdown';
import Button from '../../Button';
import IconCloud from '../../../../packages/mineral-ui-icons/src/IconCloud';

const data = [
  {
    text: 'Menu item with onClick'
  },
  {
    text: 'Menu item',
    secondaryText: 'Secondary text'
  },
  {
    text: 'Icon at start',
    iconStart: {
      uxpinPresetElementId: 'LUT2OEH5MBWIZ14927AYRL9T0UWD6ABK'
    }
  },
  {
    text: 'Icon at end',
    iconEnd: {
      uxpinPresetElementId: '8GZ573PJUL8MCE239NVM7O6GTLOB2JQQ'
    }
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
  <Dropdown data={data} uxpId="1526ABF05067F99EF65F83152E26DA39">
    <Button uxpId="SPNM3VK5JSHWM6LK9JJ7OTHYF96AX6KU">Menu</Button>
    <IconCloud uxpId="LUT2OEH5MBWIZ14927AYRL9T0UWD6ABK" />
    <IconCloud uxpId="8GZ573PJUL8MCE239NVM7O6GTLOB2JQQ" />
  </Dropdown>
);
