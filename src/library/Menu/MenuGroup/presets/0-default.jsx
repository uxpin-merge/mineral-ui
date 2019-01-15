import React from 'react';
import MenuGroup from '../MenuGroup';
import MenuItem from '../../MenuItem/MenuItem';
import MenuDivider from '../../MenuDivider/MenuDivider';

export default (
  <MenuGroup uxpId="ZU22SAKIOQBY5WD86WWOXECG4BB83QR4">
    <MenuItem uxpId="ZVZAEWUMZ8DGEX54X1BRDXF9SHMZ5FY7">
      First Item in group
    </MenuItem>
    <MenuDivider uxpId="67CE0I1XGJ25DJ2SKMMETBF8Z9KULMGR" />
    <MenuItem uxpId="KVMDS3W7NSWU5FXFDEUBPSRAZ7URBH8W" variant="danger">
      Danger variant
    </MenuItem>
    <MenuItem uxpId="AOVQ6ULGRBO08ADB810R0OWEKBLP245W" disabled>
      Disabled menu item
    </MenuItem>
  </MenuGroup>
);
