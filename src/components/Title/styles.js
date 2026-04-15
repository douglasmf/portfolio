import styled from "styled-components";
import {darkTheme} from '../../themes/Theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 56px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: ${darkTheme.colors.text};

  @media (max-width: 1024px){
    font-size: 28px;
    margin-top: 36px;
  }
  @media (max-width: 600px){
    font-size: 24px;
  }
`;

export const Underline = styled.div`
  width: 60px;
  height: 3px;
  background: ${darkTheme.colors.primary};
  border-radius: 2px;
  @media (max-width: 600px){
    width: 48px;
  }
`;