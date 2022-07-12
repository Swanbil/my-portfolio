import React, { FC, useState } from 'react';
import ProjectItem from "./ProjectItem";
import "../style/Projects.css";
import allProjects from "../datas/projects.json";

export type Project = {
    id: number,
    title: string,
    description: string,
    languages: Array<string>,
    link?: string,
    images: Array<string>
};

const Projects: FC<any> = () => {
    const [projects] = useState<Array<Project>>(allProjects);
    return (
        <div className="container projects">
            <h4 style={{ color: "#957AE3", fontWeight: "bold" }} id="projects">🚧 Projects</h4>
            <div className="all-projects">
                {projects.map((project) => {
                    return(
                        <ProjectItem key={project.id} project={project}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;