import projects from "../data/projects"
import {
  SiArduino,
  SiJavascript,
  SiPython,
  SiRstudioide,
  SiGithub,
  SiImagej,
  SiLabview,
  SiPytorch,
  SiNumpy,
  SiReact
} from "react-icons/si"

const toolIcons = {
  Arduino: <SiArduino />,
  JavaScript: <SiJavascript />,
  Python: <SiPython />,
  RStudio: <SiRstudioide />,
  GitHub: <SiGithub />,
  FIJI: <SiImagej />,
  LabVIEW: <SiLabview />,
  Pytorch: <SiPytorch />,
  Numpy: <SiNumpy />,
  React: <SiReact />,
  MATLAB: <img src="/icons/matlab.png" alt="MATLAB" />,
  SolidWorks: <img src="/icons/solidworks.png" alt="SolidWorks" />,
  BioRender: <img src="/icons/biorender.png" alt="BioRender" />,
  Graphpad: <img src="/icons/graphpad.png" alt="GraphPad Prism" />,
  SASJMP: <img src="/icons/sasjmp.png" alt="SAS JMP" />,
  BrainIAK: <img src="/icons/Brainiak.png" alt="BrainIAK" />,
}

export default function Projects({ title = "Selected Works", showAll = false, pageMode = false }) {
  const visibleProjects = showAll ? projects : projects.slice(0, 3)
  return (
    <section className="projects-section">
      <div className="projects-inner">
      <h2 className="section-title">{title}</h2>

        <div className="projects-list">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                {project.subtitle && (
                  <p className="project-subtitle">{project.subtitle}</p>
                )}
                <p dangerouslySetInnerHTML={{ __html: project.description }} />
                <div className="project-tools">
                  {project.tools?.map((tool) => (
                    <span
                      key={tool}
                      className="tool-icon"
                      title={tool}
                      aria-label={tool}
                    >
                      {toolIcons[tool]}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  View Project →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}