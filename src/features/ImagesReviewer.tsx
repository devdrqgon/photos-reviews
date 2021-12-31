import { useAppDispatch, useAppSelector } from 'app/hooks'
import Img, { ImgContainer } from 'components/layouts/ImgContainer'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import ImagesNavigator from '../components/Footer/Footer'
import MainCard from '../components/layouts/MainCard'
import SavedImages from '../components/SavedImages/SavedImages'
import { fetchedImgUrl, FetchImgThunk, initSavedImgsListFromLocalStorage } from './ImagesReviewer.slice'
import imgBackground from "assets/imgBackground.png"

const ImagesReviewer = () => {
  const dispatch = useAppDispatch()
  const _fetchedImgUrl = useAppSelector(fetchedImgUrl)

  const handleFetchImgUrl = () => {
    dispatch(FetchImgThunk())
  }

  useEffect(() => {
    dispatch(initSavedImgsListFromLocalStorage())
  }, [])
  return (
    <MainCard>
      <Header>
        <b> IMAGE APPROVAL APPLICATION </b>
      </Header>
      <SavedImages />
      <ImgContainer>
        <Img onClick={handleFetchImgUrl} src={_fetchedImgUrl === null ? imgBackground : _fetchedImgUrl} />
      </ImgContainer>
      <ImagesNavigator />
    </MainCard>
  )
}

export default ImagesReviewer
