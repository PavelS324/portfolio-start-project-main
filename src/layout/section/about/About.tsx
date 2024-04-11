import styled from "styled-components";

export const About = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <AboutName>About me</AboutName>
                <AboutParagraph>About myself I can say that I am always ready to learn new things and improve my working skills. I always try to complete projects accurately and on time. At work, I am attentive and focused. In my spare time, I prefer to spend time actively with my family and friends. I like snowboarding and river rafting.</AboutParagraph>

                <AboutName>Work Experience</AboutName>
                <ul>
                    <li>Since 2011 I have been working as a 1C programmer.</li>
                    <li>Since 2024 I am stydent in "It-Incubator"</li>
                </ul>

                <AboutName>Education</AboutName>
                <ul>
                    <li>University: Belarusian National Technical University</li>
                    <li>It-Incubator</li>
                </ul>
            </StyledDescription>
        </StyledAbout>
    );
};

const StyledAbout = styled.div`
    min-height: 50vh;
    background-color: #597a97;
    color: #fff;
`

const StyledDescription = styled.div`
    max-width: 50%;
`


const AboutName = styled.h2`
    
`

const AboutParagraph = styled.p`
    
`


