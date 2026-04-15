import * as S from './styles'

export const Nav = () => {
  return (
    <S.NavContainer>
      <S.Link href='#inicio'>Inicio</S.Link>
      <S.Link href='#sobre'>Sobre</S.Link>
      <S.Link href='#projetos'>Projetos</S.Link>
      <S.Link href='#habilidades'>Habilidades</S.Link>
      <S.Link href='#contato'>Contato</S.Link>
    </S.NavContainer>
  )
}
