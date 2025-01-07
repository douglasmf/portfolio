import * as S from './Main.style'
import { Element } from 'react-scroll';
import About from '../../pages/about/About'
import Contact from '../../pages/contact/Contact'
import Home from '../../pages/home/Home'
import Projects from '../../pages/projects/Projects'
import Skills from '../../pages/skills/Skills2'

const Main = () => {
  return (
    <S.MainContainer>
      <Element name='home'>
        <Home />
      </Element>
      <Element name='about'>
        <About />
      </Element>
      <Element name='skills'>
        <Skills />
      </Element>
      <Element name='projects'>
        <Projects />
      </Element>
      <Element name='contact'>
        <Contact />
      </Element>
    </S.MainContainer>
  )
}

export default Main