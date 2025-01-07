import React, { useState } from 'react';
import * as S from './ToggleButton.style';

const ToggleButton = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    props.onClick();
  };

  return (
    <S.ButtonStyle onClick={handleClick} className={isActive ? 'ativar' : ''}>
      <S.Linha isActive={isActive} />
      <S.Linha isActive={isActive} />
      <S.Linha isActive={isActive} />
    </S.ButtonStyle>
  );
};

export default ToggleButton;