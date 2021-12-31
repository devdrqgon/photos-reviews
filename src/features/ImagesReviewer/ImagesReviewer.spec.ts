
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

    
})


