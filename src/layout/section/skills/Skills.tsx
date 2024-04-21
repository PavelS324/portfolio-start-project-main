import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";
import { SectionDescribe, SectionName } from "../../../components/SectionsText";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionName>My Tech Stack</SectionName>
                <SectionDescribe>Technologies I’ve been working with recently</SectionDescribe>

                <FlexWrapper align={"center"} justify={"space-around"} wrap="wrap">
                    <Skill nameSkill="HTML" iconId="htmlIcon"/>
                    <Skill nameSkill="CSS" iconId="cssIcon"/>
                    <Skill nameSkill="JS" iconId="jsIcon"/>
                    <Skill nameSkill="TS" iconId="tsIcon"/>
                    <Skill nameSkill="VSCode" iconId="vscodeIcon"/>
                    <Skill nameSkill="GIT hub" iconId="githubIcon"/>
                    <Skill nameSkill="GIT" iconId="gitIcon"/>
                    <Skill nameSkill="React" iconId="reactIcon"/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

type SkillpropsType = {
    nameSkill: string
    iconId: string
}

const Skill = (props: SkillpropsType) => {
    return (
        <StyledSkillBox>
            <Icon iconId={props.iconId} wight="120px" height="120px" />
            <SkillName>{props.nameSkill}</SkillName>
        </StyledSkillBox>
    )
}

const StyledSkills = styled.section`
    min-height: 50vh;
`

const StyledSkillBox = styled.div`
    margin: 30px 5%;
`

const SkillName = styled.h3`
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
`


