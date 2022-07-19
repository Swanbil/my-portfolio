import { FC } from "react";
import "../style/About.css";

const About: FC<any> = () => {
    return (
        <div className="container about" >
            <h4 style={{color:"#957AE3", fontWeight:"bold"}} id="about">👋 About</h4>
            <div className="all-about">
                <div className="left-about">
                    <img className="profile-img" src="https://i.pinimg.com/originals/6c/bb/5d/6cbb5d0873b79fd92158e3f2b038fa11.jpg" alt="profile-pic"/>
                </div>
                <div className="right-about">
                    <p className="about-p">
                        My name is <span style={{color:"#957AE3", fontWeight:"bold"}}>Swan</span>, I'm currently majoring in software enginneering in a master one level, at Efrei Paris school .<br />
                        I'am interested in computer science for 5 years and most particulary in web development.<br />
                        I have been developing personal projects as school projects for 4 years now.<br />
                        About my other hobbies, I'm practicing soccer for 11 years and I'am the first support of the french soccer team of Marseille.<br />
                        I also love watching animes, reading mangas and listening to music.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;