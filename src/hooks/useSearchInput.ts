import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { RootState } from "../modules";
import {
  setSearchInput,
  goNextSearchStep,
  goPrevSearchStep,
} from "../modules/searchInput/actions";
import { SearchInputData } from "../modules/searchInput/types";

const useSearchInput = () => {
  const { searchInputData } = useSelector(
    (state: RootState) => state.searchInput
  );

  const dispatch = useDispatch();

  const setSearchInputData = useCallback(
    (payload: SearchInputData) => dispatch(setSearchInput(payload)),
    [dispatch]
  );
  const moveSearchStep = useCallback(
    (mode: "next" | "prev") => {
      if (mode === "next") {
        dispatch(goNextSearchStep());
      } else {
        dispatch(goPrevSearchStep());
      }
    },
    [dispatch]
  );

  return {
    searchInputData,
    setSearchInputData,
    moveSearchStep,
  };
};

export default useSearchInput;
