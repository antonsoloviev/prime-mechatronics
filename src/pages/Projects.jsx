import { Link } from "react-router";
import { projectsData } from "../assets/assets";
import { useNavigate } from "react-router";
import { ScrollRestoration } from "react-router";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("projects");

  return (
    <div>
      <ScrollRestoration />
      <section className="relative container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden">
        <div className="flex flex-col gap-8">
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
            <span className="sm:text-xl group-hover:text-gray-500">
              {t("back")}
            </span>
          </div>
          <h1 className="text-3xl sm:text-6xl font-bold text-center">
            {t("projects.title")}
          </h1>
        </div>
        <div className="flex flex-wrap gap-4">
          {projectsData.map((card, i) => (
            <Link to={`/projects/${card.id}`} className="m-auto" key={i}>
              <div className="project-card max-w-80 flex flex-col gap-2.5 pt-16 border-transparent rounded-xl w-max transition-all duration-300 ease-in">
                <img
                  src={card.image}
                  alt={t([`${card.title}`], { lng: "en" })}
                  className="w-full rounded-xl"
                />
                <div className=" flex justify-start">
                  <div className="line-clamp-3 px-4 py-1 hover:line-clamp-none min-h-23">
                    <h2 className="sm:text-xl font-semibold text-gray-800">
                      {t([`${card.title}`])}
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
