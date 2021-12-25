import React from 'react'
import Header from '../components/Header'
import ImagesNavigator from '../components/ImagesNavigator/ImagesNavigator'
import MainCard from '../components/layouts/MainCard'
import SavedImages from '../components/SavedImages/SavedImages'

const Main = () => {
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

export default Main
