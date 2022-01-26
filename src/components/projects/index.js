import React from 'react';

import Icon1 from '../images/website.svg'
import Icon2 from '../images/data.svg'
import Icon3 from '../images/resume.svg'

import resume from '../../files/Resume 2021.pdf'

import {
    ProjectCard,
    ProjectH2,
    ProjectIcon,
    ProjectP,
    ProjectsContainer,
    ProjectsH1,
    ProjectsWrapper
} from "./projectElements";
import {Buttona, ButtonR} from "../ButtonElements";
import {animateScroll as scroll} from "react-scroll";

export const dataProjectClick = () => {
    window.open("https://htmlpreview.github.io/?https://github.com/kevinlin29/Bellabeat_CaseStudy/blob/main/case_study_1.html");
};

const Projects = () => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
        <>
            <ProjectsContainer id='projects'>
                <ProjectsH1>Projects and Resumé</ProjectsH1>
                <ProjectsWrapper>
                    <ProjectCard>
                        <ProjectIcon src={Icon1}/>
                        <ProjectH2>Portfolio Website</ProjectH2>
                        <ProjectP>
                            Website built with react and custom components
                        </ProjectP>
                        <ButtonR to={"/"} onClick={toggleHome}>This Site</ButtonR>
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectIcon src={Icon2}/>
                        <ProjectH2>Data Analytics Project</ProjectH2>
                        <ProjectP>Google Data Analytics capstone project</ProjectP>
                        <ButtonR to={"/"} onClick={dataProjectClick}>View</ButtonR>

                    </ProjectCard>
                    <ProjectCard>
                        <ProjectIcon src={Icon3}/>
                        <ProjectH2>Resumé</ProjectH2>
                        <ProjectP>Download my complete resumé</ProjectP>
                        <Buttona href={resume} download>Download</Buttona>


                    </ProjectCard>

                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    );
};

export default Projects;
