import { AsyncThunkPayloadCreator, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from 'app/store';
import axios from 'axios';

export interface ImagesReviewerState {
    fetchedImgUrl: string | null
    savedImgsUrls: string[]
    rejectedImgsUrls: string[]
}

const initialState: ImagesReviewerState = {
    fetchedImgUrl: null,
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
        setFetchedImgUrl: (state, action) => {
            state.fetchedImgUrl = action.payload
        }
    }
})



export default imagesReviewerSlice.reducer;


//Selectors 
export const fetchedImgUrl = (state: RootState) => state.imagesReviewer.fetchedImgUrl
export const savedImgsUrls = (state: RootState) => state.imagesReviewer.savedImgsUrls
export const rejectedImgsUrls = (state: RootState) => state.imagesReviewer.rejectedImgsUrls

const getRandomImage = async () => {
    return (await axios.get('https://api.unsplash.com/photos/random?client_id=S00f6b0q_JEjib3qrC4Bcbnt6sLzBQHxPt-XcmFEhhw')).data.urls.small as string
}


const fetchCallback: AsyncThunkPayloadCreator<void, void, { state: RootState }> =
    async (_, { dispatch, getState }) => {
        const _imgUrl = await getRandomImage()
        if (getState().imagesReviewer.rejectedImgsUrls.includes(_imgUrl)) {
            FetchImgThunk()
        } else {
            dispatch(imagesReviewerSlice.actions.setFetchedImgUrl(_imgUrl))
        }
    }
//https://redux-toolkit.js.org/api/createAsyncThunk
export const FetchImgThunk = createAsyncThunk('imagesReviewer/handleFetchImgUrlThunk', fetchCallback)

export const handleApproveImageThunk = (_newImgUrl: string): AppThunk<void> => (
    dispatch
) => {
    setLocalStorageItem('_savedImages', _newImgUrl)
    dispatch(imagesReviewerSlice.actions.addSavedImgUrl(_newImgUrl))
    dispatch(FetchImgThunk())
}



export const handleRejectImageThunk = (_newImgUrl: string): AppThunk<void> => (
    dispatch
) => {
    setLocalStorageItem('_rejectedImages', _newImgUrl)
    dispatch(imagesReviewerSlice.actions.addRejectedImgUrl(_newImgUrl))
    dispatch(FetchImgThunk())
}



export const initSavedImgsListFromLocalStorage = (): AppThunk => (
    dispatch
) => {
    const retrivedData = localStorage.getItem('_savedImages')
    if (retrivedData) {
        dispatch(imagesReviewerSlice.actions.initSavedImgs(JSON.parse(retrivedData) as string[]))
    }
}
export const initRejectedImgsListFromLocalStorage = (): AppThunk<void> => (
    dispatch
) => {
    const retrivedData = localStorage.getItem('_rejectedImages')
    if (retrivedData) {
        dispatch(imagesReviewerSlice.actions.initRejectedImgs(JSON.parse(retrivedData) as string[]))
    }
}

const setLocalStorageItem = (_key: string, _value: string) => {
    const retrieved = localStorage.getItem(_key)
    if (retrieved) {
        let parsed = JSON.parse(retrieved)
        parsed.push(_value)
        localStorage.setItem(_key, JSON.stringify(parsed))
    }
    else {
        localStorage.setItem(_key, JSON.stringify([_value]))
    }
}