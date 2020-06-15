import React, { MouseEvent } from 'react';
import styled from 'styled-components';

// Components
import Icon, { IconType } from '../Icon/Icon';
import { Button } from '../Button/Button';
import { TimeCompareItem } from '../../utils/TimeCompare/functions';

<<<<<<< HEAD
import useTimeCompare from '../../hooks/timeCompareHooks';
import { getCoordinates } from '../../api/coordinates';
=======
import useTimeCompare from "../../hooks/timeCompareHooks";
import { getCoordinates } from "../../api/coordinates";
>>>>>>> 60a1d9d... 시간비교 기능 구현 완료

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
  editModeFunc?: (item: TimeCompareItem) => void;
  content?: TimeCompareItem;
  editFunc?: (item: TimeCompareItem, notCompleted?: boolean) => Promise<void>;
  deleteFunc?: (item: TimeCompareItem) => void;
};

const TimeCompareListItemWrapper = styled.a`
  cursor: pointer;
  display: block;
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

const EditIconWrapper = styled.div<{ right?: string; top?: string }>`
  cursor: pointer;
  display: none;
  position: absolute;
  top: ${({ top }) => (top ? top : '')};
  right: ${({ right }) => (right ? right : '')};
  border-radius: 50%;
  background-color: white;
  padding: 3px;
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
  deleteFunc,
  editModeFunc,
}: TimeCompareListItemProps) => {
  // Handlers
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue) {
      heading = inputValue;
    }
  };

  const timeCompareHook = useTimeCompare();

  const onAddressRegisterHandler = (content?: TimeCompareItem) => {
    if (editFunc && content) {
      content.address = '주소 등록 완료';
      editFunc(content, true);
    }
  };

  const onCompleteHandler = async (event: MouseEvent) => {
    if (editFunc && content) {
      content.heading = heading;
      content.address = timeCompareHook.compareItemAddress;
      const coordinates = await getCoordinates(
        timeCompareHook.compareItemAddress
      );
      content.location.lat = coordinates.y;
      content.location.lng = coordinates.x;
      editFunc(content);
    }
  };

  const UpdateIcon = () => (
    <EditIconWrapper
      right="-11px"
      top="-11px"
      className="icons"
      onClick={(event: MouseEvent) =>
        editModeFunc && content && editModeFunc(content)
      }
    >
      <Icon icon="edit" size="18px" color="var(--BackgroundColor)" />
    </EditIconWrapper>
  );
  const DeleteIcon = () => (
    <EditIconWrapper
      right="-11px"
      top="20px"
      className="icons"
      onClick={(event: MouseEvent) =>
        deleteFunc && content && deleteFunc(content)
      }
    >
      <Icon icon="delete" size="18px" color="var(--BackgroundColor)" />
    </EditIconWrapper>
  );

  return (
    <TimeCompareListItemWrapper
      className={className}
      href="#"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
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
            {savingTime >= 0 ? savingTime + '분 절약' : savingTime + '분'}
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
        <>
          <ContentRow>
            <Address>{address}</Address>
            <Distance>
              {distanceFrom} -> {distanceTo}
            </Distance>
          </ContentRow>
          <UpdateIcon />
          <DeleteIcon />
        </>
      )}
    </TimeCompareListItemWrapper>
  );
};

TimeCompareListItem.defaultProps = {
  editMode: false,
};

export default TimeCompareListItem;
