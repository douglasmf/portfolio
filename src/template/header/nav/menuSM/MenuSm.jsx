import LinkMenu from '../linkMenu/LinkMenu'
import * as S from './MenuSM.style'
import { FaHome,FaUserCircle,FaCode,FaFolderOpen,FaEnvelope  } from 'react-icons/fa';

const MenuSm = (props) => {
  return (
    <S.MenuContainer openMenu={props.open}>
      <LinkMenu title="Inicio" target="home"> 
        <FaHome/>
      </LinkMenu>
      <LinkMenu title="Sobre" target="about"> 
        <FaUserCircle/>
      </LinkMenu>
      <LinkMenu title="Skills" target="skills"> 
        <FaCode/>
      </LinkMenu>
      <LinkMenu title="Projetos" target="projects"> 
        <FaFolderOpen/>
      </LinkMenu>
      <LinkMenu title="Contato" target="contact"> 
        <FaEnvelope/>
      </LinkMenu>
    </S.MenuContainer>
  )
}

export default MenuSm