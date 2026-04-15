import styled from "styled-components";
import {darkTheme} from '../../themes/Theme'

export const Section = styled.section`
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

export const TitleWrapper = styled.div`
  margin-bottom: 48px;

  h2 {
    font-size: 32px;
  }

  div {
    width: 60px;
    height: 3px;
    background: ${darkTheme.colors.primary};
    margin-top: 8px;
  }
`;

export const Carousel = styled.div`
  position: relative;
  overflow: hidden;
  height: 500px;
  border-radius: 12px;
  border: 3px solid ${darkTheme.colors.primary};
  @media (max-width: 600px) {
    height: 300px;
  }
`;

export const Slides = styled.div`
  display: flex;
  height: 100%;
  transition: transform 0.6s ease;
  width: 100%;
`;

export const Slide = styled.div`
  width: 100%;
  flex-shrink: 0;
  height: 100%;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.6);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 32px;

  background: linear-gradient(
    to top,
    rgba(0,0,0,0.8),
    rgba(0,0,0,0.2),
    transparent
  );
`;

export const Content = styled.div`
  max-width: 600px;
  animation: fadeIn 0.5s ease;

  h3 {
    font-size: 24px;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    opacity: 0.9;
    margin-bottom: 16px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @media (max-width: 600px) {
    h3{
      font-size: 20px;
    }
    p{
      font-size: 12px;
    }
  }

`;

export const Buttons = styled.div`
  display: flex;
  gap: 12px;

  a {
    padding: 10px 18px;
    border-radius: 6px;
    font-size: 14px;
    text-decoration: none;
    transition: 0.3s;
  }

  a:first-child {
    background: ${darkTheme.colors.primary};
    color: #000;
  }

  a:last-child {
    border: 1px solid ${darkTheme.colors.text};
  }
  @media (max-width: 600px) {
    a{
      padding: 8px 16px;
      font-size: 12px;
    }
  }

`;

export const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ left }) => left && "left: 16px"};
  ${({ left }) => !left && "right: 16px"};

  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: none;

  font-size: 24px;
  cursor: pointer;

  background: rgba(0,0,0,0.5);
  color: white;

  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "all")};
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  gap: 8px;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #aaa;
    cursor: pointer;
  }

  .active {
    background: ${darkTheme.colors.primary};
  }
`;
