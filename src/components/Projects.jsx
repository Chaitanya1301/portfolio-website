import urlImage from "../assets/url.png";            // Import URL Shortener image
import expenseTrackerImage from "../assets/MinesweeperImg.jpg";  // Import Expense Tracker image
import stableDiffusion from "../assets/Stable_diffusion.png";
import weatherAppImage from "../assets/Wheather.png";                 // Import Weather App image
import threatImage from "../assets/threat.png"; 
import ManagementImage from "../assets/weekly_Management.jpg"; 

const projects = [
  {
    id: 1,
    name: "Mine Sweeper Game",
    technologies: "React, Node.js, Express.js, MongoDB, Bootstrap, Chart.js",
    image: expenseTrackerImage,
    github: "https://github.com/Chaitanya1301/Minesweeper-Game",
  },
  {
    id: 2,
    name: "Stable Diffusion",
    technologies: "Python, PyTorch, Torchvision, Latent Diffusion Model, GPU, Matplotlib, Numpy",
    image: stableDiffusion,
    github: "https://github.com/Chaitanya1301/stable-diffusion-project",
  },
  {
    id: 3,
    name: "Weather App",
    technologies: "React, Redux, API Integration",
    image: weatherAppImage,
  },
  {
    id: 4,
    name: "URL Shortener",
    technologies: "Python, Django",
    image: urlImage,
  },
  {
    id: 5,
    name: "Threat Object Detection Using Deep Learning",
    technologies: "Python",
    image: threatImage,
  },
  {
    id: 6,
    name: "Weekly Event Management System",
    technologies: "JavaScript, HTML5/CSS , Django, PostgreSQL, Data Structures, Excel",
    image: ManagementImage,
  },
];

const Projects = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img 
                src={project.image} 
                alt={project.name} 
                className="rounded-lg mb-4 w-full h-48 object-cover" 
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.technologies}</p>
              <div className="flex space-x-4">
                <a 
                  href={project.github} 
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {project.liveDemo && (
                  <a 
                    href={project.liveDemo} 
                    className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
