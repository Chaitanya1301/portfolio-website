import { useRef, useState, useEffect } from 'react'; // Import hooks

import UdemyImage from '../assets/Udemy.png'; // GeeksforGeeks logo
import UmImage from '../assets/um.png'; // University of Michigan logo
import MicrosoftImg from '../assets/MicrosoftCertificate_ssc.png'; // Stanford University logo
//import HackImage from '../assets/hacker.png'; // HackerRank logo
//import UcImage from '../assets/uc.png'; // UC San Diego logo

// Sample certifications data
const certifications = [
  {
    title: 'Udemy',
    description: 'Certified on completing Data Structures & Algorithms in Python on Udemy.',
    url: 'https://www.udemy.com/certificate/UC-bd9c54db-c013-4d8f-a59a-774d11751311/',
    image: UdemyImage
  },
  {
    title: 'University of Michigan',
    description: 'Certified on completing Python for Everybody (Specialization) on Coursera.',
    url: 'https://www.coursera.org/account/accomplishments/specialization/657UE8SFX5LC',
    image: UmImage
  },
  {
    title: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
    description: 'Certified on completing the Machine Learning course on Coursera.',
    url: 'https://www.credly.com/badges/74cc25ac-8d8e-49e0-a3de-2dc92599fcc3/linked_in_profile',
    image: MicrosoftImg
  },
  // Add more certifications as needed
];

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    const rect = sectionRef.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="Certifications"
      ref={sectionRef}
      className={`bg-white dark:bg-black text-black dark:text-white py-20 ${
        isVisible ? 'animate-zoomIn' : ''
      }`}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105 flex items-center space-x-6"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {cert.title}
                  </a>
                </h3>
                <p className="text-lg">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
