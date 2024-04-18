import styled from 'styled-components';
import {Logo} from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Menu/>
            </Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
`

