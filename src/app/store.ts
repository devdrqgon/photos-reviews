import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import imagesReviewerReducer from 'features/ImagesReviewer.slice'

export const store = configureStore({
  reducer: {
    imagesReviewer: imagesReviewerReducer,
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;