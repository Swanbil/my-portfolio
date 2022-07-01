import { FC, useState } from 'react';
import "../style/Skills.css";
import techStacks from "../datas/skills.json";
import categoriesStacks from "../datas/categories.json";
import SkillItem from './SkillItem';
import {FaCode, FaDatabase, FaMobile, FaListAlt} from 'react-icons/fa';
import {MdExtension} from "react-icons/md";
import {GoBrowser} from "react-icons/go";

export type Language = {
    id: number,
    name : string,
    image : string,
    category : string,
    rate : number
};

export type Category = {
    id: number,
    name : string
};

const Skills : FC<any> = () => {
    const [skills, setSkills] = useState<Language[]>(techStacks);
    const [skillsDisplaying, setSkillsDisplaying] =  useState<Language[]>(techStacks);
    const [categories, setCategories] = useState<Category[]>(categoriesStacks);
    const [categoriesIcons] = useState<any>([<FaListAlt/>,<GoBrowser/>,<FaCode/>,<MdExtension/>,<FaDatabase/>,<FaMobile/>]);
    const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);
    let className : string;

    const changeSkillsDisplaying = (id : number) => {
        const selectedCategory = categories.find(category => category.id === id) as Category;
        if(selectedCategory.name === "All"){
            setSkillsDisplaying(skills);
        }
        else{
            setSkillsDisplaying(skills.filter((skill) => skill.category === selectedCategory.name));
        }
        setSelectedCategory(selectedCategory);
    }

    return(
        <div className='container skills'>
            <h4 style={{color:"#957AE3", fontWeight:"bold"}} id="skills">⌨️ Skills</h4>
            <div className='categories'>
                {categories.map((category) => {
                    className = (category===selectedCategory)?"category-selected":"category";
                    return(
                        <button className={className} key={category.id} onClick={() => changeSkillsDisplaying(category.id)}>
                            <div className='mx-2'>{categoriesIcons[category.id]}</div>
                            <div>{category.name}</div>
                        </button>
                    )
                })}
            </div>
            <div className="all-skills">
                {skillsDisplaying.map((skill) => {
                    return(
                        <SkillItem key={skill.id} skill={skill} />
                    )
                })}

            </div>

        </div>

    );
}

export default Skills;