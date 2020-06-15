import React from "react";
import * as icons from "../../assets/svgs/icons";
import styled from "styled-components";

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[]; // 스토리에서 불러오기 위함

type IconProps = {
  /** 사용 할 아이콘 타입 */
  icon: IconType;
  /** 아이콘 색상 */
  color?: string;
  /** 아이콘 크기 */
  size: string | number;
  /** 따로 집어넣을 클래스 */
  className?: string;
  /** 클릭시 실행할 함수 */
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /** 테스트에 필요한 test-id */
  testId?: string;
  cursor?: string; // style curosr설정
  mobileIcon: IconType;
};

/** SearchInput 부분에서만 분기를 주기 위해 쓰이는 아이콘입니다.
 */

const Icon = ({ icon, color, size, className, onClick, testId, cursor, mobileIcon }: IconProps) => {

  const DEVICE_SIZE = {
    mobile: "425px",
    tablet: "768px",
    laptop: "1024px",
  };

  const SVGIcon = icons[icon];

  const SVGmobileIcon = icons[mobileIcon];

  const SVGWrapper = styled.div`
    height: ${typeof size === "string" ? size : size + "px"};
    svg {
      width: ${typeof size === "string" ? size : size + "px"};
      height: auto;
    }
    path {
      fill: ${color};
    }
    cursor: ${cursor};
    display: flex;
    justify-content: center;
    align-items: center;

    #normal {
      display: inline-flex;
    }

    #mobile {
      display: none;
    }
    @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
      svg {
        width: 10px;
        height: auto;
      }

      #mobile {
        display: inline-flex;
      }

      #normal {
        display: none;
      }
  }
  `;


  return (
    <SVGWrapper onClick={onClick} data-testid={testId}>
      <SVGIcon id="normal" />
      <SVGmobileIcon id="mobile" />
    </SVGWrapper>
  );
};

Icon.defaultProps = {
  size: "24px"
}

export default Icon;