import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Kanit", sans-serif;
  }
  a {
    text-decoration: none;
  }
`;