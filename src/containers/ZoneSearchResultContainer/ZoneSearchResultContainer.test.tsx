import React from "react";
import { render } from "@testing-library/react";
import ZoneSearchResultContainer from "./ZoneSearchResultContainer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../modules";
import { SearchData } from "../../components/ZoneInfo/SearchResultInfo";

describe("ZoneSearchResultContainer 컴포넌트", () => {
  describe("import 했을 시", () => {
    it("정상적으로 Load 되었다.", () => {
      expect(ZoneSearchResultContainer).not.toBeNull();
      expect(ZoneSearchResultContainer).not.toBeUndefined();
      expect(ZoneSearchResultContainer).toBeDefined();
    });
  });

  describe("사용 했을 때", () => {
    it("초기 설정값이 정상적으로 설정 되었다.", () => {
      const store = createStore(rootReducer);
      const { container } = render(
        <Provider store={store}>
          <ZoneSearchResultContainer></ZoneSearchResultContainer>
        </Provider>
      );
      console.log(container.getElementsByTagName("span").length);
      expect(container.innerHTML).toMatch(/개의/);
      expect(container.innerHTML).toMatch(/ZONE/);
      expect(container.innerHTML).toMatch(/검색되었습니다./);
      expect(container.innerHTML).toMatch(/리스트뷰 +/);
    });

    it("사용자 설정값이 정상적으로 설정 되었다.", () => {
      const store = createStore(rootReducer);
      const searchData: SearchData = {
        type: "회사",
        address: "서울특별시",
        maxTime: 20,
        minTime: 10,
        transferLimit: "1회 환승",
        transitMode: "버스",
      };
      const zoneData = {
        inputLocation: {
          x: 35.1798200522868,
          y: 129.075087492149,
        },
        data: [
          {
            id: 1,
            distance: 34,
            x: 35.16097773433585,
            y: 128.98767145753283,
            zoneCode: 46975,
            zoneName: "부산광역시 사상구 광장로104번길 15-6",
            polygon: [],
            rooms: [],
          },
        ],
      };

      const { container } = render(
        <Provider store={store}>
          <ZoneSearchResultContainer
            zonedata={zoneData}
            searchData={searchData}
          ></ZoneSearchResultContainer>
        </Provider>
      );

      expect(container.innerHTML).toMatch("회사");
      expect(container.innerHTML).toMatch("서울특별시");
      expect(container.innerHTML).toMatch("버스");
      expect(container.innerHTML).toMatch("10 - 20분");
      expect(container.innerHTML).toMatch("1회 환승");
      expect(container.innerHTML).toMatch(`href="#/zone/1/timecompare"`);
      expect(container.innerHTML).toMatch("ZONE 46975");
      expect(container.innerHTML).toMatch("부산광역시 사상구 광장로104번길 15-6");
      expect(container.innerHTML).toMatch("3.4km");
    });
  });
});
