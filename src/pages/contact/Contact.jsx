import * as S from './Contact.style'
import TitleSection from '../../components/TitleSection/TitleSection'
import FormContact from '../../components/FormContact/FormContact'
import SocialContact from '../../components/SocialContact/SocialContact'

const Contact = () => {
  return (
    <S.ContactStyle>
        <TitleSection title="Entre em contato"/>
        <S.ContactContainer>
          <S.ContactContain>
            <FormContact/>
            <SocialContact/>
          </S.ContactContain>
        </S.ContactContainer>
    </S.ContactStyle>
  )
}

export default Contact