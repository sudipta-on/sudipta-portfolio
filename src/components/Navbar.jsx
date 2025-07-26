
const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur bg-slate-900/60 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">Sudipta Majumder</div>
        <div className="space-x-4 text-sm font-medium">
          <a href="#hero" className="hover:text-purple-400 transition">Home</a>
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#research" className="hover:text-purple-400 transition">Research</a>
          <a href="#education" className="hover:text-purple-400 transition">Education</a>
          <a href="#experience" className="hover:text-purple-400 transition">Experiences</a>
          <a href="#publications" className="hover:text-purple-400 transition">Publications</a>
          {/* <a href="#photos" className="hover:text-purple-400 transition">Gallery</a> */}
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
