import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index";
import { SignIn, CreateAccount } from "./Signin";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null); // null means no section is active

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleScroll = (id) => {
    if (id === "signin" || id === "create-account") {
      setActiveSection(id);
    } else {
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

            {/* Navigation Links */}
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleScroll(item.href)}
                    className="text-neutral-950 hover:text-neutral-400"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Sign In and Create Account Buttons */}
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <button
                onClick={() => setActiveSection("signin")}
                className="py-2 px-3 border rounded-md bg-black text-white hover:bg-white hover:text-black"
              >
                Sign In
              </button>
              <button
                onClick={() => setActiveSection("create-account")}
                className="bg-gradient-to-r from-black-500 to-black-800 border bg-black text-white py-2 px-3 rounded-md hover:from-white-500 hover:to-white-800 hover:bg-white hover:text-black transition-all duration-300"
              >
                Create an account
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <button
                  onClick={() => setActiveSection("signin")}
                  className="py-2 px-3 border rounded-md text-white"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setActiveSection("create-account")}
                  className="bg-gradient-to-r from-black-500 to-black-800 py-2 px-3 rounded-md text-white"
                >
                  Create an account
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Show Only the Active Section */}
      {activeSection === "signin" && <SignIn />}
      {activeSection === "create-account" && <CreateAccount />}
    </>
  );
};

export default Navbar;
