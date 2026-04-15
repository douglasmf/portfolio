import { useTyping } from '../../hooks/useTyping';
import * as S from './styles'

export const HomeContainer = () => {
  const text = useTyping();
  return (
    <S.HomeContainer id='inicio'>
        <S.Background src="/home_bg.jpg"/>
        <S.Overlay/>
        <S.Content>
          <S.Intro>Olá, sou</S.Intro>
          <S.Name>Douglas Monteiro</S.Name>
          <S.Position>
            Desenvolvedor <span>{text}</span>
          </S.Position>

          <S.CTA href="#contato">Entre em Contato</S.CTA>
        </S.Content>
    </S.HomeContainer>
  )
}