import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { projects } from "../utils/ProjectDetails.ts";

export function Projects() {
  const scrollRef = useScrollAnimation();

  return (
    <section
      id="projects"
      className="py-20 border-b border-border-color relative z-5"
      ref={scrollRef}
    >
      <div className="max-w-300 mx-auto px-8 relative z-6">

        <h2 className="text-4xl md:text-5xl text-center mb-12 text-primary font-bold">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-card-bg rounded-[10px] overflow-hidden border border-border-color floating-card"
              style={{ animationDelay: project.animationDelay }}
            >

              <div
                className={`flex items-center justify-center`}
              >
                <img className="h-60 w-138" src={project.image} alt="Images of project" />
              </div>

              <div className="p-8">

                <h3 className="text-2xl mb-4 text-primary font-bold">
                  {project.title}
                </h3>

                <p className="text-text-gray mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">

                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="bg-bg-darker py-1 px-3 rounded-[15px] text-xs text-primary"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="flex gap-4">

                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary no-underline font-bold hover:underline"
                  >
                    Live Demo →
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary no-underline font-bold hover:underline"
                  >
                    GitHub →
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}