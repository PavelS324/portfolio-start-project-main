import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <StyleLi><StyleLink href="">Home</StyleLink></StyleLi>
                <StyleLi><StyleLink href="">About</StyleLink></StyleLi>
                <StyleLi><StyleLink href="">Tech Stack</StyleLink></StyleLi>
                <StyleLi><StyleLink href="">Projects</StyleLink></StyleLi>
                <StyleLi><StyleLink href="">Contact</StyleLink></StyleLi>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
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
    &:hover {
        transition: 500ms;
        color: red;
    }
`

