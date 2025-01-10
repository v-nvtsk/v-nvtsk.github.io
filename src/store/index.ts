import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { AppState, appSlice } from './slices/appSlice'
import { cvSlice, CVState } from './slices/cv-data.slice'

export interface StoreRootState {
  app: AppState
  cv: CVState
}

const appReducer = combineReducers({
  app: appSlice.reducer,
  cv: cvSlice.reducer,
})

export const store = configureStore({
  reducer: appReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
})

export type AppDispatch = typeof store.dispatch
