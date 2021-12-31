import Footer from './Footer.styled'
import Img from 'components/layouts/ImgContainer'
import ButtonBase from 'components/ui-lib/ButtonBase'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { fetchedImgUrl, FetchImgThunk, initSavedImgsListFromLocalStorage, handleApproveImageThunk, handleRejectImageThunk } from 'features/ImagesReviewer.slice'
import styled from 'styled-components'
import RejectButton from 'components/ui-lib/RejectButton'
import ApproveButton from 'components/ui-lib/ApproveButton'

const ImagesNavigator = () => {
  const dispatch = useAppDispatch();
  const _fetchedImgUrl = useAppSelector(fetchedImgUrl)

  const handleApproveImage = () => {
    dispatch(handleApproveImageThunk(_fetchedImgUrl!))
  }

  const handleRejectImage = () => {
    dispatch(handleRejectImageThunk(_fetchedImgUrl!))
  }



  return (
    <Footer>
      {_fetchedImgUrl ?
        <>
          <RejectButton onClick={handleRejectImage} >
            <span className="material-icons">
              close
            </span>
          </RejectButton>
          <ApproveButton onClick={handleApproveImage}>
            <span className="material-icons">
              done
            </span>
          </ApproveButton>
        </>
        :
        <>
          <p> Click the + in order to get the images recommendations </p>
        </>

      }
    </Footer>
  )
}

const ButtonsContainer = styled.div`
  display: flex,
  width: 100%;
  justify-content: space-around;
  backgroun
`
export default ImagesNavigator
