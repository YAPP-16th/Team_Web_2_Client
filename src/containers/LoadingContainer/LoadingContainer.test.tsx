import React from "react";
import { render } from "@testing-library/react";
import LoadingContainer from "./LoadingContainer";

const DEFAULT_VALUES = {
  id: "loadingContainer",
  address: "어드레스테스트",
  transitMode: "버스",
  minTime: 30,
  maxTime: 50,
  closeCallback: () => {
    console.log("기본 클릭 테스트");
  },
};

describe("Loading Spinner 컴포넌트", () => {
  describe("import 했을 시", () => {
    it("정상적으로 Load 되었다.", () => {
      expect(LoadingContainer).not.toBeNull();
      expect(LoadingContainer).not.toBeUndefined();
      expect(LoadingContainer).toBeDefined();
    });
  });

  describe("사용 했을 때", () => {
    it("사용자 설정값이 정상적으로 설정 되었다.", () => {
      const TAG_NAME = ["svg", "DIV", "BUTTON", "DIV"];
      const MATCH_STRING: string[] = [
        "loading-twinkle.svg",
        "loading-close.svg",
        "",
        "loadingSpinner",
      ];
      const { container } = render(
        <LoadingContainer
          address={DEFAULT_VALUES.address}
          transitMode={DEFAULT_VALUES.transitMode}
          minTime={DEFAULT_VALUES.minTime}
          maxTime={DEFAULT_VALUES.maxTime}
          closeCallback={DEFAULT_VALUES.closeCallback}
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

            if (children[j].tagName === "BUTTON")
            {
              const Button = children[j] as HTMLElement;
              expect(Button.onclick).toBeDefined();
            }
          }
        }
      }
    });
  });
});
