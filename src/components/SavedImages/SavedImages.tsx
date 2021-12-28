import { useAppSelector } from 'app/hooks';
import ImgContainer from 'components/layouts/ImgContainer';
import { savedImgsUrls } from 'features/ImagesReviewer.slice';
import SavedImagesContainer from './SavedImages.styled'

const SavedImages = () => {
    const _savedImgsUrls = useAppSelector(savedImgsUrls);

    return (
        <SavedImagesContainer>
            <h6> Approved Images ({_savedImgsUrls.length})</h6>
            <>
                {_savedImgsUrls.length > 0 ?
                    <div style={{
                        display: 'flex',
                        overflowX: 'scroll',
                        flexWrap: 'wrap'
                    }}>
                        {_savedImgsUrls.map((img, index) => (
                            <div key={index}>
                                <img style={{ width: '20px', height: '20px', marginRight: '20px'}} src={img} />
                            </div>
                        ))}
                    </div>
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
