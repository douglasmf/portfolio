import styled from "styled-components";
import {darkTheme} from "../../themes/Theme";

export const HomeContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 700px;
  @media (max-width: 600px) {    
    padding: 0 24px;
  }
`;

export const Intro = styled.span`
  font-size: 28px;
  opacity: 0.8;
  @media (max-width: 1024px) {
    font-size: 24px;
  }
  @media (max-width: 600px) {    
    font-size: 20px;
  } 
`;

export const Name = styled.h1`
  font-size: 56px;
  font-weight: 700;
  @media (max-width: 1024px) {
    font-size: 42px;
  }
  @media (max-width: 600px) {    
    font-size: 32px;
  }
`;

export const Position = styled.h2`
  font-size: 28px;
  font-weight: 500;

  span {
    color: ${darkTheme.colors.primary};
  }
  span::after {
  content: "|";
  margin-left: 4px;
  animation: blink 1s infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    font-size: 24px;
  }
  @media (max-width: 600px) {    
    font-size: 20px;
  }
`;


export const CTA = styled.a`
  margin-top: 24px;
  padding: 12px 24px;
  border: 2px solid ${darkTheme.colors.primary};
  border-radius: 8px;
  font-size: 16px;
  color: ${darkTheme.colors.primary};
  transition: 0.3s;

  &:hover {
    background: ${darkTheme.colors.primary};
    color: ${darkTheme.colors.text};
  }

  @media (max-width: 600px) {    
    width: 100%;
    text-align: center;
  }
`;
