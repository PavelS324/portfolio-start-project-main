import styled from "styled-components";
import { Container } from "../../../components/Container";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <StyledDescription>
                    <AboutName>About me</AboutName>
                    <AboutParagraph>About myself I can say that I am always ready to learn new things and improve my working skills. I always try to complete projects accurately and on time. At work, I am attentive and focused. In my spare time, I prefer to spend time actively with my family and friends. I like snowboarding and river rafting.</AboutParagraph>

                    <AboutName>Work Experience</AboutName>
                    <AboutUl>
                        <AboutLi>Since 2011 I have been working as a 1C programmer.</AboutLi>
                        <AboutLi>Since 2024 I am stydent in "It-Incubator"</AboutLi>
                    </AboutUl>

                    <AboutName>Education</AboutName>
                    <AboutUl>
                        <AboutLi>University: Belarusian National Technical University</AboutLi>
                        <AboutLi>It-Incubator</AboutLi>
                    </AboutUl>
                </StyledDescription>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    min-height: 50vh;
`

const StyledDescription = styled.div`
    max-width: 50%;
`


const AboutName = styled.h2`
    font-weight: 700;
    font-size: 42px;
    line-height: 52px;
`

const AboutParagraph = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
`

const AboutUl = styled.ul`
`

const AboutLi = styled.li`
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
`


