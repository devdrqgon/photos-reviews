import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }
   
    
    body {
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        background: #FBFCFD;
        &::-webkit-scrollbar {
            width: 0.25rem;
        }
        &::-webkit-scrollbar-track {
            background: #1e1e24;
        }
       
    }
`

// ${props => props.theme.colors.text}