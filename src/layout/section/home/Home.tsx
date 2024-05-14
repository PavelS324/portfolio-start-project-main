import styled from "styled-components";
import MyPhoto from "../../../assets/images/I.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";

export const Home = () => {
    return (
        <StyledHome>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap="wrap">
                    <HomeBoxText>
                        <HomeHi>Hi There</HomeHi>
                        <HomeName>I am <span>Pavel Sasim</span></HomeName>
                        <HomeTitle>A Front-End Developer</HomeTitle>
                    </HomeBoxText>

                    <StyledPhoto src={MyPhoto} alt="" />
                </FlexWrapper>
            </Container>
        </StyledHome>
    );
};

const StyledHome = styled.section`
    min-height: 70vh;
    display: flex;
`


const StyledPhoto = styled.img`
    width: 350px;
    height: 490px; 
    object-fit: cover;
    border-radius: 10px;
    margin: 18px;
`

const HomeBoxText = styled.div`
    text-align: left;
`

const HomeHi = styled.span`
    ${font({weight: 400, Fmax: 18, Fmin: 14})}
//    font-weight: 400;
//    font-size: 18px;
//    line-height: 21px;
`

const HomeName = styled.h2`
    ${font({weight: 700, Fmax: 50, Fmin: 36})}
//    font-weight: 700;
//    font-size: 50px;
//    line-height: 50px;
    letter-spacing: 5%;
    margin: 10px 0;

    span {
        white-space: nowrap;
    }

    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    }
`

const HomeTitle = styled.h1`
    ${font({weight: 400, Fmax: 27, Fmin: 20})}
//    font-weight: 400;
//    font-size: 27px;
//    line-height: 40.5px;
`


