import {createGlobalStyle} from 'styled-components'

export const colors = {
    gray: '#575859',
    green: '#152526',
    orange: '#A67041',
    golden: '#EFD580',
    black: '#0D0D0D',
    white: '#fff'
} 

const GlobalStyle = createGlobalStyle`
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Martian Mono', monospace;
    }

    .container {
        max-width: 1120px;
        margin: 0 auto;
    }

    body {
        background-color: ${colors.white};
    }
`

export default GlobalStyle