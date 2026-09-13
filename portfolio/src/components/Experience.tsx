import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { educationItems } from '../utils/Data';

export function Experience() {
  const scrollRef = useScrollAnimation();

  return (
    <section id="experience" className="py-20 border-b border-[#333] relative z-[5]" ref={scrollRef}>
      <div className="max-w-[1200px] mx-auto px-8 relative z-[6]">
        <h2 className="text-4xl md:text-5xl text-center mb-12 text-[#00d9ff] font-bold">Education</h2>
        <div className="timeline">



          {educationItems.map((edu, idx) => {
            return (
              <div key={idx} className="timeline-item">
                <div className="timeline-content floating-card" style={{ animationDelay: edu.delay }}>
                  <span className="text-[#00d9ff] font-bold block mb-2">{edu.timeline}</span>
                  <h3 className="text-xl font-bold mb-1">{edu.title}</h3>
                  <h4 className="text-lg text-[#a0a0a0] mb-2 font-normal">{edu.company}</h4>
                  <p className="text-[#a0a0a0]">{edu.position}</p>
                </div>
              </div>
            )
          })}




        </div>
      </div>
    </section>
  );
}
