import React from "react";
import { render } from "@testing-library/react";
import MenuFooterContainer from "./MenuFooterContainer";

const DEFAULT_VALUES = {
  logo: "icon-footer-logo.svg",
  text: [
    "찾아존",
    "Copyright findmyzone. All Right Reserved.",
    "이용약관",
    "운영정책",
    "개인정보처리방침",
    "운영 및 제휴 문의",
    "위치기반서비스",
    "Kakao 플러스친구",
  ],
};

describe("MenuFooterContainer", () => {
  describe("import 했을 시", () => {
    it("정상적으로 Load 되었다.", () => {
      expect(MenuFooterContainer).not.toBeNull();
      expect(MenuFooterContainer).not.toBeUndefined();
      expect(MenuFooterContainer).toBeDefined();
    });
  });

  describe("사용 했을 때", () => {
    it("초기값이 정상적으로 설정 되었다.", () => {
      const { container } = render(<MenuFooterContainer />);
      const svg = container.getElementsByTagName("svg")[0];
      
      expect(svg).toBeDefined();
      expect(svg.innerHTML).toEqual(DEFAULT_VALUES.logo);
      const spans = container.getElementsByTagName("span");
      for (let i = 0; i < spans.length; i++) {
        expect(spans[i].textContent).toMatch(DEFAULT_VALUES.text[i]);
      }
    });
  });
});
