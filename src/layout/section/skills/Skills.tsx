import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";

export const Skills = () => {
    return (
        <StyledSkills>
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

const StyledSkills = styled.div`
    min-height: 50vh;
    background-color: #597a97;
`


const SkillText = styled.h2`
    text-align: center;
    color: #fff;
`

const SkillName = styled.h3`
    color: #fff;
`


