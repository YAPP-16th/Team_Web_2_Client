import React from "react";
import { render } from "@testing-library/react";
import Step1Container from "./Step1Container";
import Dialog from "../../components/Dialog/Dialog";

const DEFAULT_VALUES = {
  searchInputData: {
    address: '주소를 입력해 주세요',
    addressTag: 'tag',
    maxTime: 0,
    minTime: 0,
    transferLimit: 100,
    transitMode: [],
  },
  setIsHover: () => {
    console.log("다음으로 색 바뀌는 테스트")
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
      ];
      const { container } = render(
        <Step1Container
          setIsHover={DEFAULT_VALUES.setIsHover}
        />
      );
      const { dialog } = render(
        <Dialog
          className="pop_up"
          display={isOpen}
          click={onClickLocationHandler}
        />
      )
      const { zoneSearchPopUp } = render(
        <ZoneSearchPopUp
          close={onClickLocationHandler}
        />
      )
      const { searchInput1 } = render(
        <SearchInput1
          click={onClickLocationHandler}
        />
      )

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
              DEFAULT_VALUES.searchInputData.address,
              DEFAULT_VALUES.searchInputData.addressTag,
            ];

            for (let element of content) {
              if (element.tagName === "SPAN") {
                expect(element.innerHTML).toEqual(TEST_VALUES[idx]);
                idx++;
              }
            }
          } else {
            expect(children[j].innerHTML).toMatch(MATCH_STRING[j]);

            // 다음으로 버튼을 눌렀을 때 리덕스에 값이 변화했는지는 어떻게 확인할까요 ?.?
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
