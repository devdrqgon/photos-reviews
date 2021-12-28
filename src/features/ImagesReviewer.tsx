import { useAppDispatch } from 'app/hooks'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import ImagesNavigator from '../components/ImagesNavigator/ImagesNavigator'
import MainCard from '../components/layouts/MainCard'
import SavedImages from '../components/SavedImages/SavedImages'
import { initSavedImgsListFromLocalStorage } from './ImagesReviewer.slice'

const ImagesReviewer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initSavedImgsListFromLocalStorage())
  }, [])
    return (
        <MainCard>
            <Header>
               <b> IMAGE APPROVAL APPLICATION </b> 
            </Header>
            <SavedImages/>
            <ImagesNavigator/>
        </MainCard>
    )
}

export default ImagesReviewer
