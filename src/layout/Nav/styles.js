import styled from "styled-components";
import {darkTheme} from '../../themes/Theme'

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Link = styled.a`
  font-size: 20px;
  font-weight: 500;
  transition: color 0.3s ease;
  &:hover{
    color: ${darkTheme.colors.primary}; 
  }
`;