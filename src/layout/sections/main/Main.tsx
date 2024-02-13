import React from "react";
import styled from "styled-components";
import myPhoto from "../../../assets/images/I.jpg"
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StuledMain>
            <FlexWrapper aling={"center"} justify={"space-around"}>
                <div>
                    <span>Hi there</span>
                    <Name>I am Pavel Sasim</Name>
                    <MainTitle>A Front-end Developer</MainTitle>
                </div>
                
                <MyPhoto src={myPhoto} alt="" />
            </FlexWrapper>
        </StuledMain>
    )
}


const MyPhoto = styled.img`
    width: 500px;
    height: 700px;
    object-fit: cover;
`

const StuledMain = styled.div`
    min-height: 100vh;
    background-color: #c9cccf;
`

const MainTitle = styled.h1`
    
`

const Name = styled.h2`
    
`

