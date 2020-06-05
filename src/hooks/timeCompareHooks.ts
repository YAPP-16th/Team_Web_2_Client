import { useSelector, useDispatch } from "react-redux";
import { useCallback } from 'react';
import { RootState } from '../modules'
import { setUserLocation, setCompareLocation } from '../modules/timeCompare'

const useTimeCompare = () => {
  const { compareLocation, userLocation } = useSelector(
    (state: RootState) => state.timeCompare
  );
  const dispatch = useDispatch();

  const setLocation = useCallback(
    (mode: "userLocation" | "compareLocation", location: {lat: number, lng: number}) => {
      if (mode === 'userLocation') {
        return dispatch(setUserLocation(location));
      } else if (mode === "compareLocation") {
        return dispatch(setCompareLocation(location));
      } else {
        console.log('유효한 작업이 아닙니다')
        return;
      }
    },
    [dispatch]
  );

  return {
    compareLocation,
    userLocation,
    setLocation
  };
};

export default useTimeCompare;