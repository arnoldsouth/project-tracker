import { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

// Create a reusable list component

// Create interface to define the properties that come into the component
interface ProjectListProps {
  projects: Project[];
}

// Create a functional component that takes `projects` array as a prop
const ProjectList = ({ projects }: ProjectListProps) => {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    // console.log(project);
    setProjectBeingEdited(project);
  };

  return (
    <>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="cols-sm">
            {project === projectBeingEdited ? (
              <ProjectForm />
            ) : (
              <ProjectCard project={project} onEdit={handleEdit} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectList;
