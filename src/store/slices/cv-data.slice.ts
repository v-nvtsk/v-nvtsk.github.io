import { createSlice } from '@reduxjs/toolkit'
import { CVData } from '../../types'
import { fetchJSON } from '../../service/fetch-json'

export type CVState = CVData

const initialState: CVState = await fetchJSON() as CVState

export const cvSlice = createSlice({
  name: 'cv',
  initialState,
  reducers: {
    updateData: (state, action) => ({ ...state, ...action.payload }),

  },
})

export const { updateData } = cvSlice.actions
