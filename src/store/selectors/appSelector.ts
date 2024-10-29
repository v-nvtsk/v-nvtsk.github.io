import { createSelector } from '@reduxjs/toolkit'
import { StoreRootState } from '..'

export const appSelector = createSelector(
  (state: StoreRootState) => state.app,
  app => app,
)
