import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SidebarRoute, SideBtnWrap} from "./SideBarElements";


const LinkedinClick = () => {
    window.open("https://www.linkedin.com/in/qwlin/");
};

const GithubClick = () => {
    window.open("https://github.com/kevinlin29");
};

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={ toggle }>
            <Icon onClick={ toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu >
                    <SidebarLink to = 'about' onClick={ toggle}>About</SidebarLink>
                    <SidebarLink to = 'experience' onClick={ toggle}>Experiences</SidebarLink>
                    <SidebarLink to = 'projects' onClick={ toggle}>Projects</SidebarLink>
                    <SidebarLink to = 'contact' onClick={ toggle}>Contact Me</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/' onClick={LinkedinClick}>Linkedin</SidebarRoute>
                </SideBtnWrap>
                <SideBtnWrap>
                    <SidebarRoute to='/' onClick={GithubClick}>Github</SidebarRoute>
                </SideBtnWrap>

            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;