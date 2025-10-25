import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (

  <>
      <div className="h-[2px] bg-[#1c5a3bff] mt-5 md:mb-[10px]"></div>
    <footer
      className="text-white bg-[#1c5a3bff] pt-16 pb-6 px-6 md:px-20"
      // style={{
      //   background: "linear-gradient(135deg, [1c5a3bff] 0%, #0f4e29ff 100%)",
      // }}
    >
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/20 pb-10">
        
        {/* Logo and Description */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="text-white">Click</span>
            <span className="text-white">ora</span>
          </h2>
          <p className="text-white/80 text-[15px] leading-relaxed mb-6">
            Transforming businesses through innovative technology solutions. 
            We combine expertise with creativity to deliver exceptional digital experiences.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaLinkedinIn className="text-white text-lg" />
            </a>
            <a
              href="https://www.instagram.com/clickoraagency/"
              className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
            <a
              href="https://www.facebook.com/Clickora.agency"
              className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white/80">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-white/80">
            <li><Link to="">Terms & Conditions</Link></li>
            <li><Link to="">Privacy & Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-6 text-white/70 text-sm">
        <p>© 2025 Clickora. All rights reserved.</p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <Link to="" className="hover:text-white">Privacy & Policy</Link>
          <Link to="" className="hover:text-white">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  </>
  );
}
