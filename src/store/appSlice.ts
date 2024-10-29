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
    changeMode: (state: AppState) => {
      const searchparams = new URLSearchParams(window.location.search)
      state.editMode = (searchparams.get('edit') === 'true')
    },
  },
})
