import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useCallback } from "react";
import { RootState } from "../../modules";
import {
  showModal,
  hideModal,
  changeContainerModal,
} from "../../modules/modal";

const useModal = () => {
  const dispatch = useDispatch();
  const { bShow, container } = useSelector((state: RootState) => state.modal, shallowEqual);

  const openModal = useCallback(() => {
    return dispatch(showModal());
  }, [dispatch]);
  const closeModal = useCallback(() => {
    return dispatch(hideModal());
  }, [dispatch]);
  const setContainer = useCallback(
    (props: React.ReactNode | undefined) => {
      return dispatch(changeContainerModal(props));
    },
    [dispatch]
  );
  
  return {
    bShow,
    container,
    openModal,
    closeModal,
    setContainer,
  };
};

export default useModal;
