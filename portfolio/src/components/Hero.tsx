import { Link } from 'react-scroll';
import MyPic from '../assets/My-pic.jpg';

export function Hero() {
  return (
    <section id="home" className="h-screen flex items-center relative overflow-hidden py-20 border-b border-[#333] z-[5]">
      <div className="max-w-[1200px] mx-auto px-8 relative z-[6] w-full">
        <div className="relative z-10 bg-[rgba(0,0,0,0.3)] backdrop-blur-[5px] p-12 rounded-[20px] border border-[rgba(0,217,255,0.2)] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center text-center md:text-left">
          <div className="max-w-[600px] mx-auto md:mx-0">
            <h1 className="text-4xl md:text-6xl mb-4 bg-gradient-to-tr from-[#00d9ff] to-[#ff6b6b] bg-clip-text text-transparent inline-block font-bold">
              Rachit Saini
            </h1>
            <p className="text-xl md:text-2xl text-[#a0a0a0] mb-8">MERN Stack Developer</p>
            <p className="text-[#a0a0a0] mb-8 max-w-[500px] mx-auto md:mx-0">
              Crafting digital experiences with clean code, innovative solutions, and a passion for technology
              that makes a difference.
            </p>
            <Link to="projects" spy={true} smooth={true} offset={0} duration={500} className="bg-gradient-to-tr from-[#00d9ff] to-[#ff6b6b] text-white py-4 px-8 no-underline rounded-[50px] font-bold inline-block transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
              View My Work
            </Link>
          </div>
          <div className="hero-image mx-auto md:mx-0">
            <img src={MyPic} alt="Rachit Developer Profile Picture" />
          </div>
        </div>
      </div>
    </section>
  );
}
