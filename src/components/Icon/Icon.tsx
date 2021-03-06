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
};

/** 아이콘을 보여주고 싶을 땐 `Icon` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 svg 형태로 아이콘을 보여주며, props 또는 스타일을 사용하여 아이콘의 색상과 크기를 정의 할 수 있습니다.
 *
 * 스타일로 모양새를 설정 할 때에는 `color`로 색상을 설정하고 `width`로 크기를 설정하세요.
 */

const Icon = ({ icon, color, size, className, onClick, testId, cursor = "default" }: IconProps) => {
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
  `;

  const SVGIcon = icons[icon];

  return (
    <SVGWrapper onClick={onClick} data-testid={testId}>
      <SVGIcon />
    </SVGWrapper>
  );
};

Icon.defaultProps = {
  size: "24px"
}

export default Icon;