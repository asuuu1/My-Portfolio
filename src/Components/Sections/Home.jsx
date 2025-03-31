import { RevealOnScroll } from "../RevealOnScroll";
import myimage from "../../assets/myimage.png";

export const Home = () => {
    return (
        <section 
            id="home"
            className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12"
        >
            {/* Left Side - Text Content */}
            <RevealOnScroll>
                <div className="text-left z-10 max-w-lg">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Hi, I'm Asutosh Padhy
                    </h1>

                    <p className="text-gray-400 text-lg mb-8">
                        I’m a full-stack developer who loves crafting clean, scalable web
                        applications. My goal is to build solutions that offer both
                        exceptional performance and a delightful user experience.
                    </p>

                    <div className="flex space-x-4">
                        <a
                            href="/resume.pdf"  // Make sure to place your resume file in the "public" folder as "resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white py-3 px-6 rounded font-medium
                            transition relative overflow-hidden hover:-translate-y-0.5
                            hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                        >
                            My Resume
                        </a>

                        <a
                            href="#contact"
                            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>

            {/* Profile Image */}
            <div className="mt-10 md:mt-0">
                <img 
                    src={myimage}
                    alt="My Image"  
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 shadow-lg" 
                />
            </div>
        </section>
    );
};
