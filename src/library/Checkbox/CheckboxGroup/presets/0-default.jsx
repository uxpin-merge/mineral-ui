import React from 'react';
import CheckboxGroup from '../CheckboxGroup';
import Checkbox from '../..';

export default (
  <CheckboxGroup
    defaultChecked={['hematite', 'pyrite']}
    uxpId="0YDENGD0Q6VGDXJK3N1C0EFN2GHHDFSU"
    name="minerals1">
    <Checkbox
      uxpId="EW6KZL8ZZIXSSNAMNU7DHV34F5UQVP1X"
      label="Azurite"
      value="azurite"
    />
    <Checkbox
      uxpId="9BZANYTUTRX8FFZIOATGB0ABIPYYLKTD"
      label="Hematite"
      value="hematite"
    />
    <Checkbox
      uxpId="25742CUEE2H85OM1XY9XYWQ1QUE12QUA"
      label="Pyrite"
      value="pyrite"
    />
  </CheckboxGroup>
);
