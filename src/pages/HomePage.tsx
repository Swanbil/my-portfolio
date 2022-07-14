import React, { FC } from 'react';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home: FC<any> = () => {
    return (
        <div>
            <NavBar/>
            <div className="container-fluid">
                <About/>
                <Skills/>
                <Projects />
            </div>
            <Footer/>

        </div>
    )
}

export default Home;