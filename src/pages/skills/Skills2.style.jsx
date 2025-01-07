import styled from 'styled-components';
import { darkTheme } from '../../themes/Themes';

export const SkillsContainer = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 769px) {
    padding-top: 15svh;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  row-gap: 12%; 
  column-gap: 20%; 
  justify-content: center;
  align-content: center; 
  width: auto;
  margin: 0 auto;
  margin-top: 16svh;
  transform: scale(.9);

  @media (max-width: 1200px) {
    margin-top: 14svh;
  }
  @media (max-width: 999px) {
    row-gap: 12%; 
    column-gap: 14%;
  }
  @media (max-width: 769px) {
    
    row-gap: 8%;
  }

  @media (max-width: 480px) {
    column-gap: 6%; 
  }
`;

export const SkillCard = styled.div`
  background: ${darkTheme.colors.secondaryDark};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

  height: 160px;
  width: 150px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    background: ${darkTheme.colors.secondary}; 
  }

  @media (max-width: 769px) {
    height: 130px;
    width: 120px;
  }

  @media (max-width: 480px) {
    height: 110px;
    width: 100px;
  }
`;

export const SkillIcon = styled.div`
  font-size: 3rem;
  color: ${darkTheme.colors.text};

  @media (max-width: 769px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SkillTitle = styled.div`
  margin-top: 10px;
  font-size: 1.2rem;
  color: ${darkTheme.colors.text};
  text-align: center;
  @media (max-width: 769px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
