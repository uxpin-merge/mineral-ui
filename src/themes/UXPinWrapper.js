import ThemeProvider from './ThemeProvider';
import { simulations } from 'glamor';
import React from 'react';

export default function UXPinWrapper({ children }) {
  simulations(true);
  return <ThemeProvider>{children}</ThemeProvider>;
}
