import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";

const worksitems = ["ALL", "Landing Page", "Project 1"  ]

export const Works = () => {
    return (
        <StuledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksitems} />
            <FlexWrapper justify="space-around">
                <Work title="Proj 1" text="Describe Proj 1" src=""/>
                <Work title="Proj 2" text="Describe Proj 2" src=""/>
            </FlexWrapper>
        </StuledWorks>
    )
}


const StuledWorks = styled.div`
    min-height: 100vh;
    background-color: #bbbfc4;
`


