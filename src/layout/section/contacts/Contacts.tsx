import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";

export const Contacts = () => {
    return (
        <StyledContacts>
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
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 40vh;
    background-color: #597a97;
    color: #fff;
`

const StyledContactsText = styled.h2`
    text-align: center;
    color: #fff;
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
    color: #fff;
`

const StyledInput = styled.input`
    color: #000;
`

const StyledButton = styled.button`
    
`

type StyledContactType = {
    iconId: string
}

const StyledContact = (props: StyledContactType) => {
    return (
        <a><Icon iconId={props.iconId} height="30" wight="30"/></a>
    )
}



