import styled from "styled-components";
import {darkTheme} from '../../themes/Theme'

export const NavMobileContainer = styled.nav`
    position: fixed;
    padding: 16px 0;
    top: 72px;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
    background: ${darkTheme.colors.bgMedium};
    z-index: 998;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${({ open }) => (open ? 1 : 0)};
    pointer-events: ${({ open }) => (open ? 'all' : 'none')};
    transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
    @media (min-width: 1025px) {
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