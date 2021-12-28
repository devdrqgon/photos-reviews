import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from 'app/store';

export interface ImagesReviewerState {
    savedImgsUrls: string[]
    rejectedImgsUrls: string[]
}

const initialState: ImagesReviewerState = {
    savedImgsUrls: [],
    rejectedImgsUrls: []
}


export const imagesReviewerSlice = createSlice({
    name: 'imagesReviewer',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        initSavedImgs: (state, action: PayloadAction<string[]>) => {
            state.savedImgsUrls = action.payload
        },
        addSavedImgUrl: (state, action: PayloadAction<string>) => {
            state.savedImgsUrls.push(action.payload)
        },
        initRejectedImgs: (state, action: PayloadAction<string[]>) => {
            state.rejectedImgsUrls = action.payload
        },
        addRejectedImgUrl: (state, action: PayloadAction<string>) => {
            state.rejectedImgsUrls.push(action.payload)
        },

    }
})


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const savedImgsUrls = (state: RootState) => state.imagesReviewer.savedImgsUrls
export const rejectedImgsUrls = (state: RootState) => state.imagesReviewer.rejectedImgsUrls

export const _initSavedImgs = (): AppThunk => (
    dispatch
) => {
    const retrivedData = localStorage.getItem('_savedImages')
    if (retrivedData) {
        dispatch(imagesReviewerSlice.actions.initSavedImgs(JSON.parse(retrivedData) as string[]))
    }
}

export const _addImgUrlToSavedImgsList = (_newImgUrl: string): AppThunk => (
    dispatch
) => {
    udpateLocalStorageSavedImgs(_newImgUrl)
    dispatch(imagesReviewerSlice.actions.addSavedImgUrl(_newImgUrl))
}

const udpateLocalStorageSavedImgs = (_newImgUrl: string) => {
    const retrieved = localStorage.getItem('_savedImages')
    if (retrieved) {
        let _localStorageSavedImgs = JSON.parse(retrieved)
        _localStorageSavedImgs.push(_newImgUrl)
        localStorage.setItem("_savedImages", JSON.stringify(_localStorageSavedImgs))
    }
    else {
        localStorage.setItem("_savedImages", JSON.stringify([_newImgUrl]))
    }

}


export const _initRejectedImgs = (): AppThunk => (
    dispatch
) => {
    const retrivedData = localStorage.getItem('_rejectedImages')
    if (retrivedData) {
        dispatch(imagesReviewerSlice.actions.initRejectedImgs(JSON.parse(retrivedData) as string[]))
    }
}

export const _addImgUrlToRejectedImgsList = (_newImgUrl: string): AppThunk => (
    dispatch
) => {
    udpateLocalStorageRejectedImgs(_newImgUrl)
    dispatch(imagesReviewerSlice.actions.addRejectedImgUrl(_newImgUrl))
}

const udpateLocalStorageRejectedImgs = (_newImgUrl: string) => {
    const retrieved = localStorage.getItem('_rejectedImages')
    if (retrieved) {
        let _localStorageRejectedImgs = JSON.parse(retrieved)
        _localStorageRejectedImgs.push(_newImgUrl)
        localStorage.setItem("_rejectedImages", JSON.stringify(_localStorageRejectedImgs))
    }
    else {
        localStorage.setItem("_rejectedImages", JSON.stringify([_newImgUrl]))
    }
}

export default imagesReviewerSlice.reducer;
