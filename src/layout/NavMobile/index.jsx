import React from 'react'
import * as S from './styles'

export const NavMobile = ({ open, setOpen }) => {
  return (
    <S.NavMobileContainer open={open}>
      <S.Link href='#inicio' onClick={()=> setOpen(!open)}>Inicio</S.Link>
      <S.Link href='#sobre' onClick={()=> setOpen(!open)}>Sobre</S.Link>
      <S.Link href='#projetos' onClick={()=> setOpen(!open)}>Projetos</S.Link>
      <S.Link href='#habilidades' onClick={()=> setOpen(!open)}>Habilidades</S.Link>
      <S.Link href='#contato' onClick={()=> setOpen(!open)}>Contato</S.Link>
    </S.NavMobileContainer>
  )
}
