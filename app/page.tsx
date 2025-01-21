import Image from "next/image";

export default function Home() {
  return (
     <div className="h-screen relative">
<div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="max-w-6xl mx-auto flex justify-center items-center text-center flex-col h-full py-20">
         <h1 className="text-4xl sm:text-7xl font-semibold">Automate calls with AI,
           and <span className=" bg-gradient-to-b text-transparent bg-clip-text from-white to-blue-600">Generate leads.</span></h1>
          <p className=" text-lg sm:text-xl max-w-3xl mt-5">Enhancing telecommunication with Gen AI-driven bulk calling.
          Enhancing telecommunication with Gen AI-driven bulk calling.
           Scalable, user-friendly, and customizable. Optimized for seamless integration and usability.
          </p>
      </div>
     </div>
  );
}
