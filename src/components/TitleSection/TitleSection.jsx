import * as S from './TitleSection.style'

const TitleSection = (props) => {
  return (
    <S.TitleContent>
        <h1>{props.title}</h1>
    </S.TitleContent>
  )
}

export default TitleSection