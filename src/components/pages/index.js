import React, {useState} from 'react';
import Sidebar from '../SideBar';
import NavBar from '../NavBar';
import HeroSection from "../HeroSection";
import {home, experienceOne, experienceTwo, experienceThree} from "../homepage/data";
import InfoSection from "../homepage/info";
import ExperienceSection from "../homepage/experiences";
import Projects from "../projects";
import {ContactUs} from "../homepage/contact";
import Footer from "../footer";


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <Sidebar isOpen = {isOpen} toggle = {toggle}/>
            <NavBar toggle = {toggle} />
            <HeroSection />
            <InfoSection {...home}/>
            <ExperienceSection {...experienceOne}/>
            <ExperienceSection {...experienceTwo}/>
            <ExperienceSection {...experienceThree}/>
            <Projects />
            <ContactUs />
            <Footer />

        </>
    );
};

export default Home;
