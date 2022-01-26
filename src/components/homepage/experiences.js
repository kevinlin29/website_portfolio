import React from 'react';
import {Button} from "../ButtonElements";
import {
    InfoContainer, InfoRow, ExperienceWrapper, Column1, Column2, TextWrapper, TopLine,
    Heading, Subtitle, BtnWrap, ImgWrap, Img, Body
} from "./aboutElements";

const ExperienceSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText,
                               description, buttonLabel, buttonPath, img, alt, primary, dark, dark2, subtitle, ofset
                           }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <ExperienceWrapper>
                    <InfoRow imgStart = {imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText = {lightText} >{headLine}</Heading>
                                <Subtitle darkText = {darkText} >{subtitle}</Subtitle>
                                <Body darkText = {darkText} >{description}</Body>

                                <BtnWrap>
                                    <Button to={buttonPath}
                                            smooth = {true}
                                            duration = {500}
                                            spy={true}
                                            exact={true}
                                            offset={ofset}
                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1 : 0}
                                            dark2={dark2 ? 1 : 0}

                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img}  alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </ExperienceWrapper>
            </InfoContainer>
        </>
    );
};

export default ExperienceSection;
