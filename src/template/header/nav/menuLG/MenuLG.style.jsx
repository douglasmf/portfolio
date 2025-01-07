import styled from "styled-components";
import {darkTheme} from '../../../../themes/Themes'

export const MenuContainer = styled.nav`
  width: 90%;
  display: flex;
  flex-direction: column;
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: #F0F4F8;
    cursor: pointer;
    transition: all .8s;
  }
  a.active{
    color: ${darkTheme.colors.secondary};
  }
  a:hover{
    color: ${darkTheme.colors.primary};
  }
  svg{
    font-size: 1.6rem;
  };
  @media (max-width: 1200px){
    a{
      font-size: 1.2rem;
    }
    svg{
      font-size: 1.4rem;
    }
  }
`;