import Header from '../DefaultComponents/Projects/Header';
import ProjectsPreview from '../DefaultComponents/Projects/ProjectsPreview';

const ProjectsPage = ({title, description, benefits, img, path, projects}) => {
    return(
        <div>
            <Header benefits={benefits} description={description} title={title} bgImageUrl={img}/>
            <ProjectsPreview  path={path} projects={projects}/>
        </div>
    );
}

export default ProjectsPage