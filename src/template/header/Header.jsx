import { useState } from 'react';
import * as S from './Header.style'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MenuLG from './nav/menuLG/MenuLG'
import useMedia from "../../hooks/useMedia";
import ToggleButton from './nav/toggleButton/ToggleButton';
import MenuSm from './nav/menuSM/MenuSm';

const Header = () => {
  const telaSM = useMedia('(max-width: 769px)'); 
  const telaLG = useMedia('(min-width: 770px)'); 

  const [openMenu, setOpenMenu] = useState(false)

  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <S.HeaderContainer>
      { telaSM && (
        <>
          <ToggleButton onClick={handleMenu} open={openMenu}/>
        </>
        )}
      { telaSM &&(
        <MenuSm open={openMenu}/>
      )}
       <S.PerfilContainer>
         <S.ImgContainer>
          <img src="/perfil.png" alt="Douglas Monteiro" />
         </S.ImgContainer>
          {telaLG && (
            <S.TitlePerfil>Douglas M.</S.TitlePerfil>
          )}
       </S.PerfilContainer>
       { telaLG && (
          <>
            <MenuLG/>
          </>
        )}
       <S.LinksPerfil>
          <a href="https://github.com/douglasmf" target='_blank'>
            <FaGithub/>
          </a>
          <a href="https://www.linkedin.com/in/douglas-monteiro-421b90300/" target='_blank'>
            <FaLinkedin/>
          </a>
       </S.LinksPerfil>
    </S.HeaderContainer>
  )
}

export default Header