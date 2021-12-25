import ImagesNavigatorContainer from './ImagesNavigator.styled'
import imgBackground from "assets/imgBackground.png"
import ImgContainer from 'components/layouts/ImgContainer'
import ButtonBase from 'components/ui-lib/ButtonBase'
import axios from 'axios'
import { useState } from 'react'

const ImagesNavigator = () => {
  //state
  const [FetchedImgUrl, setFetchedImg] = useState<string | null>(null)

  const getRandomImage = async () => {
    const imgUrl = (await axios.get('https://api.unsplash.com/photos/random?client_id=S00f6b0q_JEjib3qrC4Bcbnt6sLzBQHxPt-XcmFEhhw')).data.urls.regular
    setFetchedImg(imgUrl)
  }

  return (
    <ImagesNavigatorContainer>
      <ImgContainer onClick={getRandomImage} src={FetchedImgUrl === null ? imgBackground : FetchedImgUrl} />
      {FetchedImgUrl ?
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%'
          }}
        >
          <ButtonBase>
            save
          </ButtonBase>
          <ButtonBase onClick={getRandomImage} >
            new image
          </ButtonBase>
        </div>
        :
        <p> Click the + in order to get the images recommendations </p>

      }
    </ImagesNavigatorContainer>
  )
}

export default ImagesNavigator
