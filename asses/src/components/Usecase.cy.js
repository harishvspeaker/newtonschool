import React from 'react'
import Usecase from './Usecase'

describe('MyComponent', () => {
  it('focuses the input when the button is clicked', () => {
    const { getByText, getByPlaceholderText } = render(<Usecase/>);

    const input = getByPlaceholderText('Enter your text');
    const button = getByText('Focus Input');

    act(() => {
      fireEvent.click(button);
    });

    expect(input).toHaveFocus();
  });
});
