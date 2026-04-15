import { About } from '../../sections/About'
import { Contact } from '../../sections/Contact'
import { HomeContainer } from '../../sections/Home'
import { Projects } from '../../sections/Projects'
import { Skills } from '../../sections/Skills'
import * as S from './styles'

export const MainContainer = () => {
  return (
    <S.MainContent>
        <HomeContainer/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
    </S.MainContent>
  )
}
