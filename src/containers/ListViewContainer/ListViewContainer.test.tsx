import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListViewContainer from './ListViewContainer';

describe("<ListView />", () => {
  it("first test", () => {
    const utils = render(<ListViewContainer />);
    const toggleButton = utils.getByText("리스트뷰 +");
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveTextContent('리스트뷰 -');
  });
});