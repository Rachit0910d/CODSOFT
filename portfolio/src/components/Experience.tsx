import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Experience() {
  const scrollRef = useScrollAnimation();

  return (
    <section id="experience" className="py-20 border-b border-[#333] relative z-[5]" ref={scrollRef}>
      <div className="max-w-[1200px] mx-auto px-8 relative z-[6]">
        <h2 className="text-4xl md:text-5xl text-center mb-12 text-[#00d9ff] font-bold">Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content floating-card" style={{ animationDelay: '0s' }}>
              <span className="text-[#00d9ff] font-bold block mb-2">2020 - 2023</span>
              <h3 className="text-xl font-bold mb-1">Student</h3>
              <h4 className="text-lg text-[#a0a0a0] mb-2 font-normal">Gochar Krishi Inter College</h4>
              <p className="text-[#a0a0a0]">10th and 12th Standard</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content floating-card" style={{ animationDelay: '0.5s' }}>
              <span className="text-[#00d9ff] font-bold block mb-2">2024 - Present</span>
              <h3 className="text-xl font-bold mb-1">B tech Student</h3>
              <h4 className="text-lg text-[#a0a0a0] mb-2 font-normal">Ajay Kumar Garg Engineering College</h4>
              <p className="text-[#a0a0a0]">Computer Science and Engineering (Artificial Intelligence & Machine Learning)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
