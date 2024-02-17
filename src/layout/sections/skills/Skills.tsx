import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
    return (
        <StuledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap="wrap" justify="center">
                <Skill iconId={"htmlIcon"} title={"HTML 5"} text={"Describe HTML 5"} />
                <Skill iconId={"cssIcon"} title={"CSS 3"} text={"Describe CSS 3"} />
                <Skill iconId={"jsIcon"} title={"JS"} text={"Describe JS"} />
                <Skill iconId={"tsIcon"} title={"TS"} text={"Describe TS"} />
                <Skill iconId={"reactIcon"} title={"React"} text={"Describe React"} />
                <Skill iconId={"vscodeIcon"} title={"VS Code"} text={"Describe VS Code"} />
                <Skill iconId={"githubIcon"} title={"Git Hub"} text={"Describe Git Hub"} />
                <Skill iconId={"gitIcon"} title={"Git"} text={"Describe Git"} />
            </FlexWrapper>
        </StuledSkills>
    )
}


const StuledSkills = styled.section`
    background-color: #bbaaac;
    min-height: 100vh;
`





