import * as S from './Button.style'

const Button = (props) => {
  return (
    <S.ButtonStyle href={props.link} target='_blank'>
      {props.title}
    </S.ButtonStyle>
  )
}

export default Button