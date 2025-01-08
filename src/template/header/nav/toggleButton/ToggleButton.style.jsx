import styled, { css } from "styled-components";
import { darkTheme } from '../../../../themes/Themes';

export const Linha = styled.div`
  position: absolute;  
  width: 28px; 
  height: 0.2rem;
  background-color: ${darkTheme.colors.text};
  transform-origin: center; 
  transition: all 0.5s ease;

  &:nth-child(1) {
    top: 25%;
    left: 50%;
    transform: translateX(-50%); 
  }

  &:nth-child(2) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
  }

  &:nth-child(3) {
    bottom: 25%;
    left: 50%;
    transform: translateX(-50%);
  }

  ${({ isActive }) => isActive && css`
    &:nth-child(1) {
      transform: rotate(45deg) translateY(12px);
      left: 37.5%;
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      transform: rotate(-45deg) translateY(-12px);
      left: 37.5%;
    }
  `}
`;

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 46px; 
  height: 46px; 
  background-color: transparent;
  border: 2px solid ${darkTheme.colors.text};
  border-radius: 0.6rem;
  cursor: pointer;
`;