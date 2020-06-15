import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import { Button } from "../../components/Button/Button";
import TimeCompareListItem, {
  TimeCompareListItemProps,
} from "../../components/ListViewItem/TimeCompareListItem";
import LoadingDots from "../../components/Loading/LoadingDots";
import ZoneSearchPopUp from "../../components/SearchInputItem/SearchInputStep1/ZoneSearchPopup";
import Dialog from "../../components/Dialog/Dialog";

// Utils
import {
  setDefaultTimeCompareItem,
  setTimeCompareItems,
  getTimeCompareItems,
  TimeCompareItem,
  timeCompare,
} from "../../utils/TimeCompare/functions";

// Hooks
import useTimeCompare from "../../hooks/timeCompareHooks";

// API
import { getCoordinates } from "../../api/coordinates";

// Data Types
type TimeCompareContainerProps = {
  currentZoneId: number;
};

const TimeCompareContainerWrapper = styled.div`
  background-color: var(--BackgroundColor);
  padding: 30px 20px;
  @media screen and (min-width: 1060px) {
    width: 1120px;
    margin: auto;
  }
`;

const TextSectionWrapper = styled.div`
  @media screen and (min-width: 1060px) {
    margin-top: 80px;
  }
`;

const BoldText = styled.h1`
  color: var(--LightTextColor);
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.98px;

  @media screen and (min-width: 1060px) {
    font-size: 32px;
  }
`;

const StartPositionSelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 33px;

  @media screen and (min-width: 1060px) {
    justify-content: flex-end;
    position: relative;
    top: -40px;
  }
`;

const PlainText = styled.h2`
  color: var(--DarkTextColor);
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.29;
  letter-spacing: -0.62px;

  @media screen and (min-width: 1060px) {
    margin-right: 34px;
  }
`;

const TimeCompareList = styled.div`
  > div {
    margin-bottom: 12px;
    > a {
      transition: all 0.5s;
      &:hover {
        background-color: var(--ItemHoverColor);
      }
      &:active {
        opacity: 0.4;
      }
      &:focus {
        .icons {
          display: flex;
        }
      }
    }
    &:focus-within {
    }
  }

  @media screen and (min-width: 1060px) {
    display: grid;
    grid-template-columns: repeat(4, minmax(250px, 1fr));
    grid-gap: 18px;

    .timecompare-item {
      height: 270px;
      > :nth-child(1) {
        flex-direction: column;
        > :nth-child(1) {
          align-self: flex-start;
        }
        > :nth-child(2) {
          position: absolute;
          bottom: 10px;
          font-size: 30px;
          align-self: flex-end;
        }
      }
      > :nth-child(2) {
        position: relative;
        top: 0px;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`;

const ItemAddButton = styled.a`
  cursor: pointer;
  display: block;
  background: none;
  width: 100%;
  padding: 15px 22px;
  border-radius: 8px;
  text-align: left;
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.71px;
  border: 2px solid var(--ItemColor);
  color: var(--DarkTextColor);
  margin-top: 12px;
  transition: all 0.5s;

  &:hover {
    border-color: var(--LightItemColor);
    color: var(--LightTextColor);
    opacity: 0.5;
  }

  @media screen and (min-width: 1060px) {
    margin-top: 0px;
    font-size: 22px;
    padding: 33px 37px;
    height: 270px;
  }
`;

const TimeCompareContainer = ({ currentZoneId }: TimeCompareContainerProps) => {
  const [timeCompareContents, setTimeCompareContents] = useState<
    TimeCompareItem[]
  >([]);

  // TimeCompare Hooks
  const timeCompareHook = useTimeCompare();

  useEffect(() => {
    let timeCompareItems = getTimeCompareItems();

    if (timeCompareItems === null) {
      if (timeCompareHook.userAddress !== "주소를 설정해주세요") {
        setDefaultTimeCompareItem(
          currentZoneId,
          timeCompareHook.compareLocation
        )
          .then((results) => {
            setTimeCompareContents(results);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      if (timeCompareHook.userAddress !== "주소를 설정해주세요") {
        setTimeCompareContents(timeCompareItems);
      }
    }
  }, []);

  const updateTimeCompareItemHandler = async (
    item: TimeCompareItem,
    notCompleted?: boolean
  ) => {
    if (notCompleted) {
      timeCompareHook.setSetterTargetFunc("compareItemAddress");
      timeCompareHook.setSetterModeFunc(true);
    }
    const processed = [...timeCompareContents];
    const targetCount = processed.reduce((a, x) => {
      let matched = a;
      if (x.heading === item.heading && x.address === item.address) {
        matched += 1;
      }
      return matched;
    }, 0);
    if (targetCount !== 1) {
      // 중복되는 주소와 제목을 가진 아이템이 있거나, 해당하는 주소와 제목의 아이템이 없음
      alert("중복되는 이름과 주소의 아이템이 있습니다");
    } else {
      const targetIndex = processed.findIndex(
        (x) => x.heading === item.heading && x.address === item.address
      );
      const compareSuccess = await timeCompare(
        item,
        currentZoneId,
        timeCompareHook.compareLocation
      );
      if (compareSuccess) {
        item.editMode = false;
        if (notCompleted) {
          item.editMode = true;
        }
        processed.splice(targetIndex, 1, item);
        setTimeCompareContents(processed);
        setTimeCompareItems(processed);
      }
    }
  };

  const deleteTimeCompareItemHandler = async (item: TimeCompareItem) => {
    const processed = [...timeCompareContents];
    const targetIndex = processed.findIndex(
      (x) => x.heading === item.heading && x.address === item.address
    );
    processed.splice(targetIndex, 1);
    setTimeCompareContents(processed);
    setTimeCompareItems(processed);
  };

  const addTimeCompareItemHandler = async () => {
    const processed = [...timeCompareContents];
    const defaultName = "이름을 입력해주세요";
    const defaultAddress = "주소를 입력해주세요";
    const emptyItem = {
      icon: "company" as const,
      heading: defaultName,
      savingTime: 0,
      address: defaultAddress,
      distanceFrom: "0km",
      distanceTo: "0km",
      editMode: true,
      location: {
        lat: 0,
        lng: 0,
      },
    };
    processed.push(emptyItem);
    setTimeCompareContents(processed);
    console.log("processed!", processed);
    setTimeCompareItems(processed);
  };

  const editModeTriggerHandler = (item: TimeCompareItem) => {
    const processed = [...timeCompareContents];
    const targetIndex = processed.findIndex(
      (x) => x.heading === item.heading && x.address === item.address
    );
    if (targetIndex !== -1) {
      processed[targetIndex].editMode = true;
    }
    setTimeCompareContents(processed);
  };

  // Dynamically Generated Elements

  const timeCompareList = timeCompareContents.map((content) => {
    return (
      <div key={content.heading}>
        <TimeCompareListItem
          className="timecompare-item"
          icon={content.icon}
          heading={content.heading}
          savingTime={content.savingTime}
          address={content.address}
          distanceFrom={content.distanceFrom}
          distanceTo={content.distanceTo}
          editMode={content.editMode}
          content={content}
          editFunc={updateTimeCompareItemHandler}
          deleteFunc={deleteTimeCompareItemHandler}
          editModeFunc={editModeTriggerHandler}
        />
      </div>
    );
  });

  const setUserLocationHandler = async (address: string) => {
    const coordinates = await getCoordinates(address);
    timeCompareHook.setAddress("userAddress", address);
    timeCompareHook.setLocation("compareLocation", {
      lat: coordinates.y,
      lng: coordinates.x,
    });
  };

  const setCompareItemLocationHandler = async (address: string) => {
    timeCompareHook.setAddress("compareItemAddress", address);
    timeCompareHook.setSetterTargetFunc("userAddress");
  };

  const onClickLocationHandler = () => {
    return timeCompareHook.setSetterModeFunc(!timeCompareHook.setterMode);
  };

  return (
    <>
      {timeCompareHook.setterMode ? (
        <Dialog
          className="pop_up"
          show={timeCompareHook.setterMode}
          click={onClickLocationHandler}
        >
          <ZoneSearchPopUp
            close={() => {
              onClickLocationHandler();
            }}
            //@ts-ignore
            setLocation={(address: string) => {
              if (timeCompareHook.setterTarget === "userAddress") {
                setUserLocationHandler(address);
              } else if (
                timeCompareHook.setterTarget === "compareItemAddress"
              ) {
                setCompareItemLocationHandler(address);
              }
            }}
          />
        </Dialog>
      ) : (
        <TimeCompareContainerWrapper>
          <TextSectionWrapper>
            <BoldText>지금보다</BoldText>
            <BoldText>얼마나 많은 시간이</BoldText>
            <BoldText>절약될까요?</BoldText>
          </TextSectionWrapper>

          <StartPositionSelectWrapper>
            <PlainText>{timeCompareHook.userAddress}</PlainText>
            <Button onClick={onClickLocationHandler}>수정</Button>
          </StartPositionSelectWrapper>
          <TimeCompareList>
            {timeCompareHook.userAddress === "주소를 설정해주세요" && (
              <p
                style={{
                  color: "white",
                }}
              >
                주소가 설정되지 않았거나 추가할 아이템이 없습니다.
              </p>
            )}
            {timeCompareHook.userAddress !== "주소를 설정해주세요" &&
              timeCompareList.length === 0 && (
                <LoadingDots color="white" size="15px" />
              )}
            {timeCompareList.length !== 0 && timeCompareList}
            <ItemAddButton
              style={{
                display:
                  timeCompareHook.userAddress === "주소를 설정해주세요"
                    ? "none"
                    : "block",
              }}
              onClick={addTimeCompareItemHandler}
            >
              + 추가하기
            </ItemAddButton>
          </TimeCompareList>
        </TimeCompareContainerWrapper>
      )}
    </>
  );
};

export default TimeCompareContainer;
