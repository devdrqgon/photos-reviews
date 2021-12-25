import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }
    /**
        Since the app only contains one card displayed in the center,
        a flexbox container is defined in body.
    */
    body {
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        height: 100vh;
        width: 100vw;
        background: #FBFCFD;
    }

  

`

// ${props => props.theme.colors.text}