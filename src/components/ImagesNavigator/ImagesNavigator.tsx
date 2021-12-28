import ImagesNavigatorContainer from './ImagesNavigator.styled'
import imgBackground from "assets/imgBackground.png"
import ImgContainer from 'components/layouts/ImgContainer'
import ButtonBase from 'components/ui-lib/ButtonBase'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { rejectedImgsUrls, _addImgUrlToRejectedImgsList, _addImgUrlToSavedImgsList, _initSavedImgs } from 'features/ImagesReviewer.slice'

const ImagesNavigator = () => {
  const dispatch = useAppDispatch();

  //state
  const [FetchedImgUrl, setFetchedImg] = useState<string | null>(null)
  const _rejectedImgsUrls = useAppSelector(rejectedImgsUrls);

  const handleApproveImage = () => {
    dispatch(_addImgUrlToSavedImgsList(FetchedImgUrl!))
    handleImgFetched()
  }

  const handleRejectImage = () => {
    dispatch(_addImgUrlToRejectedImgsList(FetchedImgUrl!))
    handleImgFetched()
  }
  const getRandomImage = async () => {
    return (await axios.get('https://api.unsplash.com/photos/random?client_id=S00f6b0q_JEjib3qrC4Bcbnt6sLzBQHxPt-XcmFEhhw')).data.urls.thumb as string

  }

  const initImage = async () => {
    const res = await getRandomImage()
    setFetchedImg(res)
  }

  const handleImgFetched = async () => {
    const _imgUrl = await getRandomImage()
    if (_rejectedImgsUrls.includes(_imgUrl)) {
      handleImgFetched()
    }
    else {
      setFetchedImg(_imgUrl)
    }
  }

  useEffect(() => {
    dispatch(_initSavedImgs())
  }, [])

  return (
    <ImagesNavigatorContainer>
      <ImgContainer onClick={initImage} src={FetchedImgUrl === null ? imgBackground : FetchedImgUrl} />
      {FetchedImgUrl ?
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
