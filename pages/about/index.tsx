const About = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <img
        src="/finger-drawing-removebg-preview.png"
        alt="hero"
        className="md:w-1/2 w-full h-auto"
      />
      <div className="md:flex md:flex-col md:justify-end">
        <h1 className="text-6xl font-bold text-black md:mb-16 mb-8 ">
          Hi, I'm LeRoy.
        </h1>
        <h1 className="text-7xl font-bold text-gray-400 mb-8">
          I build things for the web.
        </h1>
        <h3 className="text-sm text-gray-500">{`I'm a software engineer based in Minneapolis, MN specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.`}</h3>
      </div>
    </div>
  );
};
export default About;
