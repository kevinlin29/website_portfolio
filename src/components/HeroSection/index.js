import React, {useState} from 'react';
import {
    ArrowForward, ArrowRight,
    HeroBg,
    HeroBtnWrapper,
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
    VideoBg
} from "./HeroSectionElements";
import Video from "../Video/video.mp4"
import {Button} from "../ButtonElements";




const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

    const [hover1, setHover1] = useState(false);
    const onHover1 = () => {
        setHover1(!hover1);
    }

    const LinkedinClick = () => {
        window.open("https://www.linkedin.com/in/qwlin/");
    };

    const GithubClick = () => {
        window.open("https://github.com/kevinlin29");
    };

        return (

            <HeroContainer id="home">
                <HeroBg>
                    <VideoBg autoPlay={true} loop muted={true} src={Video} type="video/mp4" />

                </HeroBg>
                <HeroContent>
                    <HeroH1>Kevin Lin</HeroH1>
                    <HeroP>
                        University of Waterloo ECE student. Loves to code and explore new challenges
                    </HeroP>
                    <HeroBtnWrapper >

                        <Button to='/' onClick={GithubClick} onMouseEnter={onHover} onMouseLeave={onHover} primary={true} dark="true">
                            Github {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>

                        <Button to='/' onClick={LinkedinClick} onMouseEnter={onHover1} onMouseLeave={onHover1} primary={true} dark="true" >
                            Linkedin {hover1 ? <ArrowForward /> : <ArrowRight />}
                        </Button>

                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>

        );
}

export default HeroSection;