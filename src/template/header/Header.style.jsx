import styled from "styled-components";
import { darkTheme } from "../../themes/Themes";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 15vw;
  height: 100svh;
  padding: 4% 2%;
  background-color: ${darkTheme.colors.darkPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 999px){
    width: 20vw;
  }
  @media (max-width: 769px) {
    width: 100%;
    height: 15vh;
    padding: 4% 6%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 3000;
  }
  
`;

export const PerfilContainer = styled.div`

`;

export const ImgContainer = styled.div`
  width: min(14vw, 14vh);
  height: min(14vw, 14vh); 
  display: flex;
  justify-content: center;
  border-radius: 50%;
  background-color: ${darkTheme.colors.text};
  box-shadow: 0px 0px 20px 5px ${darkTheme.colors.secondary};
  overflow: hidden;
  img{
    height: 100%;
    width: 100%;
    margin-top: 12%;
    object-fit: contain;
    transform: scale(1.2);
  }
  @media(max-width:999px){
    width: min(12vw, 12vh); 
    height: min(12vw, 12vh); 
  }
  @media(max-width:769px){
    width: min(11vw, 11vh); 
    height: min(11vw, 11vh); 
  }
  @media(max-width:599px){
    width: min(16vw, 16vh); 
    height: min(16vw, 16vh); 
  }
`;

export const TitlePerfil = styled.h1`
  color: ${darkTheme.colors.text};
  font-weight: bold;
  font-size: 1.6rem;
  margin-top: 15%;
  @media(max-width: 1200px){
    font-size: 1.4rem;
  }
`;

export const LinksPerfil = styled.div`
  display: flex;
  gap: 8%;
  width: 100%;
  justify-content: center;
  a {
    color: ${darkTheme.colors.text};
    font-size: 1.6rem;
    transition: .8s;
  }
  a:hover{
    color: ${darkTheme.colors.primary};
  }
  @media (max-width: 769px){
    width: auto;
    gap: 20%;
  }
`;