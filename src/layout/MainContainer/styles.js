import styled from "styled-components";
import {darkTheme} from '../../themes/Theme'

export const MainContent = styled.main`
  margin-left: 280px;
  width: calc(100% - 280px);
  background-color: ${darkTheme.colors.bgMedium};
  @media (max-width: 1024px) {
    margin-left: 0;
    width: 100%;
  }
`;