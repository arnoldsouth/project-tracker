import { SyntheticEvent, useState } from 'react';
import { Project } from './Project';

interface ProjectFormProps {
  project: Project;
  onCancel: () => void;
  onSave: (project: Project) => void;
}

const ProjectForm = ({
  project: initialProject,
  onCancel,
  onSave,
}: ProjectFormProps) => {
  const [project, setProject] = useState(initialProject);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSave(project);
  };

  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;
    // if input type is checkbox use checked, otherwise it's type is text, number etc. so use value
    let updatedValue = type === 'checkbox' ? checked : value;

    // if input type is a number, convert the updatedValue string to a number
    if (type === 'number') {
      updatedValue = Number(updatedValue);
    }

    const change = {
      [name]: updatedValue,
    };

    // need to do functional update because the new project state is based on previous project state
    // we can keep the project properties that aren't being edited, ie. project.id
    // the spread operator (...) is used to spread the previous project properties and the new change
    let updatedProject: Project;
    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });

      return updatedProject;
    });
  };

  return (
    <>
      <form className="input-group vertical" onSubmit={handleSubmit}>
        <label htmlFor="name">Project Name</label>
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={project.name}
          onChange={handleChange}
        />
        <label htmlFor="description">Project Description</label>
        <textarea
          name="description"
          placeholder="Project Description"
          value={project.description}
          onChange={handleChange}
        />
        <label htmlFor="budget">Project Budget</label>
        <input
          type="number"
          name="budget"
          placeholder="Project Budget"
          value={project.budget}
          onChange={handleChange}
        />
        <label htmlFor="isActive">Active?</label>
        <input
          type="checkbox"
          name="isActive"
          checked={project.isActive}
          onChange={handleChange}
        />
        <div className="input-group">
          <button className="primary bordered medium">Save</button>
          <span />
          <button type="button" className="bordered medium" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default ProjectForm;
