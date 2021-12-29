
import { useAppDispatch } from 'app/hooks';
import { store } from 'app/store';
import ImagesReviewerReducer, { handleApproveImageThunk } from './ImagesReviewer.slice';


describe('imagesReviewer feature', () => {

    it('should handle initial state', () => {
        expect(ImagesReviewerReducer(undefined, { type: 'unknown' })).toEqual({
            fetchedImgUrl: null,
            savedImgsUrls: [],
            rejectedImgsUrls: [],
        })
    })

    it('it should handle Approve Image', () => {
        store.dispatch(handleApproveImageThunk("dummyApprovedImgUrl"))
        expect(store.getState().imagesReviewer.savedImgsUrls.includes("dummyApprovedImgUrl")).toBe(true)
    })

    it('it should save Approved Image in localstorage', () => {
        store.dispatch(handleApproveImageThunk("dummyApprovedImgUrl"))
        expect(store.getState().imagesReviewer.savedImgsUrls.includes("dummyApprovedImgUrl")).toBe(true)
    })
    
})


