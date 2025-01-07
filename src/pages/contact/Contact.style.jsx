import styled from "styled-components";

export const ContactStyle = styled.section`
  height: 100svh;
  width: 100%;
  @media(max-width:769px){
    height: 85svh;
    
  }
`;

export const ContactContainer = styled.div`
  height: 88svh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7%
`;

export const ContactContain = styled.div`
  height: 60svh;
  display: flex;
  width:100%;
  justify-content: space-between;
  @media (max-width: 769px){
    height: 80svh;
    flex-direction: column;
  }

`;