import { useRef, useState, useEffect } from 'react';
import LinkedInImage from '../assets/linkedin.png';
import GitHubImage from '../assets/github.png';
import MailImage from '../assets/mail.png';
import ResumePDF from '../assets/Chaitanya_Ginnela_Resume.pdf';
import LeetCodeImage from '../assets/LeetCode.png';

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`bg-white dark:bg-black text-black dark:text-white py-20 transform transition-transform duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      id="about"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col items-center md:space-x-12">
          <div className="flex-1">
            <p className="text-lg mb-8 text-justify">
              I am currently pursuing a Master of Science in Computer Science at Purdue University Northwest with a 
              GPA of 3.7/4.0. I have over a year of full-time experience as a Software Engineer at Accenture, specializing 
              in software development, data engineering, cloud solutions, and machine learning. My technical expertise includes 
              Python, Java, C#, and cloud platforms such as AWS and Microsoft Azure. I have worked on optimizing data pipelines, 
              implementing scalable cloud architectures, and developing machine learning models for intelligent automation. 
              I am currently seeking Summer 2025 internship and full-time opportunities in software engineering, data engineering, 
              cloud engineering, and machine learning, where I can contribute, learn, and grow in a challenging environment.
            </p>
            <p className="text-lg mb-8 text-justify">
              My achievements include securing first prize in a college coding competition among 500 participants and 
              earning certifications such as Python for Everybody (Coursera) and Data Structures & Algorithms in Python 
              (Udemy). I have solved over 100 coding challenges across platforms like LeetCode, GFG.
            </p>
            <div className="flex justify-center items-center space-x-6 my-8">
              <a href="https://www.linkedin.com/in/chaitanya-ginnela/" target="_blank" rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105">
                <img src={LinkedInImage} alt="LinkedIn" className="w-10 h-10" />
              </a>
              <a href="https://github.com/Chaitanya1301" target="_blank" rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105">
                <img src={GitHubImage} alt="GitHub" className="w-10 h-10 filter brightness-100 dark:brightness-100" />
              </a>
              <a href="mailto:g.chaitu1130@gmail.com"
                className="transform transition-transform duration-300 hover:scale-105">
                <img src={MailImage} alt="Email" className="w-10 h-10" />
              </a>
              <a href="https://leetcode.com/u/Chaitu1130/" target="_blank" rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105">
                <img src={LeetCodeImage} alt="LeetCode" className="w-10 h-10" />
              </a>
              <a href={ResumePDF} target="_blank" rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105">
                View Resume
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
