import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <StyleLi><StyleLink href="#home">Home</StyleLink></StyleLi>
                <StyleLi><StyleLink href="#about">About</StyleLink></StyleLi>
                <StyleLi><StyleLink href="#skills">Tech Stack</StyleLink></StyleLi>
                <StyleLi><StyleLink href="#projects">Projects</StyleLink></StyleLi>
                <StyleLi><StyleLink href="#contacts">Contact</StyleLink></StyleLi>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }

    @media ${theme.media.tablet} {
        display: none;
    }
`

const StyleLi = styled.li`
    font-family: "DM Sans";
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;

    &:hover {
        transform: scale(1.2);
        transition: 500ms;
    }
`

const StyleLink = styled.a`
    color: ${theme.colors.font};
    &:hover {
        transition: 1500ms;
        color: #f5c9c9;
    }
`

