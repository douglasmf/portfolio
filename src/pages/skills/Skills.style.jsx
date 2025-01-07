import styled from "styled-components";
import { darkTheme } from "../../themes/Themes";

export const SkillsContainer = styled.section`
  height: 100svh;
  width: 100%;
  @media(max-width:769px){
    padding-top: 15svh;
    overflow: hidden;
  }
`;

export const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 69%;
  margin: 4rem auto;
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: clamp(200px, 25%, 300px);
  height: clamp(15vh, 20vh, 25vh);
  padding: 1rem;
  border: 2px solid ${darkTheme.colors.primary};
  border-radius: 1.5rem;
  background-color: ${darkTheme.colors.background};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: ${darkTheme.colors.text};
  transition: all 0.5s ease-in-out;
  @keyframes spinScale {
  0% {
    transform: scale(1) rotate(0deg);
  }
  100% {
    transform: scale(1.2) rotate(360deg);
  }
  }
  

  svg {
    font-size: clamp(2rem, 3rem, 4rem);
  }

  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: clamp(1rem, 1.2rem, 1.4rem);
  }

  &:hover {
    transform: translateY(-5px) scale(1.05);
    background-color: ${darkTheme.colors.secondary};
    border: none;
    color: ${darkTheme.colors.text};
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
    svg {
      animation: spinScale 1.2s ease-in-out;
      filter: drop-shadow(0 0 8px ${darkTheme.colors.text});
    }
  }
`;