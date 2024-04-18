import styled from 'styled-components';
import {Logo} from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { theme } from '../../styles/Theme';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify='space-between' align='center'>
                    <Logo/>
                    <Menu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    padding: 20px 0;
`

