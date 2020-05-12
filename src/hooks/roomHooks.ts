import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from '../modules';
import { getRoomsAsync } from '../modules/room/actions';

const useRoom = () => {
  const { data, loading, error } = useSelector((state: RootState) => state.room);

  const dispatch = useDispatch();

  const loadRoomsByZoneId = useCallback((payload: number) => {
    return dispatch(getRoomsAsync.request(payload));
  }, [dispatch]);

  return {
    data,
    loading,
    error,
    loadRoomsByZoneId
  }
}

export default useRoom;