import Button from '../../components/Button/Button';
import TitleSection from '../../components/TitleSection/TitleSection'
import * as S from './About.style'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <S.AboutContainer>
        <TitleSection title="Sobre Mim"/>
        <S.AboutText>
          <p>Olá, me chamo Douglas Monteiro, sou natural de Gravataí-RS e estou cursando Análise e Desenvolvimento de Sistemas pela Uninter. Tenho como objetivo me tornar um desenvolvedor fullstack, expandindo meus conhecimentos tanto no front quanto no back-end. No momento, estou focado em front-end, buscando criar interfaces modernas e funcionais, além de aprender novas tecnologias que possam contribuir nos projetos que participo.
          </p>
          <p>Minhas principais habilidades envolvem HTML, CSS, JavaScript e React. Estou sempre aberto a explorar novas ferramentas e frameworks que possam agregar valor aos projetos. Atualmente, estou em busca da minha primeira oportunidade para aplicar e expandir meus conhecimentos.</p>
        </S.AboutText>
        <S.CurriculoButton href="/curriculo.pdf" target="_blank">
          Curriculo
        </S.CurriculoButton>
    </S.AboutContainer>
  )
}

export default About