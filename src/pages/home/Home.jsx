import * as S from './Home.style'
import Button from '../../components/Button/Button'
const Home = () => {
  return (
    <S.HomeContainer>
        <S.FiltroBlack/>
        <S.HomeContain>
          <p>Bem-Vindo</p>
          <h1>Douglas Monteiro</h1>
          <h2>Desenvolvedor Front-End</h2>
          <S.ContactButton
          to="contact"
          smooth={true}
          duration={500}
          spy={true} 
          activeClass="active" >
            Contacte-me
          </S.ContactButton>
        </S.HomeContain>
    </S.HomeContainer>
  )
}

export default Home