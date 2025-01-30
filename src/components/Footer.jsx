import { resourcesLinks, communityLinks, platformLinks } from "../constants";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";



const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
     <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <div>
        <h3 className="text-md font-semibold mb-4">Resources</h3>
        <ul className="space-y-2">
         {resourcesLinks.map((link, index) => (
         <li key={index}>
        <a href={link.href} className="text-neutral-800 hover:text-black">
            {link.text}
        </a>
       </li>
      ))}
     </ul>
    </div>
       <div>
        <h3 className="text-md font-semibold mb-4">Platform</h3>
        <ul className="space-y-2">
         {platformLinks.map((link, index) => (
         <li key={index}>
        <a href={link.href} className="text-neutral-800 hover:text-black">
            {link.text}
        </a>
       </li>
      ))}
     </ul>
    </div>
    <div>
        <h3 className="text-md font-semibold mb-4">Community</h3>
        <ul className="space-y-2">
         {communityLinks.map((link, index) => (
         <li key={index}>
        <a href={link.href} className="text-neutral-800 hover:text-black">
            {link.text}
        </a>
       </li>
      ))}
     </ul>
    </div>
  </div>
  <div className="mt-10 flex justify-start space-x-6">
        <a href="#" className="text-blue-700 hover:text-black">
          <Facebook size={24} />
        </a>
        <a href="#" className="text-blue-500 hover:text-black">
          <Twitter size={24} />
        </a>
        <a href="#" className="text-pink-500 hover:text-black">
          <Instagram size={24} />
        </a>
        <a href="#" className="text-blue-600 hover:text-black">
          <Linkedin size={24} />
        </a>
      </div>
 </footer>
  );
};

export default Footer;
