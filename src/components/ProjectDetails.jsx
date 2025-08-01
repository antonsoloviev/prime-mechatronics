import { projectsData } from "../assets/assets";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { ScrollRestoration } from "react-router";

const ProjectDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const project = projectsData.find((item) => item.id == params.id);

  return (
    <div className="flex flex-col gap-6 container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden">
      <ScrollRestoration
        getKey={(location) => {
          // Restore based on pathname
          return location.pathname;
        }}
      />
      <div
        className="group flex gap-4 items-center cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <svg
          className="ease-in-out transition duration-300 group-hover:-translate-x-4 group-hover:fill-gray-500 fill-black "
          width="43"
          height="16"
          viewBox="0 0 43 16"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.00116 1.99897C8.00116 2.25897 7.90116 2.50897 7.71116 2.70897L3.41116 6.99897L41.0012 6.99897C41.5512 6.99897 42.0012 7.44896 42.0012 7.99896C42.0012 8.54896 41.5512 8.99896 41.0012 8.99896L3.41116 8.99896L7.71116 13.289C8.10116 13.679 8.10116 14.319 7.71116 14.709C7.32116 15.099 6.68116 15.099 6.29116 14.709L0.291162 8.70896C0.201162 8.61896 0.131162 8.50896 0.0811621 8.38896C0.0611621 8.33896 0.0411621 8.29896 0.0411621 8.24896C-0.00883789 8.08896 -0.00883789 7.90896 0.0411621 7.74896C0.0411621 7.69896 0.0611621 7.65897 0.0811621 7.60896C0.131162 7.48897 0.201162 7.37896 0.291162 7.28896L6.29116 1.28897C6.68116 0.898965 7.32116 0.898965 7.71116 1.28897C7.90116 1.48897 8.00116 1.73897 8.00116 1.99897Z"
          />
        </svg>
        <span className="sm:text-xl group-hover:text-gray-500">Назад</span>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="max-w-xl">
          <img src={project.image} alt={project.title} className="rounded-xl" />
        </div>
        <div className="flex flex-col gap-4 max-w-xl">
          <h2 className="text-xl font-semibold text-gray-800">
            {project.title}
          </h2>
          <p>{project.location}</p>
          <p className="text-justify">{project.detail}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
