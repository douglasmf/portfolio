import styled from "styled-components";
import { darkTheme } from "../../themes/Theme";

export const ContactSection = styled.section`
  padding: 96px 80px;
  background: ${darkTheme.colors.bgLight};
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

export const Content = styled.div`
  display: flex;
  gap: 64px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 48px;
  }
`;


// 🔹 FORMULÁRIO

export const Form = styled.form`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.input`
  padding: 14px 16px;
  border-radius: 8px;

  border: 1px solid rgba(255,255,255,0.08);

  background: ${darkTheme.colors.bgMedium};
  color: ${darkTheme.colors.text};

  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${darkTheme.colors.primary};
  }
`;

export const TextArea = styled.textarea`
  padding: 14px 16px;
  border-radius: 8px;

  border: 1px solid rgba(255,255,255,0.08);

  background: ${darkTheme.colors.bgMedium};
  color: ${darkTheme.colors.text};

  font-size: 14px;

  min-height: 120px;
  resize: none;

  &:focus {
    outline: none;
    border-color: ${darkTheme.colors.primary};
  }
`;

export const Button = styled.button`
  margin-top: 8px;

  padding: 12px 20px;

  border-radius: 8px;
  border: none;

  font-size: 14px;
  font-weight: 500;

  background: ${darkTheme.colors.primary};
  color: ${darkTheme.colors.text};

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;


// 🔹 INFO / LINKS

export const Info = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 24px;
  color: ${darkTheme.colors.text};
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;

  font-size: 16px;
  text-decoration: none;

  color: ${darkTheme.colors.text};

  padding: 12px 16px;

  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.05);

  transition: 0.3s;

  svg {
    font-size: 18px;
    color: ${darkTheme.colors.primary};
  }

  &:hover {
    border-color: ${darkTheme.colors.primary};
    transform: translateX(4px);
  }
`;