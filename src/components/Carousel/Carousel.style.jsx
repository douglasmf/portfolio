import styled from "styled-components";
import {darkTheme} from '../../themes/Themes'

export const CarouselContainer = styled.div`
  position: relative;
  height: 70vh;
  width: 70%;
  margin: 3rem auto;
  border: 2px solid ${darkTheme.colors.primary};
  overflow: hidden;
  @media (max-width: 769px){
    width: 80%;
    height: 60vh;
  }
  @media (max-width: 769px){
    width: 80%;
    height: 60vh;
  }
  @media (max-width: 599px){
    width: 86%;
  }
`;

export const FiltroBlack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: #00000099;
`;

export const CarouselList = styled.div`
  height: 100%;
  width: ${(props) => props.totalItems * 100}%;
  display: flex;
  transition: 1.8s;
`;

export const CarouselItem = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 2rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  height: 70px;
  width: 70px;
  transform: translateY(-50%);
  z-index: 333;
  background-color: transparent;
  border: none;
  font-size: 3.5rem;
  color: ${darkTheme.colors.primary};
  cursor: pointer;
  transition: .8s;
  &:hover{
    color: ${darkTheme.colors.secondary};
  }
  @media (max-width: 599px){
    font-size: 2.7rem;
  }
`;

export const ButtonPrev = styled(Button)`
  left: 1%;
`;

export const ButtonNext = styled(Button)`
  right: 1%;
`;

export const LinksCarousel = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;  
  z-index: 2000;
  a{
    padding: 0.4rem 1rem;
    color: ${darkTheme.colors.text};
    font-weight: bold;
    background-color: ${darkTheme.colors.secondary};
    border-radius: .8rem;
    transition: .8s;
  }
  a:hover{
    background-color: ${darkTheme.colors.secondaryDark};
  }
  @media (max-width: 769px){
    font-size: .8rem;
  }
`;