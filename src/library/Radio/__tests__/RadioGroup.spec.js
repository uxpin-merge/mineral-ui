/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import RadioGroup from '../RadioGroup/RadioGroup';
import examples from '../../../website/app/demos/Radio/examples/RadioGroup';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

function shallowRadioGroup() {
  return shallow(<RadioGroup name="example" />);
}

describe('RadioGroup', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const radioGroup = shallowRadioGroup();

    expect(radioGroup.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(<RadioGroup name="test" />, [
      'RadioGroupControl_marginVertical_stacked'
    ]);
  });
});
