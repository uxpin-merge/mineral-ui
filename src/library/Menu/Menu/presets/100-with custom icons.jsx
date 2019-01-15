import React from 'react';
import Menu from '../Menu';
import MenuItem from '../../MenuItem/MenuItem';
import MenuGroup from '../../MenuGroup/MenuGroup';
import MenuDivider from '../../MenuDivider/MenuDivider';
import IconWbSunny from '../../../../../packages/mineral-ui-icons/src/IconWbSunny';
import IconCloud from '../../../../../packages/mineral-ui-icons/src/IconCloud';

export default (
  <Menu uxpId="F85995B051CF1B9DAE5B74E20509B335">
    <MenuItem uxpId="5WCQ7AUYKJ6ZC128QSO72KH57V8725YZ">Menu Item 1</MenuItem>
    <MenuItem uxpId="914CHOZ7UST58UST9627WECXHVJHAIT2">Menu Item 2</MenuItem>
    <MenuGroup uxpId="ZU22SAKIOQBY5WD86WWOXECG4BB83QR4" title="Group Title">
      <MenuItem
        uxpId="ZVZAEWUMZ8DGEX54X1BRDXF9SHMZ5FY7"
        iconStart={<IconCloud uxpId="NP4Z1C9PJW9Z4J36NY6BUFI0JRFT1WCF" />}>
        Icon at start
      </MenuItem>
      <MenuItem
        uxpId="I2SWYA89DXXC502FF5TLKOUSLGODDXQM"
        iconEnd={<IconWbSunny uxpId="CEFQWE4EMYU45HRQNVJCHX3FQ6QY8JO8" />}
        secondaryText="Secondary text">
        Icon at end
      </MenuItem>
      <MenuDivider uxpId="67CE0I1XGJ25DJ2SKMMETBF8Z9KULMGR" />
      <MenuItem uxpId="KVMDS3W7NSWU5FXFDEUBPSRAZ7URBH8W" variant="danger">
        Danger variant
      </MenuItem>
    </MenuGroup>
  </Menu>
);
