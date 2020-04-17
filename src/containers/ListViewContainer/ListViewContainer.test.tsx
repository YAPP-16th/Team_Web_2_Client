import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListViewContainer from './ListViewContainer';

describe("<ListViewContainer />", () => {
  it("ZONE 선택 시 상세페이지로 이동", () => {
    const utils = render(<ListViewContainer />);
  });
  it("드래그 동작에 의한 애니메이션 처리", () => {
    const utils = render(<ListViewContainer />);
  });
});