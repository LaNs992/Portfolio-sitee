import Project from '../componets/Project/Project';
import { projects } from './../Helpers/projectlist';
const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                img={project.img}
                index={index}
              />
            );
          })}

          <Project />
        </ul>
      </div>
    </main>
  );
};

export default Projects;
