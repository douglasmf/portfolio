import styled from "styled-components";
import {darkTheme} from '../../themes/Theme'

export const AboutContainer = styled.section`
  background-color: ${darkTheme.colors.bgMedium};
  height: 100vh;
  padding: 96px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 80px 40px;
    height: auto;
  }
  @media (max-width: 600px) {
    padding: 64px 24px;
  }
`;

export const TextContent = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 16px;
  margin-bottom: 32px;
 
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }

  p {
    font-size: 18px;
    line-height: 1.7;
    color: var(--color-text);
    opacity: 0.9;
  }

  @media (max-width: 1024px) {
    p {
      font-size: 17px;
    }
  }

  @media (max-width: 600px) {
    p {
      font-size: 16px;
    }
  }
`;

export const ButtonCV = styled.a`
  padding: 12px 24px;
  border: 2px solid ${darkTheme.colors.primary};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  color: ${darkTheme.colors.primary};
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: ${darkTheme.colors.primary};
    color: ${darkTheme.colors.text};
  }
`;