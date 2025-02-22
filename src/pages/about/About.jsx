import Button from '../../components/Button/Button';
import TitleSection from '../../components/TitleSection/TitleSection'
import * as S from './About.style'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <S.AboutContainer>
        <TitleSection title="Sobre Mim"/>
        <S.AboutText>
          <p>Tenho muito interesse em aprender novas tecnologias e, no momento, venho me dedicando a aprender desenvolvimento front-end de forma autodidata, por meio de vídeos, artigos e documentações. Dessa forma, consigo focar meu aprendizado em tecnologias de maior interesse ou tendência, além de poder estudar no meu próprio ritmo.
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