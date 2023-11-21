import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';

const ProjectsPage = () => {
  return (
    <>
      <h1>Projects</h1>
      {/* <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre> */}

      {/* Render the `ProjectList` component and pass it the `MOCK_PROJECTS` array instead of directly displaying the data */}
      <ProjectList projects={MOCK_PROJECTS} />
    </>
  );
};

export default ProjectsPage;
