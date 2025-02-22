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
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  row-gap: 8%; 
  column-gap: 10%; 
  justify-content: center;
  align-content: center; 
  width: auto;
  margin: 0 auto;
  margin-top: 18svh;
  @media (max-width: 1249px) {
    top: -4%;
    column-gap: 8%;
  }
  @media (max-width: 999px) {
    top: 0%;
    row-gap: 12%; 
    column-gap: 12%;
  }
  @media (max-width: 849px) {
    top: 0%;
    row-gap: 8%; 
    column-gap: 8%;
  }
  @media (max-width: 769px) {
    top: -6%;
    row-gap: 12%; 
    column-gap: 12%;
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr); 
    top: -10%;
    row-gap: 4%; 
    column-gap: 12%;
  }
`;

export const SkillCard = styled.div`
  background: ${darkTheme.colors.secondaryDark};
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  height: 160px;
  width: 240px;

  &:hover {
    transform: scale(1.1) translateY(-4px);
    box-shadow: 0px 0px 20px 5px #F0F4F8;
    background: ${darkTheme.colors.secondary}; 
  }

  @media (max-width: 1199px) {
    height: 160px;
    width: 210px;
  }

  @media (max-width: 999px) {
    height: 140px;
    width: 160px;
  }
  @media (max-width: 849px) {
    height: 140px;
    width: 150px;
  }
  @media (max-width: 769px) {
    height: 120px;
    width: 124px;
  }
  @media (max-width: 500px) {
    height: 90px;
    width: 114px;
    border-radius: 15px;
    &:nth-last-child(1) {
      grid-column: span 2;
      width: 100%;
      svg{
        font-size: 2.5rem;
        margin-bottom: -5px;
      }
    }
  }
  
`;

export const SkillIcon = styled.div`
  font-size: 3.5rem;
  color: ${darkTheme.colors.text};

  @media (max-width: 1199px) {
    font-size: 2.5rem;
  }
  @media (max-width: 999px) {
    font-size: 2.2rem;
  }

  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

export const SkillTitle = styled.div`
  font-size: 1.3rem;
  color: ${darkTheme.colors.text};
  text-align: center;
  @media (max-width: 999px) {
    font-size: 1.1rem;
  }
  @media (max-width: 769px) {
    font-size: .9rem;
  }
  @media (max-width: 500px) {
    font-size: .8rem;
  }
`;
