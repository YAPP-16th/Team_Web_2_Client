import React from "react";
import { render } from "@testing-library/react";
import Step1Container from "./Step1Container";

const DEFAULT_VALUES = {
  searchInputData: {
    address: '주소를 입력해 주세요',
    addressTag: 'tag',
    maxTime: 0,
    minTime: 0,
    transferLimit: 100,
    transitMode: [],
    // setIsHover: 
  }
};

describe("Step1Container 컴포넌트", () => {
  describe("import 했을 시", () => {
    it("정상적으로 Load 되었다.", () => {
      expect(Step1Container).not.toBeNull();
      expect(Step1Container).not.toBeUndefined();
      expect(Step1Container).toBeDefined();
    });
  });

  describe("사용 했을 때", () => {
    it("사용자 설정값이 정상적으로 설정 되었다.", () => {
      const TAG_NAME = ["svg", "DIV", "BUTTON", "DIV"];
      const MATCH_STRING: string[] = [
        "loading-twinkle.svg",
        "icon-close.svg",
        "",
        "loadingSpinner",
      ];
      const { container } = render(
        <Step1Container
          setIsHover={DEFAULT_VALUES.setIsHover}
        />
      );

      expect(container.innerHTML).not.toEqual("");
      expect(container.innerHTML).toMatch(`id="` + DEFAULT_VALUES.id + `"`);

      for (let i = 0; i < container.children.length; i++) {
        const { children } = container.children[i];
        expect(container.children[i].tagName).toEqual("DIV");
        expect(container.children[i].children.length).toBe(4);

        for (let j = 0; j < children.length; j++) {
          expect(children[j].tagName).toEqual(TAG_NAME[j]);
          if (j === 1) {
            expect(children[j].children.length).toBe(7);
            const content = children[j].children as HTMLCollection;
            let idx = 0;
            const TEST_VALUES = [
              DEFAULT_VALUES.address,
              DEFAULT_VALUES.transitMode,
              `${DEFAULT_VALUES.minTime}분-${DEFAULT_VALUES.maxTime}분 이내`,
            ];

            for (let element of content) {
              if (element.tagName === "SPAN") {
                expect(element.innerHTML).toEqual(TEST_VALUES[idx]);
                idx++;
              }
            }
          } else {
            expect(children[j].innerHTML).toMatch(MATCH_STRING[j]);

            if (children[j].tagName === "BUTTON") {
              const Button = children[j] as HTMLElement;
              expect(Button.onclick).toBeDefined();
            }
          }
        }
      }
    });
  });
});
