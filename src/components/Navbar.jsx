import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index";
// import { SignIn, CreateAccount } from "./Signin";


const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleScroll = (id) => {
    // Handle special cases for signin and create-account
    if (id === "signin" || id === "create-account") {
      setActiveSection(id);
      setMobileDrawerOpen(false);
    } else {
      // Handle regular navigation items
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setMobileDrawerOpen(false);
      }
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm font-bold">
          <div className="flex justify-between items-center">
            {/* Logo and Branding */}
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
              <span className="text-xl tracking-tight">DevSphere</span>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleScroll(item.href)}
                    className="text-neutral-950 hover:text-neutral-400 transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <button
                onClick={() => handleScroll("signin")}
                className="py-2 px-3 border rounded-md bg-black text-white hover:bg-white hover:text-black transition-all duration-200"
              >
                Sign In
              </button>
              <button
                onClick={() => handleScroll("create-account")}
                className="bg-gradient-to-r from-black-500 to-black-800 border bg-black text-white py-2 px-3 rounded-md hover:from-white-500 hover:to-white-800 hover:bg-white hover:text-black transition-all duration-300"
              >
                Create an account
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileDrawerOpen && (
            <div className="fixed right-0 top-[60px] z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden transition-all duration-300">
              <ul className="w-full text-center">
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <button
                      onClick={() => handleScroll(item.href)}
                      className="text-white hover:text-neutral-400 transition-colors duration-200 w-full"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col space-y-4 w-full items-center mt-4">
                <button
                  onClick={() => handleScroll("signin")}
                  className="py-2 px-3 border rounded-md text-white w-3/4 hover:bg-white hover:text-black transition-all duration-200"
                >
                  Sign In
                </button>
                <button
                  onClick={() => handleScroll("create-account")}
                  className="bg-gradient-to-r from-black-500 to-black-800 py-2 px-3 rounded-md text-white w-3/4 hover:from-white-500 hover:to-white-800 hover:text-black transition-all duration-300"
                >
                  Create an account
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Active Section Display */}
      {activeSection === "signin" && <SignIn />}
      {activeSection === "create-account" && <CreateAccount />}
    </>
  );
};

export default Navbar;