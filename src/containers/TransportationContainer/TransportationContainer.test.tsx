import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TransportationContainer from './TransportationContainer';

describe("<TransportationContainer />", () => {
  it("이동수단 데이터 가져오기", () => {
    const utils = render(<TransportationContainer />);
  });
  it("동적 스크롤 기능", () => {
    const utils = render(<TransportationContainer />);
  });
});