import s from './Projects.module.scss';
import ProjectInfo from './ProjectInfo'
import Base from '../../templating/Base/Base'
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <Base>
      <div className={s.content}>
        <h1 className={s.title}>
          My Recent <strong className={s.purple}>Projects</strong>
        </h1>
        <p className={s.subtitle}>
          Here are a personal development projects that I have been
          worked on in the past. Some are completed projects while some are ideas that I have conceptualized to learn new skills.
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