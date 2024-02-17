import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
    iconId: string
    title: string
    text: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.text}</SkillText>
        </StyledSkill>
    )
}


const StyledSkill = styled.div`
    width: 30%;
    background-color: #b6cfe6;
    border: 5px solid #9aafc2;
    border-radius: 15px;
    margin: 5px;
`

const SkillTitle = styled.h3`
`

const SkillText = styled.p`
`



