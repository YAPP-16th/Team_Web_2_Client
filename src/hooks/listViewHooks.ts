import { useSelector, useDispatch } from "react-redux";
import { useCallback } from 'react';
import { RootState } from '../modules'
import { toggleListView } from '../modules/listView'

const useListView = () => {
  const { toggled } = useSelector(
    (state: RootState) => state.listView
  );
  const dispatch = useDispatch();

  const toggle = useCallback(
    () => {
      return dispatch(toggleListView());
    },
    [dispatch]
  );

  return {
    toggled,
    toggle
  };
};

export default useListView;