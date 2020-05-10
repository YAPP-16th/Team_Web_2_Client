import React from "react";
import { render } from "@testing-library/react";
import Map from "./Map";

describe("map 컴포넌트", () => {
  describe("import 했을 시", () => {
    it("Map이 정상적으로 load 되었다.", () => {
      expect(Map).not.toBeNull();
      expect(Map).not.toBeUndefined();
      expect(Map).toBeDefined();
    });
  });

  describe("Map 컴포넌트를 사용 했을 때", () => {
    let parent = null;
    beforeEach(() => {
      parent = document.createElement("div");
      document.body.appendChild(parent);
    });

    afterEach(() => {
      document.body.removeChild(parent);
      parent.remove();
      parent = null;
    });

    it("Header에 script tag가 생성되었는 지를 확인한다.", () => {
      render(<Map />);
      const head = document.querySelector("head").innerHTML;
      expect(head).toMatch("https://openapi.map.naver.com/openapi/v3/maps.js");
    });

    it("NaverMap이 정상적으로 사용자에게 보여지고 있는지를 확인한다.", () => {
      const { container } = render(<Map />, {
        container: parent,
      });
      expect(container.innerHTML).not.toEqual("");
      expect(container.firstChild.id).toBe("map");
    });

    it("컴포넌트 초기값이 없는 경우 기본값 설정을 확인한다.", () => {
      const { container } = render(<Map />, {
        container: parent,
      });
      expect(container.innerHTML).not.toEqual("");
      expect(container.innerHTML).toMatch(/id="map"/i);
      expect(container.innerHTML).toMatch(/width="100%"/i);
      expect(container.innerHTML).toMatch(/height="500px"/i);
      expect(container.innerHTML).toMatch(/class/i);
      expect(container.firstChild.id).toBe("map");
      expect(container.firstChild.className).not.toEqual("");
    });
    it("설정한 값들이 컴포넌트에 적용되었는지 확인한다.", () => {
      const style = { width: "100px", height: "100px" };
      const { container } = render(<Map id="custom" style={style} />, {
        container: parent,
      });
      expect(container.innerHTML).not.toEqual("");
      expect(container.innerHTML).toMatch(/id="custom"/i);
      expect(container.innerHTML).toMatch(/width="100px"/i);
      expect(container.innerHTML).toMatch(/height="100px"/i);
      expect(container.innerHTML).toMatch(/class/i);
      expect(container.firstChild.id).toBe("custom");
      expect(container.firstChild.className).not.toEqual("");
    });
  });
});
