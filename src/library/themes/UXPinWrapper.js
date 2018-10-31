/* @flow */
import ThemeProvider from './ThemeProvider';
import React from 'react';

type Props = {
  children: React$Node
};

export default function UXPinWrapper({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
