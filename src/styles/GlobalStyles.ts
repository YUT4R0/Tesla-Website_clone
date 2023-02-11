import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,200;0,700;1,300&family=Roboto:wght@400;500;700&display=swap');    

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, input, button {
        font-family: 'Roboto', sans-serif, 'Roboto Mono', monospace;
    }
`
export default GlobalStyles