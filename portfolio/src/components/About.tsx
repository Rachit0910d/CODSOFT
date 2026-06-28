import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function About() {
  const scrollRef = useScrollAnimation();

  return (
    <section id="about" className="py-20 border-b border-[#333] relative z-[5]" ref={scrollRef}>
      <div className="max-w-[1200px] mx-auto px-8 relative z-[6]">
        <h2 className="text-4xl md:text-5xl text-center mb-12 text-[#00d9ff] font-bold">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="text-lg text-[#a0a0a0] flex flex-col gap-4">
            <p>
              I'm a passionate Frontend developer with building scalable web applications. I love turning
              complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to open source projects, learning new
              technologies, or playing video games. Playing Video Games is my hobby. I believe in writing
              clean, maintainable code and following best practices.
            </p>
            <p>
              My goal is to create technology that not only works good but also provides exceptional user
              experience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center p-8 bg-[#1a1a1a] rounded-[10px] border border-[#333]">
              <div className="text-4xl font-bold text-[#00d9ff] mb-2">2+</div>
              <div>Projects Completed</div>
            </div>
            <div className="text-center p-8 bg-[#1a1a1a] rounded-[10px] border border-[#333]">
              <div className="text-4xl font-bold text-[#00d9ff] mb-2">1</div>
              <div>Internship Completed</div>
            </div>
            <div className="text-center p-8 bg-[#1a1a1a] rounded-[10px] border border-[#333]">
              <div className="text-4xl font-bold text-[#00d9ff] mb-2">0</div>
              <div>Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
