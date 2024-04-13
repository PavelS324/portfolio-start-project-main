import styled from "styled-components";
import MyPhoto from "../../../assets/images/I.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Home = () => {
    return (
        <StyledHome>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <HomeName>I am Pavel Sasim</HomeName>
                    <HomeTitle>A Front-End Developer</HomeTitle>
                </div>

                <StyledPhoto src={MyPhoto} alt="" />
            </FlexWrapper>
        </StyledHome>
    );
};

const StyledHome = styled.div`
    min-height: 70vh;
    background-color: #597a97;
    color: #fff;
`


const StyledPhoto = styled.img`
    width: 250px;
    height: 350px; 
    object-fit: cover;
`

const HomeTitle = styled.h1`
    
`

const HomeName = styled.h2`
    
`


