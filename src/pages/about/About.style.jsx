import styled from "styled-components";
import { darkTheme } from "../../themes/Themes";

export const AboutContainer = styled.section`
  position: relative;
  height: 100svh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(max-width:769px){
    padding-top: 15svh;
  }
`;

export const AboutText = styled.div`
  width: 70%;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3%;
  p{  
    font-size: 1.6rem;
    color: ${darkTheme.colors.text};
    line-height: 3rem;
    
  }
  p:first-letter{
    margin-left: 2rem;
  }
  @media (max-width: 1200px){
    width: 90%;
    p{
      line-height: 2.4rem;
    }
  }
  @media (max-width: 999px){
    width: 80%;
    margin-top: 3rem;
    margin-bottom: 6%;
    p{
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }
  @media (max-width: 769px){
    width: 88%;
    gap: 1rem;
    p {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 599px){
    width: 80%;
    p {
      font-size: 1rem;
      line-height: 1.6rem;
    }
  }
  @media (max-width: 360px){
    width: 86%;
    p {
      line-height: 1.5rem;
    }
  }
`;

export const CurriculoButton = styled.a`
    color: ${darkTheme.colors.text};
    font-weight: bold;
    background-color: ${darkTheme.colors.secondary};
    font-size: 1.5rem;
    padding: .8rem 1.5rem;
    border-radius: 1rem;
    transition: all .8s;
    &:hover{
        background-color: ${darkTheme.colors.secondaryDark};
    }
    @media(max-width: 999px){
      font-size: 1.2rem;
      padding: .6rem 1rem;
    }
    @media(max-width: 769px){
      font-size: 1.2rem;
      padding: .6rem 1rem;
    }
    @media (max-width: 599px){
      font-size: 1rem;
      padding: .4rem .8rem;
    }
`;





