import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import projectLink from "../../../assets/images/projects/projectLink.webp";
import projectGitHub from "../../../assets/images/projects/projectGitHub.webp";
import project_01 from "../../../assets/images/projects/Project_01.webp";
import project_02 from "../../../assets/images/projects/Project_02.webp";
import { Container } from "../../../components/Container";
import { SectionDescribe, SectionName } from "../../../components/SectionsText";
import { theme } from "../../../styles/Theme";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionName>Projects</SectionName>
                <SectionDescribe>Things I’ve built so far</SectionDescribe>

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
            <ProjectDescribeBox>
                    <ProjectDescribeText>
                        <ProjectName>{props.nameProject}</ProjectName>
                        <ProjectDescribe>{props.describeProject || ''}</ProjectDescribe>
                        <ProjectDescribeTeck>{props.stackProject || ''}</ProjectDescribeTeck>
                    </ProjectDescribeText>
                    <ProjectBottomsPosition>
                        <FlexWrapper justify="space-around">
                            <StyleProjektLinks>
                                <FlexWrapper align="flex-center">
                                    <ProjectLincImg src={projectLink} alt=""/>
                                    <ProjectLinc>Live Preview</ProjectLinc>
                                </FlexWrapper>
                            </StyleProjektLinks>
                            <StyleProjektLinks>
                                <FlexWrapper align="flex-center">
                                    <ProjectLincImg src={projectGitHub} alt=""/>
                                    <ProjectLinc>View Code</ProjectLinc>
                                </FlexWrapper>
                            </StyleProjektLinks>
                        </FlexWrapper>
                    </ProjectBottomsPosition>
            </ProjectDescribeBox>
        </ProjectBox>
    )
}

const StyledProjects = styled.section`
    min-height: 70vh;
`

const ProjectBox = styled.div`
    display: inline-block;
    position: relative;
    min-height: 500px;
    height: 100%;
    background-color: ${theme.colors.projectBg};
    border-radius: 20px;
`

const ProjectImg = styled.img`
    width: 375px;
    height: 260px;
    gap: 0px;
    border-radius: 20px 20px 0px 0px;
`

const ProjectDescribeBox = styled.div`
    position: relative;
    width: 100%;
    height: 240px;
    padding: 15px 25px;
    //background-color: #752c2cb0;
`

const ProjectDescribeText = styled.div`
`

const ProjectBottomsPosition = styled.div`
    display: block;
    width: calc(100% - 50px);
    position: absolute;
    bottom: 10px;
`

const ProjectName = styled.h3`
    font-weight: 500;
    font-size: 28px;
    line-height: 26px;
`

const ProjectDescribe = styled.h3`
    font-weight: 300;
    font-size: 18px;
    line-height: 26px;
`

const ProjectDescribeTeck = styled.h3`
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
`

const StyleProjektLinks = styled.div`
    &:hover {
        transform: scale(1.1);
        transition: 500ms;
    }
`


const ProjectLincImg = styled.img`
    width: 20px;
    height: 20px;
`

const ProjectLinc = styled.a`
    width: 96px;
    height: 26px;

    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
`


