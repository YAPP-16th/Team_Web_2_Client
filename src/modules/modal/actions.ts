import { createAction } from "typesafe-actions";

// 액션 타입
export const SHOW_MODAL = "modal/SHOW_MODAL";
export const HIDE_MODAL = "modal/HIDE_MODAL";
export const CHANGE_CONTAINER_MODAL = "modal/CHANGE_CONTAINER_MODAL";

// 액션 생성 함수
export const showModal = createAction(
    SHOW_MODAL
)();
export const hideModal = createAction(
    HIDE_MODAL
)();
export const changeContainerModal = createAction(
    CHANGE_CONTAINER_MODAL
)<React.ReactNode | undefined>();
