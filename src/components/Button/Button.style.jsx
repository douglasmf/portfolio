import styled from "styled-components";
import {darkTheme} from '../../themes/Themes'

export const ButtonStyle = styled.a`
    color: ${darkTheme.colors.text};
    font-weight: bold;
    background-color: ${darkTheme.colors.secondary};
    font-size: 1.5rem;
    padding: .8rem 1.5rem;
    border-radius: 1rem;
    transition: all .8s;
    &:hover{
        background-color: ${darkTheme.colors.secondaryDark};
    }
`;