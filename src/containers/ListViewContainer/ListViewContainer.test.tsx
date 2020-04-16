import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListViewContainer from './ListViewContainer';

describe("<ListView />", () => {
  it("first test", () => {
    const utils = render(<ListViewContainer />);
    const toggleButton = utils.getByText("리스트뷰 +");
    fireEvent.click(toggleButton);
    // 기본적으로 상태 변화는 비동기이므로 findBy를 써야합니다.
    utils.findByText("리스트뷰 -")
  });
});