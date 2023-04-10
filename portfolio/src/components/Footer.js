import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} My Footer</p>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Link 1</a></li>
            <li><a href="#" className="hover:text-gray-300">Link 2</a></li>
            <li><a href="#" className="hover:text-gray-300">Link 3</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
