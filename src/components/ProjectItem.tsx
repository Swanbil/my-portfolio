import { FC } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { Project } from "./Projects";
import "../style/ProjectItem.css";

type ProjectProps = {
    project: Project
}
const ProjectItem: FC<any> = ({ project }: ProjectProps) => {
    return (
        <Card className="card-item" >
            <Carousel interval={null}>
                <Carousel.Item>
                    <img
                        className="d-block img-slide"
                        src={process.env.PUBLIC_URL + project.images[0]}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-slide"
                        src={project.images[1]}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-slide"
                        src={project.images[2]}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Card.Body>
                <Card.Title className="card-title">{project.title}</Card.Title>
                <Card.Text className="card-description">{project.description}</Card.Text>
                {project.link !== undefined ?<Card.Link className="card-link" href={project.link} target='_blank'>{project.link}</Card.Link>:""}
                <div>
                    {project.languages.map((language) => {
                        return (
                            <span key={language} className="badge badge-item mx-1">{language}</span>
                        )
                    })}
                </div>
            </Card.Body>
        </Card>
    )
}

export default ProjectItem;