import React from 'react';
import '../Auth.css'

const LandingPage = () => {
  const projects = [
    {
      title: "Todo-List App",
      description: "A simple to do list app to manage your personal tasks, family projects, and team's worrk",
      image: "https://as1.ftcdn.net/v2/jpg/02/59/31/70/1000_F_259317013_nJJaBgGGzvXMd6cAyLd6yMJtbdnd61wk.jpg", // Use actual image link or local image
      link: " https://todo-delta-virid.vercel.app/"
    },
   
    {
      title: "Weather App",
      description: "covers the state of the atmosphere at a specific time and place, including temperature, wind, precipitation, and cloud cover.",
      image: "https://cdn.pixabay.com/photo/2023/12/12/19/08/moutains-8445767_1280.jpg", // Use actual image link or local image
      link: "https://weather-app-ten-theta-99.vercel.app/"
    }
  ];

  return (

    
    <div className="landing-page">
      <h1 className="gallery-title">React Projects</h1>
      <div className="card-container">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.image} alt={project.title} className="card-image" />
            <div className="card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="view-project-button">View Project</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;







