import React from 'react';
import Suger from '../Images/Suger.png';

const projects = [
  {
    title: 'Suger and Thunder',
    description: 'Therapy website, with elegant design and a lot of features.',
    image: Suger,
    link: 'https://sugar-and-thunder.netlify.app/',
  },
  {
    title: 'Project 2',
    description: 'Nullam ultrices tincidunt ligula, sit amet congue erat luctus id. Curabitur posuere elit vitae velit molestie, vel ullamcorper ex bibendum.',
    image: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    title: 'Project 3',
    description: 'Phasellus tincidunt turpis vel orci imperdiet, in molestie velit feugiat. Duis aliquet, nunc ut posuere hendrerit, purus diam ultricies felis, ut laoreet lectus tellus a felis.',
    image: 'https://via.placeholder.com/300x200',
    link: '#',
  },
];

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mt-8 mb-4">My Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg">
            <a href={project.link} className="block overflow-hidden rounded-lg">
              <img src={project.image} alt={project.title} className="w-full h-auto" />
            </a>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700 text-base">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
