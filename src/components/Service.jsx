//import AmazonImage from '../assets/Amazon.png';  // Import the Amazon image
import AccentureImage from '../assets/AccentureLogo.png'; // Import the Nagarro image
import KPMGImg from '../assets/KPMGImage.png';         // Import the RQB Technologies image

const experience = [
  {
    company: "Accenture Private Limited Solutions",
    image: AccentureImage,
    position: "Software Engineer II",
    duration: "Mar 2023 – Aug 2023",
    location: "Telangana, India",
    details: [
      "Designed and maintained full-stack applications using .NET Core, Angular, and SQL Server, improving UI responsiveness and reducing user-reported production issues by 30%.",
      "Developed and deployed 25+ RESTful APIs powering healthcare and financial modules, enhancing backend–frontend data integration speed by 25% and enabling real-time analytics.",
      "Built 10+ SSIS/ETL packages to automate nightly data refresh cycles and large-scale transactional processing of 1M+ records/day, eliminating 90% of manual data operations.",
      "Optimized SQL stored procedures and queries, reducing query runtime by 35% and boosting overall system throughput for high-volume reporting workloads.",
      "Implemented CI/CD pipelines in Azure DevOps, enabling gated approvals, unit-test automation, and zero-downtime releases—cutting deployment time by 40%.",
      "Integrated microservices and API-based architecture for modular deployment across multiple environments, ensuring scalability and fault isolation.",
    ],
  },
  {
    company: "Accenture Private Limited Solutions",
    image: AccentureImage,
    position: "Software Engineer I",
    duration: "Sep 2021 – Mar 2023",
    location: "Telangana, India",
    details: [
      "Developed Python-based automation scripts for error monitoring, API validation, and log parsing, reducing manual debugging efforts by 25%.",
      "Enhanced frontend maintainability by building reusable Angular components (Reactive Forms, RxJS Streams, shared services), reducing code redundancy by 20%.",
      "Configured OAuth2/JWT authentication and audit logging, strengthening application security and improving traceability coverage by 25%.",
      "Mentored a team of 4 junior developers, guiding them on debugging, version control (Git), and clean code practices—improving sprint velocity by 15%.",
      "Collaborated in Agile Scrum teams with QA, DevOps, and product owners, maintaining 99.5% system uptime and ensuring 100% sprint delivery compliance.",
    ],
  },
  {
    company: "KPMG",
    image: KPMGImg,
    position: "Data Analyst Intern",
    duration: "Jun 2020 – Jul 2020",
    location: "Remote",
    details: [
      "Applied data mining and statistical methods in Python, along with data cleaning techniques, to improve insights extraction from complex datasets by 20%.",
      "Leveraged Jupyter Notebooks and Matplotlib for performance analysis in data visualization, enhancing analysis efficiency by 15%.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20" id="experience">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105 flex space-x-6"
            >
              <img
                src={exp.image}
                alt={exp.company}
                className="w-20 h-16 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  {exp.company}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">{exp.position}</p>
                <p className="text-gray-600 dark:text-gray-400">{exp.duration} - {exp.location}</p>
                <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
