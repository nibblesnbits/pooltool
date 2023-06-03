/* istanbul ignore file */
import 'react-native';
import '@testing-library/jest-native';
import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';

import Counter from './Counter';
import { Provider as PaperProvider } from 'react-native-paper';

describe('Counter', () => {
  it('renders without error', () => {
    render(
      <PaperProvider>
        <Counter deleteHandler={() => {}} testID="Counter" />
      </PaperProvider>
    );
    expect(screen.getByTestId('Counter')).toBeDefined();
  });

  it('counts up when plus is clicked', () => {
    const { getByTestId } = render(
      <PaperProvider>
        <Counter deleteHandler={() => {}} testID="Counter" />
      </PaperProvider>
    );
    const button = getByTestId('Counter_plus');
    const count = getByTestId('Counter_count');
    expect(count).toHaveTextContent('0');
    fireEvent(button, 'press');
    expect(count).toHaveTextContent('1');
  });

  it('counts down when minus is clicked', () => {
    const { getByTestId } = render(
      <PaperProvider>
        <Counter deleteHandler={() => {}} testID="Counter" />
      </PaperProvider>
    );
    const plus = getByTestId('Counter_plus');
    const minus = getByTestId('Counter_minus');
    const count = getByTestId('Counter_count');
    expect(count).toHaveTextContent('0');
    fireEvent(plus, 'press');
    expect(count).toHaveTextContent('1');
    fireEvent(minus, 'press');
    expect(count).toHaveTextContent('0');
  });

  it('disables minus when count is zero', () => {
    const { getByTestId } = render(
      <PaperProvider>
        <Counter deleteHandler={() => {}} testID="Counter" />
      </PaperProvider>
    );
    const minus = getByTestId('Counter_minus');
    const count = getByTestId('Counter_count');
    expect(minus).toBeDisabled();
    expect(count).toHaveTextContent('0');
    fireEvent(minus, 'press');
    expect(count).toHaveTextContent('0');
  });

  it('calls deleteHandler when delete button is pressed', () => {
    const deleteHandler = jest.fn();
    const { getByTestId } = render(
      <PaperProvider>
        <Counter deleteHandler={deleteHandler} testID="Counter" />
      </PaperProvider>
    );
    const button = getByTestId('Counter_delete');
    fireEvent(button, 'press');
    expect(deleteHandler).toHaveBeenCalled();
  });
});
