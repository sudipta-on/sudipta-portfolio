// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-400 text-sm mb-2 md:mb-0">
          © {new Date().getFullYear()} Sudipta Majumder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
