import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";

export const MobileMenu = () => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={false}>
                <ul>
                    <StyleLi><StyleLink href="">Home</StyleLink></StyleLi>
                    <StyleLi><StyleLink href="">About</StyleLink></StyleLi>
                    <StyleLi><StyleLink href="">Tech Stack</StyleLink></StyleLi>
                    <StyleLi><StyleLink href="">Projects</StyleLink></StyleLi>
                    <StyleLi><StyleLink href="">Contact</StyleLink></StyleLi>
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
        width: 100px;
        height: 100px;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    width: 100px;
    height: 100px;
    right: 15px;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{isOpen: boolean}> `
            background-color: rgba(255, 255, 255, 0);
        `}

        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen: boolean}> `
                transform: rotate(-45deg) translateY(0);
            `}

        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}> `
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}

        }
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(31, 31, 32, 0.9);
    display: none;

    ${props => props.isOpen && css<{isOpen: boolean}> `
        display: flex;
        justify-content: center;
        align-items: center;
    `}

    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
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

