import React, { FC } from 'react';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Skills from '../components/Skills';
const Home: FC<any> = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="container-fluid">
                <h1>Home Page</h1>
                <About></About>
                <Skills></Skills>
            </div>

        </div>
    )
}

export default Home;