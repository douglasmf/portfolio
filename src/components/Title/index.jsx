import * as S from './styles';

export const Title = ({ title }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Underline />
    </S.Container>
  );
};
