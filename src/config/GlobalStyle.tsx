import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
    }

    body, #root {
        min-height: 100vh;
    }
`
export default GlobalStyle
