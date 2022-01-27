import React, { useRef } from 'react';
import emailjs, {send} from 'emailjs-com';
import {
    BtnWrap,
    Column1,
    Column2,
    FormContainer,
    FormRow,
    FormWrapper, Heading,
    Img,
    ImgWrap, Input, Input1
} from "./aboutElements";
import img from "../images/contact.svg"
import alt from "../images/email.svg"
import {Button} from "../ButtonElements";

//import 'bootstrap/dist/css/bootstrap.min.css';

export const ContactUs = () => {
    const form = useRef();

     const resetF = () => {
        document.getElementById("formf").reset();
    }

    const sendEmail = (e) => {
        e.preventDefault();
        resetF();


        emailjs.sendForm(
            'service_u67dg4d',
            'template_xop1ejd',
            'contact',
            'user_922dBCSajQnmLI3vKaq2f')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };



    return (

        <FormContainer id={'contact'} lightBg={true}>
            <FormWrapper>
                <FormRow imgStart={true}>
                    <Column1>
                        <Heading>Contact Me</Heading>

                        <form id={"formf"} ref={form} onSubmit={sendEmail}>
                            <Input type="text" name="from_name" placeholder={"Name"}/>
                            <Input  type="email" name="from_email" placeholder={"Email"}/>
                            <Input1  name="message" placeholder={"Message"} />
                            <BtnWrap>
                                <Button type='submit' value='Send' onClick={sendEmail} >Send</Button>
                            </BtnWrap>
                        </form>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img}  alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </FormRow>
            </FormWrapper>
        </FormContainer>

    );
};