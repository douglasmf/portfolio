import styled from "styled-components";
import {darkTheme} from '../../../../themes/Themes'

export const MenuContainer = styled.nav`
  position: fixed;
  top: 15vh;
  left: ${(props) => props.openMenu ? '0' : '-50%'};
  padding: 4% 8%;
  background-color: #305C89;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1.5rem;
  transition: .8s;
  z-index: 100000;
  a{
    color: ${darkTheme.colors.text};
    font-size:1.2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8%;
    cursor: pointer;
  }
  svg{
    font-size: 1.4rem;
  }
`;