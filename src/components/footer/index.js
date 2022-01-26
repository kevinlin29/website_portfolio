import React from 'react';
import {
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterWrap,
    MediaLink,
    MediaLinkItems
} from "./footerElements";
import {GithubClick, LinkedinClick} from "../NavBar";

export const InstagramClick = () => {
    window.open("https://github.com/kevinlin29");
};

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/" onClick={GithubClick}>Github</FooterLink>
                            <FooterLink to="/" onClick={LinkedinClick}>Linkedin</FooterLink>
                            <FooterLink to="/" onClick={InstagramClick}>Instagram</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact: </FooterLinkTitle>
                            <FooterLink to="/" >kevin.lin29@outlook.com</FooterLink>
                            <FooterLink to="/" >+1(647)986-0056</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>



            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
