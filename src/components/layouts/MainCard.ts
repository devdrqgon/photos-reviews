import styled from 'styled-components'

const MainCard = styled.div`
    display: flex;
    flex-direction: column; 
    overflow-y: scroll;
    align-items: center;
    background: #FFFFFF;
    margin-top: 3vw;
    margin-bottom: 3vw;
    border-radius: 5px;
    padding: 10px 20px;
    border: 1px #d0d0d0 solid;
    width: 30vw;
    height: 95vh;

    @media(max-width: 768px){
        width: 70vw;
        height: 95vh;
    }
`
export default MainCard

