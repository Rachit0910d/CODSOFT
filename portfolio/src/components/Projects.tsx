import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Projects() {
  const scrollRef = useScrollAnimation();

  return (
    <section id="projects" className="py-20 border-b border-[#333] relative z-[5]" ref={scrollRef}>
      <div className="max-w-[1200px] mx-auto px-8 relative z-[6]">
        <h2 className="text-4xl md:text-5xl text-center mb-12 text-[#00d9ff] font-bold">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1a1a1a] rounded-[10px] overflow-hidden border border-[#333] floating-card" style={{ animationDelay: '0s' }}>
            <div className="h-[200px] bg-gradient-to-tr from-[#00d9ff] to-[#ff6b6b] flex items-center justify-center text-5xl text-white">
              📱
            </div>
            <div className="p-8">
              <h3 className="text-2xl mb-4 text-[#00d9ff] font-bold">Personal Portfolio Website</h3>
              <p className="text-[#a0a0a0] mb-6">
                This is my digital resume, that is fully responsive and litle bit of animations which shows
                my skills in Creative Thinking and Cool Designing.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-[#000000] py-1 px-3 rounded-[15px] text-xs text-[#00d9ff]">HTML</span>
                <span className="bg-[#000000] py-1 px-3 rounded-[15px] text-xs text-[#00d9ff]">CSS</span>
                <span className="bg-[#000000] py-1 px-3 rounded-[15px] text-xs text-[#00d9ff]">Java Script</span>
              </div>
              <div className="flex gap-4">
                <a href="https://codsoft-eta-five.vercel.app/" className="text-[#00d9ff] no-underline font-bold hover:underline">Live Demo →</a>
                <a href="https://github.com/Rachit0910d/CODSOFT.git" className="text-[#00d9ff] no-underline font-bold hover:underline">GitHub →</a>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-[10px] overflow-hidden border border-[#333] floating-card" style={{ animationDelay: '0.5s' }}>
            <div className="h-[200px] bg-gradient-to-tr from-[#00d9ff] to-[#ff6b6b] flex items-center justify-center text-5xl text-white">
              📊
            </div>
            <div className="p-8">
              <h3 className="text-2xl mb-4 text-[#00d9ff] font-bold">Landing Page</h3>
              <p className="text-[#a0a0a0] mb-6">
                This Landing Page, I just made to check my Designing Thinking.
                In this Design, I didn't Use any Canva's Template to get the design, instead of i use my
                knowledge to build this.
                It is still not good for Mobile and iPad Screenview.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-[#000000] py-1 px-3 rounded-[15px] text-xs text-[#00d9ff]">HTML</span>
                <span className="bg-[#000000] py-1 px-3 rounded-[15px] text-xs text-[#00d9ff]">CSS</span>
              </div>
              <div className="flex gap-4">
                <a href="https://codsoft-4py1.vercel.app/" className="text-[#00d9ff] no-underline font-bold hover:underline">Live Demo →</a>
                <a href="https://github.com/Rachit0910d/CODSOFT/tree/main/Landing-Page" className="text-[#00d9ff] no-underline font-bold hover:underline">GitHub →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
