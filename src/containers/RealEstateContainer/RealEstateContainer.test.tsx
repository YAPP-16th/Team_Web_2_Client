import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RealEstateContainer from './RealEstateContainer';

describe("<RealEstateContainer />", () => {
  it("매물 데이터 가져오기", () => {
    const utils = render(<RealEstateContainer />);
  });
  it("동적 스크롤 기능", () => {
    const utils = render(<RealEstateContainer />);
  });
});