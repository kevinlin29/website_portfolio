import React, {useState, useEffect} from 'react'
import {IconContext} from "react-icons/lib";
import {animateScroll as scroll} from 'react-scroll';
import {
    MobileIcon,
    Nav,
    NavBarContainer,
    NavBtn,
    NavBtnLink,
    NavItem,
    NavLink,
    NavLogo,
    NavMenu
} from "./navBarElements";
import {FaBars} from "react-icons/all";
//import "bootstrap/dist/css/bootstrap.css"

export const LinkedinClick = () => {
    window.open("https://www.linkedin.com/in/qwlin/");
};

export const GithubClick = () => {
    window.open("https://github.com/kevinlin29");
};



const NavBar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }
    
    useEffect(() => {
        window.addEventListener("scroll", changeNav)
        
    }, [])

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>



            <Nav scrollNav={scrollNav}>
                <NavBarContainer>
                    <NavLogo to='' onClick={toggleHome}>Kevin_Lin</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />

                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to='about'
                            smooth={true} duration={500} spy={true} exact={true} offset={-80}
                            >About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='experience' smooth={true} duration={500} spy={true} exact={true} offset={-80}
                            >Experiences</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='projects' smooth={true} duration={500} spy={true} exact={true} offset={-80}
                            >Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='contact' smooth={true} duration={500} spy={true} exact={true} offset={-80}
                            >Contact</NavLink>
                        </NavItem>

                    </NavMenu>


                    <NavBtn>
                        <NavBtnLink to='/' onClick={LinkedinClick}>Linkedin</NavBtnLink>
                        <NavBtnLink to='/pOne' onClick={GithubClick}>Github</NavBtnLink>
                    </NavBtn>


                </NavBarContainer>



            </Nav>

            </IconContext.Provider>
        </>
    )
}

export default NavBar