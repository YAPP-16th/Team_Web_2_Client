import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Step1Container from "./Step1Container";
import Dialog from "../../components/Dialog/Dialog";
import SearchInputStep2Container from "../SearchInputStep2Container/Step2Container";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";


const DEFAULT_VALUES = {
  searchInputData: {
    address: '주소를 입력해 주세요',
    addressTag: 'tag',
  },
  setIsHover: () => {
    console.log("다음으로 색 바뀌는 테스트")
  }
};

describe("Step1Container", () => {
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
      const { searchInput1 } = render(
        <SearchInput1
          click={onClickLocationHandler}
        />
      )
    })

    // 다음으로 버튼 누르면, Redux 값이 바뀌면서 다음 페이지로 넘어간다.
    it("다음으로 버튼 눌렀을 때", () => {
      const history = createMemoryHistory();
      history.push("/searchInput/2");
      const utils = render(
        <Router history={history}>
          <SearchInputStep2Container />
        </Router>
      );

      // const goNext = utils.getByTestId('MoreItemButton');
      // fireEvent.click(goNext);
      // expect(history.location.pathname).toBe('/searchInput/2');
      // })

      it("해시태그 눌렀을 때", () => {
        const utils = render(
          <HashTag />
        );
      })
        .
        it("주소 입력창 눌렀을 때(Modal)", () => {
          render(
            <Dialog />
          )
        })
    })
  })