import ImagesNavigatorContainer from './ImagesNavigator.styled'
import imgBackground from "assets/imgBackground.png"
import ImgContainer from 'components/layouts/ImgContainer'
import ButtonBase from 'components/ui-lib/ButtonBase'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { fetchedImgUrl, handleFetchImgUrlThunk, initSavedImgsListFromLocalStorage, handleApproveImageThunk, handleRejectImageThunk } from 'features/ImagesReviewer.slice'

const ImagesNavigator = () => {
  const dispatch = useAppDispatch();
  const _fetchedImgUrl = useAppSelector(fetchedImgUrl)

  const handleApproveImage = () => {
    dispatch(handleApproveImageThunk(_fetchedImgUrl!))
  }

  const handleRejectImage = () => {
    dispatch(handleRejectImageThunk(_fetchedImgUrl!))
  }

  const handleFetchImgUrl = () => {
    dispatch(handleFetchImgUrlThunk())
  }


  return (
    <ImagesNavigatorContainer>
      <ImgContainer onClick={handleFetchImgUrl} src={_fetchedImgUrl === null ? imgBackground : _fetchedImgUrl} />
      {_fetchedImgUrl ?
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%'
          }}
        >
          <ButtonBase onClick={handleApproveImage}>
            approve
          </ButtonBase>
          <ButtonBase onClick={handleRejectImage} >
            reject
          </ButtonBase>
        </div>
        :
        <p> Click the + in order to get the images recommendations </p>

      }
    </ImagesNavigatorContainer>
  )
}

export default ImagesNavigator
