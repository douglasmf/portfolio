import styled, { css } from "styled-components";
import { darkTheme } from '../../../../themes/Themes';

export const Linha = styled.div`
  position: absolute;  /* Usando o posicionamento absoluto para as linhas */
  width: 28px; /* Ajuste da largura das linhas */
  height: 0.2rem;
  background-color: ${darkTheme.colors.text};
  transform-origin: center; /* Ponto de rotação no centro */
  transition: all 0.5s ease;

  /* Centralizando as linhas no início */
  &:nth-child(1) {
    top: 25%;
    left: 50%;
    transform: translateX(-50%); /* Centraliza horizontalmente */
  }

  &:nth-child(2) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Centraliza horizontalmente */
  }

  &:nth-child(3) {
    bottom: 25%;
    left: 50%;
    transform: translateX(-50%); /* Centraliza horizontalmente */
  }

  /* Transformação para formar o "X" */
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
  width: 46px; /* Tamanho ajustado do botão */
  height: 46px; /* Tamanho ajustado do botão */
  background-color: transparent;
  border: 2px solid ${darkTheme.colors.text};
  border-radius: 0.6rem;
  cursor: pointer;
`;