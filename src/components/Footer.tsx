import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400">MitraMediation</h3>
            <p className="mt-4 text-gray-400">
              Empowering communities through peaceful dispute resolution.
            </p>
            <div className="mt-6 flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Find a Mediator</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Legal Documents</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Training Materials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">support@mitramediation.com</li>
              <li className="text-gray-400">+91 XXX XXX XXXX</li>
              <li className="text-gray-400">Mumbai, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} MitraMediation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;