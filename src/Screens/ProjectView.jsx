import Carousel2 from "../DefaultComponents/ProjectView/Carousel2";
import Header from "../DefaultComponents/ProjectView/Header";

const ContractingPage = ({project}) => {
    const images = Array(project.size).fill(0);
    for (let i = 1; i <= project.size; i++) {
        images[i - 1] = `/Projects/${project.parent}/${project.name}/${i}.jpg`;
        console.log(images[i - 1]);
    }
    



    return(
        <div>
            <Header
                title={project.name}
                description={project.desc}
                parent={project.parent}
                loc={project.loc}
                size={project.area}
                time={project.time}
            />
            <Carousel2 pics={images} description={project.desc}
                parent={project.parent}
                loc={project.loc}
                size={project.area}
                time={project.time}
                title={project.name}/>
        </div>
    );
}

export default ContractingPage