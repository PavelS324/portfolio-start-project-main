import styled from 'styled-components';
import { Menu } from '../../components/menu/Menu';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify='center'>
                    <Menu/>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    div {
        padding: 5px;
    }
`

