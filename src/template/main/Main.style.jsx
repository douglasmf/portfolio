import styled from "styled-components";
import { darkTheme } from "../../themes/Themes";

export const MainContainer = styled.main`
  background-color: ${darkTheme.colors.darkSecondary};
  width: 85%;
  overflow: hidden;
  float: right;
  @media (max-width:999px){
    width: 80vw;
  }
  @media (max-width: 769px){
    width: 100%;
  }
  
`;