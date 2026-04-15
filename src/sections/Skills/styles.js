import styled from "styled-components";
import {darkTheme} from '../../themes/Theme'

export const SkillsSection = styled.section`
  padding: 96px 80px;
  background: ${darkTheme.colors.bgMedium};
  height: 100vh;

  @media (max-width: 1024px) {
    padding: 80px 40px;
    height: auto;
  }

  @media (max-width: 600px) {
    padding: 64px 24px;
  }
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));

  gap: 24px;
`;

export const Card = styled.div`
  background: ${darkTheme.colors.bgLight};
  padding: 24px 16px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.05);

  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${darkTheme.colors.primary};
  }
`;

export const Icon = styled.div`
  font-size: 36px;
  color: var(--color-accent);
`;

export const SkillName = styled.span`
  font-size: 14px;
  color: ${darkTheme.colors.primary};
`;

export const ExtraSkills = styled.div`
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 32px;
  opacity: 0.8;
`;

export const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 340px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const SkillItem = styled.div`
  font-size: 14px;
  color: ${darkTheme.colors.text};
  opacity: 0.9;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  span {
    width: 40px;
    height: 2px;
    background: ${darkTheme.colors.primary};
    border-radius: 2px;
  }
`;