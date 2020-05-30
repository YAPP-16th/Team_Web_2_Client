import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from '../modules';
import { getPlacesAsync } from '../modules/place/actions';

const usePlace = () => {
  const { data, loading, error } = useSelector((state: RootState) => state.place);

  const dispatch = useDispatch();

  const loadPlacesByZoneId = useCallback((payload: number) => {
    return dispatch(getPlacesAsync.request(payload));
  }, [dispatch]);

  return {
    data,
    loading,
    error,
    loadPlacesByZoneId
  }
}

export default usePlace;