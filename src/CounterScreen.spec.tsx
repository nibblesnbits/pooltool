import 'react-native';
import '@testing-library/jest-native';
import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import CounterScreen from './CounterScreen';
import { Provider as PaperProvider } from 'react-native-paper';

describe('CounterScreen', () => {
  it('adds a counter when the FAB is pressed', () => {
    const { getByTestId } = render(
      <PaperProvider>
        <CounterScreen />
      </PaperProvider>
    );
    const button = getByTestId('FAB');
    expect(getByTestId(`Counter__1`)).toBeOnTheScreen();
    fireEvent(button, 'press');
    expect(getByTestId(`Counter__2`)).toBeOnTheScreen();
  });

  it('removes a counter when the FAB is pressed', () => {
    const { getByTestId } = render(
      <PaperProvider>
        <CounterScreen />
      </PaperProvider>
    );
    const counter = getByTestId(`Counter__1`);
    const button = getByTestId('Counter__1_delete');
    expect(counter).toBeOnTheScreen();
    fireEvent(button, 'press');
    expect(counter).not.toBeOnTheScreen();
  });

  // TODO: test title editing
});
