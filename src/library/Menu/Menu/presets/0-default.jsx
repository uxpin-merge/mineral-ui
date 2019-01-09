import React from 'react';
import Menu from '../Menu';
import MenuItem from '../../MenuItem/MenuItem';
import MenuGroup from '../../MenuGroup/MenuGroup';
import MenuDivider from '../../MenuDivider/MenuDivider';

export default (
  <Menu key="F85995B051CF1B9DAE5B74E20509B335">
    <MenuItem key="5WCQ7AUYKJ6ZC128QSO72KH57V8725YZ">Menu Item 1</MenuItem>
    <MenuItem
      key="914CHOZ7UST58UST9627WECXHVJHAIT2"
      secondaryText="Secondary text">
      Menu Item 2
    </MenuItem>
    <MenuGroup key="ZU22SAKIOQBY5WD86WWOXECG4BB83QR4" title="Group Title">
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
  </Menu>
);
