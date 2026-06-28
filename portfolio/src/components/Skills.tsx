import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Skills() {
  const scrollRef = useScrollAnimation();

  return (
    <section id="skills" className="py-20 border-b border-[#333] relative z-[5]" ref={scrollRef}>
      <div className="max-w-[1200px] mx-auto px-8 relative z-[6]">
        <h2 className="text-4xl md:text-5xl text-center mb-12 text-[#00d9ff] font-bold">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#1a1a1a] p-8 rounded-[10px] border border-[#333] floating-card" style={{ animationDelay: '0s' }}>
            <h3 className="text-[#00d9ff] mb-4 text-xl font-bold">Frontend Development</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#000000] py-2 px-4 rounded-[20px] text-sm border border-[#333]">HTML</span>
              <span className="bg-[#000000] py-2 px-4 rounded-[20px] text-sm border border-[#333]">CSS</span>
              <span className="bg-[#000000] py-2 px-4 rounded-[20px] text-sm border border-[#333]">TailwindCSS</span>
              <span className="bg-[#000000] py-2 px-4 rounded-[20px] text-sm border border-[#333]">JavaScript</span>
              <span className="bg-[#000000] py-2 px-4 rounded-[20px] text-sm border border-[#333]">Reactjs</span>
            </div>
          </div>
          <div className="bg-[#1a1a1a] p-8 rounded-[10px] border border-[#333] floating-card" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-[#00d9ff] mb-4 text-xl font-bold">Backend Development</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#000000] py-2 px-4 rounded-[20px] text-sm border border-[#333]">Node JS</span>
              <span className="bg-[#000000] py-2 px-4 rounded-[20px] text-sm border border-[#333]">Express JS</span>
              <span className="bg-[#000000] py-2 px-4 rounded-[20px] text-sm border border-[#333]">Mongo DB</span>
            </div>
          </div>
          <div className="bg-[#1a1a1a] p-8 rounded-[10px] border border-[#333] floating-card" style={{ animationDelay: '1s' }}>
            <h3 className="text-[#00d9ff] mb-4 text-xl font-bold">Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#000000] py-2 px-4 rounded-[20px] text-sm border border-[#333]">Python</span>
              <span className="bg-[#000000] py-2 px-4 rounded-[20px] text-sm border border-[#333]">C</span>
              <span className="bg-[#000000] py-2 px-4 rounded-[20px] text-sm border border-[#333]">JavaScript</span>
              <span className="bg-[#000000] py-2 px-4 rounded-[20px] text-sm border border-[#333]">TypeScript</span>
              <span className="bg-[#000000] py-2 px-4 rounded-[20px] text-sm border border-[#333]">JAVA</span>
            </div>
          </div>
          <div className="bg-[#1a1a1a] p-8 rounded-[10px] border border-[#333] floating-card" style={{ animationDelay: '1.5s' }}>
            <h3 className="text-[#00d9ff] mb-4 text-xl font-bold">Database</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#000000] py-2 px-4 rounded-[20px] text-sm border border-[#333]">MongoDB</span>
              <span className="bg-[#000000] py-2 px-4 rounded-[20px] text-sm border border-[#333]">MySQL</span>
            </div>
          </div>
          <div className="bg-[#1a1a1a] p-8 rounded-[10px] border border-[#333] floating-card" style={{ animationDelay: '2s' }}>
            <h3 className="text-[#00d9ff] mb-4 text-xl font-bold">Tools & Others</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#000000] py-2 px-4 rounded-[20px] text-sm border border-[#333]">Git</span>
              <span className="bg-[#000000] py-2 px-4 rounded-[20px] text-sm border border-[#333]">GitHub</span>
              <span className="bg-[#000000] py-2 px-4 rounded-[20px] text-sm border border-[#333]">Canva</span>
              <span className="bg-[#000000] py-2 px-4 rounded-[20px] text-sm border border-[#333]">AI Tools</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
