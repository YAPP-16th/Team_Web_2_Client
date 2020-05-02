import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TimeCompareContainer from './TimeCompareContainer';

describe("<TimeCompareContainer />", () => {
  it("우편주소 검색하기", () => {
    const utils = render(<TimeCompareContainer />);
  });
  it("현재 위치 가져오기 및 권한 취득", () => {
    const utils = render(<TimeCompareContainer />);
  });
  it("비교장소 추가하기", () => {
    const utils = render(<TimeCompareContainer />);
  });
  it("절약시간 보여주기 및 로딩 애니메이션 처리", () => {
    const utils = render(<TimeCompareContainer />);
  });
});