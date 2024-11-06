import { createSlice } from '@reduxjs/toolkit'

export interface AppState {
  editMode: boolean
}

const initialState: AppState = {
  editMode: false,
}

export const appSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEditMode: (state: AppState, { payload }: { payload: boolean }) => {
      state.editMode = payload
    },
  },
})

export const { setEditMode } = appSlice.actions
