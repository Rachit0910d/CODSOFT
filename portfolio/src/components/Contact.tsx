import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Contact() {
  const scrollRef = useScrollAnimation();

  return (
    <section id="contact" className="py-20 border-b border-[#333] relative z-[5]" ref={scrollRef}>
      <div className="max-w-[1200px] mx-auto px-8 relative z-[6]">
        <h2 className="text-4xl md:text-5xl text-center mb-12 text-[#00d9ff] font-bold">Let's Work Together</h2>
        <div className="text-center max-w-[600px] mx-auto">
          <p className="text-xl text-[#a0a0a0] mb-8">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
            <a href="mailto:rachit.rrr2005@gmail.com" className="bg-[#1a1a1a] p-6 rounded-[10px] text-white no-underline border border-[#333] transition-all duration-300 hover:-translate-y-1 hover:text-[#00d9ff] text-xl">
              📧 Email
            </a>
            <a href="https://linkedin.com/in/rachit-saini-61638b318" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] p-6 rounded-[10px] text-white no-underline border border-[#333] transition-all duration-300 hover:-translate-y-1 hover:text-[#00d9ff] text-xl">
              💼 LinkedIn
            </a>
            <a href="https://github.com/Rachit0910d" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] p-6 rounded-[10px] text-white no-underline border border-[#333] transition-all duration-300 hover:-translate-y-1 hover:text-[#00d9ff] text-xl">
              🐙 GitHub
            </a>
            <a href="tel:+9289906392" className="bg-[#1a1a1a] p-6 rounded-[10px] text-white no-underline border border-[#333] transition-all duration-300 hover:-translate-y-1 hover:text-[#00d9ff] text-xl">
              📱 Phone
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
