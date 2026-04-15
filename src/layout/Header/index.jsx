import { useState } from 'react';
import { Nav } from '../Nav'
import * as S from './styles'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export const Header = ({ open, setOpen }) => {
  return (
    <S.Header>
        <S.Perfil>
            <S.Foto src='/perfil.jpg' alt='Foto de perfil'/>
            <S.Nome>Douglas Monteiro</S.Nome>
        </S.Perfil>
        <Nav/>
        <S.Right>
            <S.SocialIcons>
                <S.IconSocial href='www.linkedin.com/in/douglas-monteiro-421b90300' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin/><span>Linkedin</span>
                </S.IconSocial>
                <S.IconSocial href='https://github.com/douglasmf' target='_blank' rel='noopener noreferrer'>
                    <FaGithub/><span>Github</span>
                </S.IconSocial>
            </S.SocialIcons>
            <S.MenuHamburger
                className={open ? 'active' : ''}
                onClick={() => setOpen(!open)}
            >
                <span></span>
                <span></span>
                <span></span>
            </S.MenuHamburger>
        </S.Right>

    </S.Header>
  )
}
