import React, { useState } from 'react';
import Config from '../config.json'

const projectsData = Config.projectsData;

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section className="container py-5">
      <h2 id="projects" className='text-center'>My Portfolio</h2>
      <div className="text-center mb-4">
        <button
          className={`btn btn-filter ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => handleFilter('all')}
        >
          All
        </button>
        <button
          className={`btn btn-filter ${selectedCategory === 'category1' ? 'active' : ''}`}
          onClick={() => handleFilter('category1')}
        >
          Category 1
        </button>
        <button
          className={`btn btn-filter ${selectedCategory === 'category2' ? 'active' : ''}`}
          onClick={() => handleFilter('category2')}
        >
          Category 2
        </button>
        {/* Add more filter buttons for other categories */}
      </div>
      <div className="row">
        {filteredProjects.map((project) => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
