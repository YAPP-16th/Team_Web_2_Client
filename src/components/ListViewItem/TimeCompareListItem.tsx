import React, { MouseEvent } from "react";
import styled from "styled-components";

// Components
import Icon, { IconType } from "../Icon/Icon";
import { Button } from "../Button/Button";
import { TimeCompareItem } from "../../utils/TimeCompare/functions";

// type
export type TimeCompareListItemProps = {
  icon: IconType;
  heading: string;
  savingTime: string | number;
  address: string;
  distanceFrom: string | number;
  distanceTo: string | number;
  className?: string;
  editMode?: boolean;
  content?: TimeCompareItem;
  editFunc?: (item: TimeCompareItem, notCompleted?: boolean) => Promise<void>;
};

const TimeCompareListItemWrapper = styled.div`
  border-radius: 8px;
  background-color: var(--ItemColor);
  padding: 19px 22px;
  position: relative;
`;

const HeadingAndIcon = styled.div`
  display: flex;
  align-items: center;
`;

const Heading = styled.h1`
  color: var(--LightTextColor);
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.8px;
  margin-left: 12px;
`;

const SavingTime = styled.span`
  color: var(--LightTextColor);
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.8px;
`;

const Address = styled.span`
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.29;
  letter-spacing: -0.62px;
  color: var(--DarkTextColor);
`;

const Distance = styled.span`
  color: var(--DarkTextColor);

  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.71px;
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// --- Edit Items

const EditableHeading = styled.input`
  position: relative;
  background-color: #00000000;
  border: none;
  color: var(--LightTextColor);
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.8px;
  margin-left: 12px;
  text-decoration: underline;
  outline: none;
  z-index: 1000;
`;

const EditButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EditCompleteButton = styled.a`
  color: var(--LightTextColor);
  cursor: pointer;
  transition: color 0.5s;
  &:hover {
    color: var(--PrimaryColor);
  }
`;

const TimeCompareListItem = ({
  icon,
  heading,
  savingTime,
  address,
  distanceFrom,
  distanceTo,
  className,
  content,
  editMode,
  editFunc,
}: TimeCompareListItemProps) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue) {
      heading = inputValue;
    }
    console.log(heading);
  };

  const onAddressRegisterHandler = (content?: TimeCompareItem) => {
    // 주소, location 은 여기서 변경
    // 현재는 테스트를 위해 수동으로 location과 주소를 할당합니다
    if (editFunc && content) {
      address = "서울 성동구 뚝섬로 273";
      content.heading = heading;
      content.address = address;
      content.location.lat = 37.5444;
      content.location.lng = 127.0374;
      editFunc(content, true);
    }
  };

  const onCompleteHandler = (event: MouseEvent) => {
    if (editFunc && content) {
      content.heading = heading;
      editFunc(content);
    }
  };

  return (
    <TimeCompareListItemWrapper className={className}>
      <ContentRow>
        <HeadingAndIcon>
          <Icon icon={icon} />
          {editMode ? (
            <EditableHeading
              defaultValue={heading}
              onChange={onChangeHandler}
              className="editable-heading"
            />
          ) : (
            <Heading>{heading}</Heading>
          )}
        </HeadingAndIcon>
        {!editMode && (
          <SavingTime>
            {savingTime >= 0 ? savingTime + "분 절약" : savingTime + "분"}
          </SavingTime>
        )}
      </ContentRow>
      {editMode ? (
        <>
          <Address>{address}</Address>
          <EditButtonsWrapper>
            <Button
              onClick={(event: MouseEvent) => onAddressRegisterHandler(content)}
            >
              위치설정
            </Button>
            <EditCompleteButton onClick={onCompleteHandler}>
              수정완료
            </EditCompleteButton>
          </EditButtonsWrapper>
        </>
      ) : (
        <ContentRow>
          <Address>{address}</Address>
          <Distance>
            {distanceFrom} -> {distanceTo}
          </Distance>
        </ContentRow>
      )}
    </TimeCompareListItemWrapper>
  );
};

TimeCompareListItem.defaultProps = {
  editMode: false,
};

export default TimeCompareListItem;
