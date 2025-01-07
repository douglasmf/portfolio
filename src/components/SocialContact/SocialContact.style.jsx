import styled from "styled-components";
import {darkTheme} from '../../themes/Themes'

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 34%;
  height: 100%;
  margin-top: 2vh;
  h2 {
    font-size: 1.8em;
    color: ${darkTheme.colors.primary};
    margin-bottom: 1rem;
  }
  @media (max-width: 1400px){
    h2 {
      font-size: 1.5em;
    }
  }
  @media (max-width: 1200px){
    h2 {
      font-size: 1.3em;
    }
  }
  @media (max-width: 769px){
    width: 100%;
    margin-top: 0;
    h2{
      font-size: 1.1rem;
      margin-bottom: .5rem;
    }
  }
`;

export const Email = styled.div`
  .emailContainer {
    margin-bottom: 2rem;
    color: ${darkTheme.colors.text};
    p{
      display: flex;
      align-items: center;
      gap: .5rem;
    }
    svg{
      font-size: 2rem;
    }
  }

  @media (max-width: 1200px){
    .emailContainer{
      flex-direction: column;
    }
  }
  @media (max-width: 769px){
    .emailContainer {
      flex-direction: row;
      margin-bottom: 1rem;
    }
  }
`;

export const SocialLinks = styled.div`
  .linksSociais{
    display: flex;
    flex-direction: column;
  }
  a {
    display: flex;
    align-items: center;
    gap: .5rem;
    width: 100%;
    color: ${darkTheme.colors.text};
    margin-bottom: .8rem;
    transition: .8s;
  }
  a:hover {
    color: ${darkTheme.colors.secondary};
  }
  a#github > svg{
    font-size: 2rem;
  }

  a#linkedin > svg{
    font-size: 2.2rem;
  }
  @media (max-width: 999px){
    a#github > svg{
      font-size: 1.8em;
    }
    a#linkedin > svg{
        font-size: 2.0em;
      }
    }
  @media (max-width: 769px){
    .linksSociais{
      flex-direction: row;
    }
    a{
      font-size: .9rem;
    }
  }
`;