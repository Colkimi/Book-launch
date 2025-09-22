import { Link } from 'react-router-dom';
import { BookOpen, Mail, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-8 w-8 text-primary-400" />
                <span className="text-2xl font-bold">BookLaunch</span>
              </Link>
              <p className="text-gray-300 mb-4 max-w-md">
                Discover an extraordinary journey through pages that will transform your perspective. 
                Join thousands of readers who have already embarked on this incredible adventure.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
                <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                  About the Book
                </Link>
                <Link to="/author" className="block text-gray-300 hover:text-white transition-colors">
                  Author
                </Link>
                <Link to="/reviews" className="block text-gray-300 hover:text-white transition-colors">
                  Reviews
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <a 
                  href="mailto:info@bookllaunch.com" 
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@booklaunch.com</span>
                </a>
                <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                  Contact Form
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 BookLaunch. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;