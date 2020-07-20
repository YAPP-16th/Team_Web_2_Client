import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from '../modules';
import { getTransitsAsync } from '../modules/transit/actions';
import { TransitQuery } from '../api/transits';

const useTransit = () => {
  const { data, loading, error } = useSelector((state: RootState) => state.transit);

  const dispatch = useDispatch();

  const loadTransitsByQueries = useCallback((payload: TransitQuery) => {
    return dispatch(getTransitsAsync.request(payload));
  }, [dispatch])

  return {
    data,
    loading,
    error,
    loadTransitsByQueries
  }
}

export default useTransit;