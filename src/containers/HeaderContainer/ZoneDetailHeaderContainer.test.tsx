import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ZoneDetailHeaderContainer from './ZoneDetailHeaderContainer';

describe("<ZoneDetailHeaderContainer />", () => {
  it("홈으로 이동하기(랜딩 페이지)", () => {
    const utils = render(<ZoneDetailHeaderContainer />);
  });
  it("검색 페이지로 이동", () => {
    const utils = render(<ZoneDetailHeaderContainer />);
  });
  it("메인메뉴 모달창 show/hide", () => {
    const utils = render(<ZoneDetailHeaderContainer />);
  });
  it("특정 페이지(검색, ZONE상세 페이지)에서 구성 변경", () => {
    const utils = render(<ZoneDetailHeaderContainer />);
  });
});

