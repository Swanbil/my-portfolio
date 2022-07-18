import { FC } from "react";
import { Language } from "./Skills";
import "../style/SkillItem.css";
import {AiFillStar} from "react-icons/ai";
type LanguageProps = {
    skill: Language
}
const SkillItem: FC<any> = ({ skill }: LanguageProps) => {
    
    return (
        <div className="skill-item">
            <div className="skill-left">
                <img src={skill.image} className="skill-img" alt="skill-image" />
            </div>
            <div className="skill-right">
                <div className="skill-title">{skill.name}</div>
                <div className="skill-category">{skill.category}</div>
                <div className="skill-rate">{[...Array(skill.rate)].map((e, i) => <AiFillStar key={i} style={{color:"#FDE835", marginRight:"2px", fontSize:"12px"}}/>)}</div>
            </div>

        </div>
    );
}

export default SkillItem;