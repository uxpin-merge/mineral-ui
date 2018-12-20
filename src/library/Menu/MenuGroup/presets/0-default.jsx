import React from 'react';
import MenuGroup from '../MenuGroup';
import MenuItem from '../../MenuItem/MenuItem';
import MenuDivider from '../../MenuDivider/MenuDivider';

export default (
  <MenuGroup key="ZU22SAKIOQBY5WD86WWOXECG4BB83QR4">
    <MenuItem key="ZVZAEWUMZ8DGEX54X1BRDXF9SHMZ5FY7">
      First Item in group
    </MenuItem>
    <MenuDivider key="67CE0I1XGJ25DJ2SKMMETBF8Z9KULMGR" />
    <MenuItem key="KVMDS3W7NSWU5FXFDEUBPSRAZ7URBH8W" variant="danger">
      Danger variant
    </MenuItem>
    <MenuItem key="AOVQ6ULGRBO08ADB810R0OWEKBLP245W" disabled>
      Disabled menu item
    </MenuItem>
  </MenuGroup>
);
