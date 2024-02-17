import React from "react";
import styled from "styled-components";

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StuledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>demo</Link>
            <Link href={"#"}>code</Link>
        </StuledWork>
    )
}


const StuledWork = styled.div`
    background-color: #d1dae2;
    max-width: 540px;
    width: 100%;
`

const Image = styled.img`
    width: 100px;
    height: 50px;
    object-fit: cover;
`

const Title = styled.h3`
    
`

const Text = styled.p`
    
`

const Link = styled.a`
    
`

