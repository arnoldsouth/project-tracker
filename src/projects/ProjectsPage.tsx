import { useEffect } from 'react';

import { Project } from './Project';
import ProjectList from './ProjectList';
import { projectAPI } from './projectAPI';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, initialAppState } from '../state';
import { ThunkDispatch } from 'redux-thunk';
import { ProjectState } from './state/projectTypes';
import { AnyAction } from 'redux';
import { loadProjects } from './state/projectActions';

const ProjectsPage = () => {
  // const [projects, setProjects] = useState<Project[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | undefined>(undefined);
  // const [currentPage, setCurrentPage] = useState(1);

  // Remove the Page (container) component's local state and replace with Redux state using useSelector

  const loading = useSelector(
    (appState: AppState) => initialAppState.projectState.loading
  );
  const projects = useSelector(
    (appState: AppState) => appState.projectState.projects
  );
  const error = useSelector(
    (appState: AppState) => appState.projectState.error
  );
  const currentPage = useSelector(
    (appState: AppState) => appState.projectState.page
  );
  // Get a reference to the Store's dispatch function using useDispatch to dispatch actions
  const dispatch = useDispatch<ThunkDispatch<ProjectState, any, AnyAction>>();

  const handleMoreClick = () => {
    // setCurrentPage((currentPage) => currentPage + 1);
    dispatch(loadProjects(currentPage + 1));
  };

  // useEffect(() => {
  //   const loadProjects = async () => {
  //     setLoading(true);

  //     try {
  //       const data = await projectAPI.get(currentPage);
  //       setError('');

  //       // setProjects(data);
  //       if (currentPage === 1) {
  //         setProjects(data);
  //       } else {
  //         setProjects((projects) => [...projects, ...data]);
  //       }
  //     } catch (err) {
  //       if (err instanceof Error) {
  //         setError(err.message);
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   loadProjects();
  // }, [currentPage]);

  // Replace state setter function calls and API calls with calls to dispatch passing action creators.
  useEffect(() => {
    dispatch(loadProjects(1));
  }, [dispatch]);

  // Remove the onSave function and stop passing it as a prop to the <ProjectList/> component.
  // const saveProject = (project: Project) => {
  //   // console.log('Saving project: ', project);
  //   // let updatedProjects = projects.map((p: Project) => {
  //   //   return p.id === project.id ? project : p;
  //   // });
  //   // setProjects(updatedProjects);

  //   projectAPI
  //     .put(project)
  //     .then((updatedProject) => {
  //       let updatedProjects = projects.map((p: Project) => {
  //         return p.id === project.id ? new Project(updatedProject) : p;
  //       });
  //       setProjects(updatedProjects);
  //     })
  //     .catch((err) => {
  //       if (err instanceof Error) {
  //         setError(err.message);
  //       }
  //     });
  // };

  return (
    <>
      <h1>Projects</h1>

      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span>
                {error}
              </p>
            </section>
          </div>
        </div>
      )}

      {/* <ProjectList projects={projects} onSave={saveProject} /> */}
      <ProjectList projects={projects} />

      {!loading && !error && (
        <div className="row">
          <div className="col-sm-12">
            <div className="button-group fluid">
              <button className="button default" onClick={handleMoreClick}>
                View More...
              </button>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default ProjectsPage;
