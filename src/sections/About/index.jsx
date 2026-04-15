import { useInView } from "../../hooks/UseInView";
import { Title } from '../../components/Title'
import * as S from './styles'

export const About = () => {

  const { ref, visible } = useInView();
  return (
    <S.AboutContainer id='sobre' className='sectionContainer' ref={ref}>
      <Title title='Sobre Mim'/>
      <S.TextContent className={visible ? "show" : ""}>
        <p>Olá, me chamo Douglas Monteiro, sou natural de Gravataí–RS e atualmente curso Análise e Desenvolvimento de Sistemas pela Uninter. Estou em constante evolução como desenvolvedor, com foco na construção de aplicações web modernas, funcionais e bem estruturadas.</p>
        <p>Tenho direcionado meus estudos principalmente para o front-end, desenvolvendo interfaces intuitivas e responsivas, enquanto também amplio meus conhecimentos em back-end para me tornar um desenvolvedor fullstack mais completo. Busco sempre aplicar na prática o que aprendo, criando projetos que reforçam não apenas minhas habilidades técnicas, mas também minha capacidade de resolver problemas e evoluir continuamente.</p>
        <p>Atualmente, estou em busca de oportunidades onde eu possa contribuir com projetos reais, aprender com profissionais mais experientes e seguir evoluindo como desenvolvedor.</p>
      </S.TextContent>
      <S.ButtonCV href="/curriculo.pdf" target="_blank">
        Curriculo
      </S.ButtonCV>
    </S.AboutContainer>
  )
}
