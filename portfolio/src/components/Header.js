import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Header</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Link 1</a></li>
            <li><a href="#" className="hover:text-gray-300">Link 2</a></li>
            <li><a href="#" className="hover:text-gray-300">Link 3</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
