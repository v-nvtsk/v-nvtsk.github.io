import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { AppState, appSlice } from './appSlice'

export interface StoreRootState {
  app: AppState
}

const appReducer = combineReducers({
  app: appSlice.reducer,
})

export const store = configureStore({
  reducer: appReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
})

export type AppDispatch = typeof store.dispatch
