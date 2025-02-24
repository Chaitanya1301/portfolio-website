import AmazonImage from '../assets/Amazon.png';  // Import the Amazon image
import AccentureImage from '../assets/AccentureLogo.png'; // Import the Nagarro image
import KPMGImg from '../assets/KPMGImage.png';         // Import the RQB Technologies image

const experience = [
  {
    company: "Accenture Private Limited Solutions",
    image: AccentureImage,
    position: "Apllication Development Analyst",
    duration: "Mar 2023 – Aug 2023",
    location: "Telangana, India",
    details: [
      "Designed, analyzed, and implemented D365 objects (tables, forms, classes, data entities, security privileges, and menu items), automating business processes and reducing manual work by 40%.",
      "Debugged and optimized X++ code, increasing operational efficiency by 30% and automating routine operations with Root Cause Analysis methods.",
      "Created custom forms with .NET, leveraging API Development for automated data retrieval, reducing access times by 20%, and improving performance features.",
      "Reduced system bugs by 95% and enhanced customer satisfaction through Agile development practices and iterative improvements.",
      "Utilized CI/CD pipelines in Azure DevOps to efficiently deploy D365 solutions, reducing manual deployment efforts and ensuring seamless version control. Managed repository organization in Azure to optimize code deployment processes and minimize release errors.",
      "Collaborated in meetings with clients to gather requirements, provide technical guidance, and contribute strategic insights for project improvements.",
      "Conducted Unit Testing, Regression Testing, and Software Testing to ensure system reliability and performance.",
      "Led investigations and root cause analysis for critical issues using D365 and DAX 2012, developing automated troubleshooting scripts that reduced manual intervention by 25%.",
      "Collaborated with cross-functional teams using agile methodologies and resolved 30+ bugs, improving site stability and reducing user-reported issues by 25%.",
    ],
  },
  {
    company: "Accenture Private Limited Solutions",
    image: AccentureImage,
    position: "Apllication Development Associate",
    duration: "Sep 2021 – Mar 2023",
    location: "Telangana, India",
    details: [
      "Worked on 2 projects simultaneously—one providing support and maintenance for an existing project, and the other focused on developing a new system using D365/DAX 2012 Technology.",
      "Designed and implemented 4 real-time forms, including one for contactless card payment transaction details, ensuring 100% validation coverage for all scenarios.",
      "Developed 5+ APIs using Swagger or client-specified API standards and optimized 20+ database queries to enhance system performance.",
      "Conducted 5+ knowledge transfer (KT) sessions for peers, improving onboarding efficiency and strengthening team collaboration.",
      "Resolved 50+ critical issues, reducing bug percentage to 5%, and ensuring a 95%+ defect-free product delivery to the client.",
      "Utilized LCS and DevOps work items to manage and deploy 10+ projects, streamlining development and deployment workflows.",
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
                className="w-16 h-16 object-cover rounded-full"
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
