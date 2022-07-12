import React, { FC } from 'react';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
const Home: FC<any> = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="container-fluid">
                <About></About>
                <Skills></Skills>
                <Projects></Projects>
            </div>

        </div>
    )
}

export default Home;