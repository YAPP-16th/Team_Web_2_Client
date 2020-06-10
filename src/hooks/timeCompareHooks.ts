import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { RootState } from "../modules";
import {
  setUserLocation,
  setCompareLocation,
  setUserAddress,
  setCompareItemAddress,
  setSetterMode,
  setSetterTarget,
  setCompareItemContents  
} from "../modules/timeCompare";

import { TimeCompareItem } from "../utils/TimeCompare/functions";

const useTimeCompare = () => {
  const {
    compareLocation,
    userLocation,
    userAddress,
    compareItemAddress,
    setterMode,
    setterTarget,
    compareItemContents
  } = useSelector((state: RootState) => state.timeCompare);
  const dispatch = useDispatch();

  const setAddress = useCallback(
    (mode: "userAddress" | "compareItemAddress", address: string) => {
      if (mode === "userAddress") {
        return dispatch(setUserAddress(address));
      } else if (mode === "compareItemAddress") {
        return dispatch(setCompareItemAddress(address));
      }
    },
    [dispatch]
  );

  const setLocation = useCallback(
    (
      mode: "userLocation" | "compareLocation",
      location: { lat: number; lng: number }
    ) => {
      if (mode === "userLocation") {
        return dispatch(setUserLocation(location));
      } else if (mode === "compareLocation") {
        return dispatch(setCompareLocation(location));
      } else {
        console.log("유효한 작업이 아닙니다");
        return;
      }
    },
    [dispatch]
  );

  const setSetterModeFunc = useCallback((payload: boolean) => {
    return dispatch(setSetterMode(payload));
  }, [dispatch]);

  const setSetterTargetFunc = useCallback((payload: "userAddress" | "compareItemAddress") => {
    return dispatch(setSetterTarget(payload));
  }, [dispatch]);

  const setCompareItemContentsFunc = useCallback((payload: TimeCompareItem[]) => {
    return dispatch(setCompareItemContents(payload));
  }, [dispatch]);

  return {
    compareLocation,
    userAddress,
    userLocation,
    setterMode,
    compareItemAddress,
    setterTarget,
    compareItemContents,
    setLocation,
    setAddress,
    setSetterModeFunc,
    setSetterTargetFunc,
    setCompareItemContentsFunc
  };
};

export default useTimeCompare;
