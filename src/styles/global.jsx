import { createGlobalStyle } from "styled-components";
import {darkTheme} from '../themes/Theme'
export const Global = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth; 
    }
    body{
        font-family: "Inter", sans-serif;
        color: ${darkTheme.colors.text};
    }
    a{
        text-decoration: none;
        color: ${darkTheme.colors.text};
    }
`;