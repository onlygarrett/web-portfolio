import s from './Projects.module.scss';
import ProjectInfo from './ProjectInfo'
import Base from '../../templating/Base/Base'
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <Base>
      <div className={s.content}>
        <h1 className={s.title}>
          My Recent <strong className={s.purple}>Works</strong>
        </h1>
        <p className={s.subtitle}>
          Here are a few projects I've worked on recently.
        </p>

        <ul className={s.projects}>
          {ProjectInfo.map((props) => (
            <ProjectCard key={props.id} {...props} />
          ))}
        </ul>
      </div>
    </Base>
  );
};

export default Projects;