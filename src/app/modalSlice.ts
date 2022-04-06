import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface ModalState {
  isModalOpen: boolean;
}

const initialState: ModalState = {
  isModalOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setIsModalopen: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { setIsModalopen } = modalSlice.actions;

export const selectModal = (state: RootState): ModalState["isModalOpen"] =>
  state.modal.isModalOpen;

export default modalSlice.reducer;
