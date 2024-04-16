import styled from 'styled-components';
import {Logo} from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';

export const Footer = () => {
    return (
        <StyledFooter>
            <Menu/>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    background-color: #597a97;
    display: flex;
    justify-content: space-between;
`

