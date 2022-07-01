import { FC, useState } from 'react';
import "../style/Skills.css";
import techStacks from "../datas/skills.json";
import SkillItem from './SkillItem';

export type Language = {
    id: number,
    name : string,
    image : string,
    category : string,
    rate : number
}
const Skills : FC<any> = () => {
    const [skills, setSkills] = useState<Language[]>(techStacks);

    return(
        <div className='container skills'>
            <h4 style={{color:"#957AE3", fontWeight:"bold"}} id="skills">⌨️ Skills</h4>
            <div className="all-skills">
                {skills.map((skill) => {
                    return(
                        <SkillItem key={skill.id} skill={skill} />
                    )
                })}

            </div>

        </div>

    );
}

export default Skills;