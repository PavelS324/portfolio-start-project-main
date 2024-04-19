import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SkillText>My Tech Stack</SkillText>
                <SkillText>Technologies I’ve been working with recently</SkillText>

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
        <div>
            <Icon iconId={props.iconId} wight="120px" height="120px" />
            <SkillName>{props.nameSkill}</SkillName>
        </div>
    )
}

const StyledSkills = styled.section`
    min-height: 50vh;
`


const SkillText = styled.h2`
    text-align: center;
`

const SkillName = styled.h3`
`


