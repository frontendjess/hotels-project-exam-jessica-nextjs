import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

const GlobalStyle = createGlobalStyle`
    :root {
        --font-body: 'Roboto Mono', monospace;
        --font-headings: 'Roboto Mono', monospace;

        /* FONT SIZES */
        --font-size-base: 16px;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        font-size: 16px;
        font-family: 'Roboto Mono', monospace;
    }

    body {
        overflow-x: hidden;
    }
`;

export default GlobalStyle;
