import { createSlice } from '@reduxjs/toolkit'
import { CVData } from '../../types'

export interface CVState extends CVData {
  isLoading: boolean
}

const initialState: CVState = {
  isLoading: true,
} as CVState

export const cvSlice = createSlice({
  name: 'cv',
  initialState,
  reducers: {
    updateData: (state, action) => ({ ...state, ...action.payload }),

  },
})

export const { updateData } = cvSlice.actions
