import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { skillsCategories } from "../utils/Data.ts";

export function Skills() {
  const scrollRef = useScrollAnimation();

  return (
    <section
      id="skills"
      className="py-20 border-b border-border-color relative z-5"
      ref={scrollRef}
    >
      <div className="max-w-300 mx-auto px-8 relative z-6">

        <h2 className="text-4xl md:text-5xl text-center mb-12 text-primary font-bold">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillsCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-card-bg p-8 rounded-[10px] border border-border-color floating-card"
              style={{ animationDelay: category.delay }}
            >

              <h3 className="text-primary mb-4 text-xl font-bold">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">

                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="bg-bg-darker py-2 px-4 rounded-[20px] text-sm border border-border-color"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}