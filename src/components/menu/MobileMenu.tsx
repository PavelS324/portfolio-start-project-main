import React, { useState } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";

export const MobileMenu = () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => { setmenuIsOpen( !menuIsOpen ) }
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={menuIsOpen} onClick={ onBurgerBtnClick }>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={menuIsOpen} onClick={ ()=>{setmenuIsOpen(false)} }>
                <ul>
                    <StyleLi><StyleLink href="#home">Home</StyleLink></StyleLi>
                    <StyleLi><StyleLink href="#about">About</StyleLink></StyleLi>
                    <StyleLi><StyleLink href="#skills">Tech Stack</StyleLink></StyleLi>
                    <StyleLi><StyleLink href="#projects">Projects</StyleLink></StyleLi>
                    <StyleLi><StyleLink href="#contacts">Contact</StyleLink></StyleLi>
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
    z-index: 999;
    transition: ${theme.animations.transition};

    &:hover {
        transform: scale(1.5);
    }
    
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
    z-index: 99;
    background-color: rgba(31, 31, 32, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: ${theme.animations.transition};

    ul {
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: ${theme.animations.transition};
    }

    ${props => props.isOpen && css<{isOpen: boolean}> `
        transform: translateY(0);

        & ul {
            gap: 50px;
        }
    `}
`

const StyleLi = styled.li`
    font-family: "DM Sans";
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    transition: ${theme.animations.transition};

    &:hover {
        transform: scale(1.2);
    }
`

const StyleLink = styled.a`
    color: ${theme.colors.font};
    transition: ${theme.animations.transition};

    &:hover {
        color: #f5c9c9;
    }
`

