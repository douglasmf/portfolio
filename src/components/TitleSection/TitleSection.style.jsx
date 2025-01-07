import styled from "styled-components";
import {darkTheme} from '../../themes/Themes'

export const TitleContent = styled.div`
  height: 12svh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${darkTheme.colors.primary};
  border-width: 60%;
  h1{
    font-size: 2rem;
    letter-spacing: 0.4rem;
    font-weight: bold;
    color: ${darkTheme.colors.primary};
  }
  @media (max-width: 769px){
    height: 10svh;
    h1{
      font-size: 1.8rem;
    }
  }
`;