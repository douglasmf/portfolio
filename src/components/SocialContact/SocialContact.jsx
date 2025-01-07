import * as S from './SocialContact.style'
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

const SocialContact = () => {
  return (
    <S.SocialContainer>
            <S.Email>
              <h2>E-mail para contato</h2>
              <div className="emailContainer">
                <p><MdEmail /> douglas.m.f.1995@gmail.com</p>
              </div>
            </S.Email>
            <S.SocialLinks>
              <h2>Adicione nas redes</h2>
              <div className='linksSociais'>
                <a href="https://github.com/douglasmf"
                target='_blank'
                id='github'>
                  <VscGithub/> Github
                </a>
                <a href="https://www.linkedin.com/in/douglas-monteiro-421b90300/"
                target='_blank'
                id='linkedin'>
                  <CiLinkedin/> Linkedin
                </a>
              </div>
            </S.SocialLinks>
        </S.SocialContainer>
  )
}

export default SocialContact