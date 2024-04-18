import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper direction="column">
                    <StyledContactsText>Contacts</StyledContactsText>

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

const StyledContactsText = styled.h2`
    text-align: center;
`

const ContactsCenter = styled.div`
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
`

const StyledForm = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin: 0 auto;
    padding: 0;
`

const StyledInput = styled.input`
`

const StyledButton = styled.button`
    border: 3px solid ${theme.colors.projectBg};
    color: ${theme.colors.projectBg};
`

type StyledContactType = {
    iconId: string
}

const StyledContact = (props: StyledContactType) => {
    return (
        <a><Icon iconId={props.iconId} height="30" wight="30"/></a>
    )
}



