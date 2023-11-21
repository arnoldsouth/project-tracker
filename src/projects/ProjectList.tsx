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
  const handleEdit = (project: Project) => {
    console.log(project);
  };

  const items = projects.map((project) => (
    <div key={project.id} className="cols-sm">
      <ProjectCard project={project} onEdit={handleEdit} />

      <ProjectForm />
    </div>
  ));

  return (
    <>
      <div className="row">{items}</div>
    </>
  );
};

// const ProjectList = (props: ProjectListProps) => {
//   const { projects } = props;

//   return (
//     <>
//       <div className="row">
//         {projects.map((project) => (
//           <div key={project.id} className="cols-sm">
//             {/* <div className="card">
//               <img src={project.imageUrl} alt={project.name} />
//               <section className="section dark">
//                 <h5 className="strong">
//                   <strong>{project.name}</strong>
//                 </h5>
//                 <p>{project.description}</p>
//                 <p>
//                   <strong>Budget: </strong>
//                   {project.budget.toLocaleString()}
//                 </p>
//               </section>
//             </div> */}

//             <ProjectCard project={project} />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };
export default ProjectList;
