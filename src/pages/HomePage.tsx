import React, { FC } from 'react';
import NavBar from '../components/NavBar';


const Home: FC<any> = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h1>Home Page</h1>
        </div>
    )
}

export default Home;