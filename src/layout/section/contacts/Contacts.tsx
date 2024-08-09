import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { SectionName } from "../../../components/SectionsText";

export const Contacts = () => {
    return (
        <StyledContacts id={"contacts"}>
            <Container>
                <FlexWrapper direction="column">
                    <SectionName>Contacts</SectionName>

                    <ContactsCenter>
                        <StyledForm>
                            <StyledInput placeholder="Your name" />
                            <StyledInput placeholder="Your email address" />
                            <StyledInput placeholder="Your message" as={"textarea"}/>
                            <StyledButton type={"submit"}>Send message</StyledButton>
                        </StyledForm>

                        <FlexWrapper justify="space-around">
                            <StyledContact iconId="linkedinIcon" />
                            <StyledContact iconId="telegramIcon"/>
                            <StyledContact iconId="viberIcon"/>
                            <StyledContact iconId="phoneIcon"/>
                        </FlexWrapper>
                    </ContactsCenter>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 40vh;
`

const ContactsCenter = styled.div`
    max-width: 400px;
    width: 100%;
    margin: 0 auto;

    div {
        margin-bottom: 25px;
    }
`

const StyledForm = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin: 0 auto 35px;
    padding: 0;
    
    textarea {
        resize: none;
        height: 100px;
    }
`

const StyledInput = styled.input`
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;

    &:focus-visible {
        outline: 3px solid ${theme.colors.buttonsBGC};
    }
`

const StyledButton = styled.button`
    border: 3px solid ${theme.colors.projectBg};
    border-radius: 5px;
    background-color: ${theme.colors.buttonsBGC};
    color: ${theme.colors.font};

    font-family: 'Poppins';
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;

    transition: ${theme.animations.transition};

    &:hover {
        font-size: 18px;
        border-color: ${theme.colors.buttonsBGC};
    transition: 500ms;
    }
`

type StyledContactType = {
    iconId: string
}

const StyledContact = (props: StyledContactType) => {
    return (
        <StyledMessengerLink><Icon iconId={props.iconId} height="30" wight="30"/></StyledMessengerLink>
    )
}

const StyledMessengerLink = styled.a`
    transition: ${theme.animations.transition};

    &:hover {
        transform: scale(1.2);
    }
`


