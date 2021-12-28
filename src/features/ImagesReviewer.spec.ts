
import ImagesReviewerReducer, { ImagesReviewerState } from './ImagesReviewer.slice';


describe('imagesReviewer feature', () => {
    // const initialState: ImagesReviewerState = {
    //   value: 3,
    //   status: 'idle',
    // };

    //Basic test 
    it('should handle initial state', () => {
        expect(ImagesReviewerReducer(undefined, { type: 'unknown' })).toEqual({
            savedImgsUrls: [],
            rejectedImgsUrls: [],
        })
    })

    it('it should handle Fetch Image', () => {
        // Arrange
            //Arrange reducer  
            
        // Act
           
        //Assert 
            expect(localStorage.getItem(''))

        // 
    })

    it.todo('it should handle Approve Image')
    it.todo('it should handle Reject Image')



})



// const initialState: ImagesReviewerState = {
//     savedImgsUrls: [],
//     rejectedImgsUrls: ["DummyLink"],
//   }