import styled from "styled-components";
import {darkTheme} from '../../themes/Themes'

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 56%;
  @media (max-width: 769px){
    width: 100%;
    margin-bottom: 2.5rem;
  }
  @media (max-width: 599px){
    margin-bottom: 2rem;
  }
`;

export const InputStyle = styled.input`
  margin-bottom: 1.5rem;
  height: 3.5rem;
  width: 100%;
  border-radius: 4px;
  border: 2px solid ${darkTheme.colors.secondary};
  padding: 0 1rem;
  outline: none;
  background-color: transparent;
  color: ${darkTheme.colors.text};
  font-size: 1.2em;
  &::placeholder{
    color: #f0f4f8be;
  }
  &:focus{
    border-color: ${darkTheme.colors.secondaryLight};
  }
  @media (max-width: 769px){
    margin-bottom: 1rem;
    height: 2.5rem;
    font-size: 1rem;
  }
`;

export const TextareaStyle = styled.textarea`
  width: 100%;
  height: 18rem;
  padding: 1rem;
  background-color: transparent;
  color: ${darkTheme.colors.text};
  outline: none;
  border: 2px solid ${darkTheme.colors.secondary};
  border-radius: 4px;
  resize: none;
  font-size: 1.2em;
  margin-bottom: 1.5rem;
  &::placeholder{
    color: #f0f4f8be;
  }
  &:focus{
    border-color: ${darkTheme.colors.secondaryLight};
  }
  @media (max-width: 769px){
    height: 10rem;
    font-size: 1rem;
  }
`;

export const ButtonSubmit = styled.input`
  width: 100%;
  padding:  1rem 0;
  border-radius: 4px;
  border: 2px solid ${darkTheme.colors.secondary};
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  background-color: transparent;
  color: ${darkTheme.colors.text};
  transition: .8s;
  &:hover{
    border-color: ${darkTheme.colors.secondaryLight};
  }
  @media (max-width: 769px){
    font-size: .8rem;
    padding:  .6rem 0;
  }
`;