import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import projectLink from "../../../assets/images/projects/projectLink.webp";
import projectGitHub from "../../../assets/images/projects/projectGitHub.webp";
import project_01 from "../../../assets/images/projects/Project_01.webp";
import project_02 from "../../../assets/images/projects/Project_02.webp";
import { Container } from "../../../components/Container";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <ProjectsText>Projects</ProjectsText>
                <ProjectsText>Things I’ve built so far</ProjectsText>

                <FlexWrapper align={"start"} justify={"space-around"} wrap="wrap">
                    <Project nameProject="Project 1" 
                            imgSrc={project_01} 
                            describeProject="Project 1 describe text" 
                            stackProject="Teck stack: HTML, CSS, React"/>
                    <Project nameProject="Project 2" 
                            imgSrc={project_02}/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

type SkillpropsType = {
    imgSrc: string
    nameProject: string
    describeProject?: string
    stackProject?: string
}

const Project = (props: SkillpropsType) => {
    return (
        <ProjectBox>
            <ProjectImg src={props.imgSrc}/>
            <ProjectName>{props.nameProject}</ProjectName>
            <ProjectDescribe>{props.describeProject || ''}</ProjectDescribe>
            <ProjectDescribe>{props.stackProject || ''}</ProjectDescribe>
            <FlexWrapper justify="space-between">
                <FlexWrapper align="center">
                    <ProjectLincImg src={projectLink} alt=""/>
                    <ProjectLinc>Live Preview</ProjectLinc>
                </FlexWrapper>
                <FlexWrapper align="center">
                    <ProjectGitHubImg src={projectGitHub} alt=""/>
                    <ProjectLinc>View Code</ProjectLinc>
                </FlexWrapper>
            </FlexWrapper>
        </ProjectBox>
    )
}

const StyledProjects = styled.div`
    min-height: 70vh;
`


const ProjectsText = styled.h2`
    text-align: center;
`

const ProjectBox = styled.div`
    
`

const ProjectImg = styled.img`
    width: 375px;
    height: 260px;
    gap: 0px;
    border-radius: 20px 20px 0px 0px;
`

const ProjectName = styled.h3`
`

const ProjectDescribe = styled.h3`
`

const ProjectLincImg = styled.img`
    width: 20px;
    height: 20px;
`

const ProjectGitHubImg = styled.img`
    width: 20px;
    height: 20px;
`

const ProjectLinc = styled.a`
    width: 96px;
    height: 26px;
`


