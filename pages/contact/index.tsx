const Contact = () => {
  return (
    <div className="flex flex-col ">
      <div className="text-sm text-green-600 font-mono mb-8">
        Hi, my name is
      </div>
      <h1 className="text-7xl font-bold text-gray-50 mb-8">Cintact</h1>
      <h1 className="text-7xl font-bold text-gray-400 mb-8">
        I build things for the web.
      </h1>
      <h3 className="text-sm text-gray-500">{`I'm a software engineer based in Minneapolis, MN specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.`}</h3>
    </div>
  );
};
export default Contact;
