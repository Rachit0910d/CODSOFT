import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { contactMethods } from '../utils/Data';

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
            {contactMethods.map((method, idx) => {
              return (
                <a key={idx} href={method.link} style={{ animationDelay: method.delay }} className="bg-[#1a1a1a] flex flex-col pt-8 border border-[#333] items-center  h-40 px-10 rounded-[10px] transition-all duration-300 hover:-translate-y-2 hover:text-[#00d9ff]">
                  <img className='h-10 mb-4 rounded-full' src={method.logo} alt="logo" />
                  <h4>{method.title}</h4>
                </a>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
