import styled from "styled-components";
import { darkTheme } from "../../themes/Themes";

export const HomeContainer = styled.section`
    position: relative;
    height: 100svh;
    width: 100%;
    background: url('/home_bg.jpg');
    background-size: cover;
    background-repeat: none;
    background-attachment: fixed;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width:769px){
      padding-top: 10svh;
    }
`;

export const FiltroBlack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${darkTheme.colors.filtroDark};
`;

export const HomeContain = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 800;
  p{
    font-size: 4rem;
    letter-spacing: 1rem;
    color: ${darkTheme.colors.text};
  }
  h1 {
    font-size: 6rem;
    color: ${darkTheme.colors.primary};
    
  }
  h2 {
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: 0.2rem;
    color: ${darkTheme.colors.text};
    margin-bottom: 8%;
  }
  @media (max-width: 1200px){
    p{font-size: 3.4rem;}
    h1{font-size: 5rem;}
    h2{font-size: 2.5rem;}
  }
  @media (max-width: 999px){
    p{font-size: 2.7rem;}
    h1{font-size: 4.3rem;}
    h2{font-size: 1.8rem;}
  }
  @media (max-width: 769px){
    p{font-size: 2.2rem;}
    h1{font-size: 3.8rem;}
  }
  @media (max-width: 599px){
    
    p{font-size: 1.4rem;}
    h1{font-size: 2.2rem;}
    h2{font-size: 1rem;}
  }
`;

export const ContactButton = styled.a`
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
    @media (max-width: 769px){
      font-size: 1.4rem;
      padding: .6rem 1.2rem;
    }
    @media (max-width: 599px){
      font-size: 1.2rem;
      padding: .6rem 1.2rem;
      margin-top: 1rem;
    }
`;