import { SyntheticEvent, useState } from 'react';
import { Project } from './Project';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { ProjectState } from './state/projectTypes';
import { AnyAction } from 'redux';
import { saveProject } from './state/projectActions';

interface ProjectFormProps {
  project: Project;
  onCancel: () => void;
  // onSave: (project: Project) => void;
}

const ProjectForm = ({
  project: initialProject,
  onCancel,
}: // onSave,
ProjectFormProps) => {
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    name: '',
    description: '',
    budget: '',
  });

  // invoke the useDispatch hook to get access to the dispatch function
  const dispatch = useDispatch<ThunkDispatch<ProjectState, any, AnyAction>>();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    // Call the isValid function on form submit and return back out of the function before saving changes if the form is invalid
    if (!isValid()) {
      return;
    }
    // onSave(project);
    dispatch(saveProject(project));
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

    // Call the validate function inside handleChange to determine if there are any errors and then set them into the errors state variable
    setErrors(() => {
      return validate(updatedProject);
    });
  };

  // To be valid, the following must be true:
  // Name is required.
  // Name needs to be at least 3 characters long.
  // Description is required.
  // Budget must be greater than \$0.
  const validate = (project: Project) => {
    let errors: any = { name: '', description: '', budget: '' };

    if (project.name.length === 0) {
      errors.name = 'Name is required';
    }

    if (project.name.length > 0 && project.name.length < 3) {
      errors.name = 'Name must be at least 3 characters';
    }

    if (project.description.length === 0) {
      errors.description = 'Description is required';
    }

    if (project.budget === 0) {
      errors.budget = 'Budget set must be greater than $0';
    }

    return errors;
  };

  // checks whether there are any validation errors
  const isValid = () => {
    return (
      errors.name.length === 0 &&
      errors.description.length === 0 &&
      errors.budget.length === 0
    );
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

        {errors.name.length > 0 && (
          <div className="card error">
            <p>{errors.name}</p>
          </div>
        )}

        <label htmlFor="description">Project Description</label>
        <textarea
          name="description"
          placeholder="Project Description"
          value={project.description}
          onChange={handleChange}
        />

        {errors.description.length > 0 && (
          <div className="card error">
            <p>{errors.description}</p>
          </div>
        )}

        <label htmlFor="budget">Project Budget</label>
        <input
          type="number"
          name="budget"
          placeholder="Project Budget"
          value={project.budget}
          onChange={handleChange}
        />

        {errors.budget.length > 0 && (
          <div className="card error">
            <p>{errors.budget}</p>
          </div>
        )}

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
