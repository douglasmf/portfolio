import styled from "styled-components";
import {darkTheme} from '../../themes/Theme'

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 280px;
  height: 100vh;
  padding: 36px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${darkTheme.colors.bgDark};
  @media (max-width: 1024px) {
    width: 100%;
    height: 72px;
    padding: 0 24px;
    flex-direction: row;
    isolation: isolate;
  }
`;

export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Foto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 24px;
  border: 6px solid ${darkTheme.colors.primary};

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Nome = styled.span`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 24px;
  @media (max-width: 1024px) {
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const Right = styled.div`
  display: flex; 
  align-items: center;
  gap: 24px;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 24px;
`;

export const IconSocial = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  svg{
    font-size: 16px;
  }
  transition: color 0.3s ease;
  &:hover{
    color: ${darkTheme.colors.primary}; 
  }
  @media (max-width: 1024px) {
    span{
      display: none;
    }
  }
`;

export const MenuHamburger = styled.div`
  width: 24px;
  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  span {
    height: 2px;
    width: 100%;
    background: ${darkTheme.colors.text};
    transition: 0.3s;
  }

  &.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  &.active span:nth-child(2) {
    opacity: 0;
  }

  &.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
  @media (min-width: 1025px) {
    display: none;
  }
`;