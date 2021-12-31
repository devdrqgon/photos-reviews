import { useAppSelector } from 'app/hooks';
import Img from 'components/layouts/ImgContainer';
import { savedImgsUrls } from 'features/ImagesReviewer.slice';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import SavedImagesContainer from './SavedImages.styled'

const SavedImages = () => {
    const _savedImgsUrls = useAppSelector(savedImgsUrls);
    const galleryRef = useRef<HTMLDivElement>(null)
    const scrollToNewestElement = () => {
        if (galleryRef.current) {
            let newestChild = galleryRef.current.lastElementChild
            newestChild?.scrollIntoView()
        }
    }
    useEffect(() => {
        scrollToNewestElement()
    }, [_savedImgsUrls])
    return (
        <SavedImagesContainer>
            <b> Approved Images ({_savedImgsUrls.length})</b>
            <>
                {_savedImgsUrls.length > 0 ?
                    <SavedImagesGallery ref={galleryRef}>
                        {_savedImgsUrls.map((img, index) => (
                            <div key={index}>
                                <img style={{ width: '60px', height: '60px', marginRight: '20px' }} src={img} />
                            </div>
                        ))}
                    </SavedImagesGallery>
                    :
                    <div>
                        Your saved images will appear here!
                    </div>
                }
            </>
        </SavedImagesContainer>
    )
}

export default SavedImages

const SavedImagesGallery = styled.div`
    display: flex;
    flex-direction: row-reverse;
    overflow-x: scroll;
`