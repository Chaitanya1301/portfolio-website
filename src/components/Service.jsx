//import AmazonImage from '../assets/Amazon.png';  // Import the Amazon image
import AccentureImage from '../assets/AccentureLogo.png'; // Import the Nagarro image
//import KPMGImg from '../assets/KPMGImage.png';         // Import the RQB Technologies image
import SynchronyImage from '../assets/Synchrony_Logo_RGB_Pos.png'; // Import the Synchrony image
import CitiusTechImage from '../assets/CitiusTech_img.png'; // Import the CitiusTech image

const experience = [
  // Currently working at Synchrony Financial Services as a Full Stack Software Engineer
  {
    company: "Synchrony",
    image: SynchronyImage,
    position: "Full Stack Software Engineer",
    duration: "Nov 2025 – Present",
    location: "Remote",
    details: [
      "Engineered Python microservices and React components to integrate Synchrony payment APIs with merchant portals, reducing payment reconciliation time by 35% and improving transaction reliability.",
      "Designed responsive React UIs and implemented client-side state management with Redux to streamline checkout flows, increasing completed applications by 12% on partner merchant sites.",
      "Integrated AWS Lambda functions and Azure App Services with Python backend to handle asynchronous credit-decision workflows, reducing latency by 28% and boosting peak throughput.",
      "Instrumented observability using Prometheus and Grafana, and added structured Python logging to analyze failures faster, decreasing mean time to detect and resolve incidents by 40%.",
      "Orchestrated Azure DevOps CI/CD pipelines with Docker and infrastructure-as-code templates, enabling zero-downtime releases and cutting manual release tasks by 30% for cross-functional teams.",
    ],
  },
  {
    company: "Accenture Private Limited Solutions",
    image: AccentureImage,
    position: "Software Engineer II",
    duration: "Mar 2023 – Aug 2023",
    location: "Telangana, India",
    details: [
      "Led design and delivery of Python (FastAPI) microservices + React frontends for high-volume payment features, increasing transaction success rate by 15% across partner applications.",
      "Owned end-to-end API platform (design, versioning, rollout) for 12+ client teams, standardizing Swagger/OpenAPI contracts and cutting integration defects by 35%.",
      "Architected background processing pipelines using Python, Celery, and Redis to offload heavy workflows, reducing peak request latency by 40% and improving UI responsiveness.",
      "Directed containerization and Azure DevOps CI/CD strategy for the team, enabling zero-downtime blue/green deployments and shrinking release cycles from weekly to daily.",
      "Introduced observability best practices (structured logging, metrics dashboards, alerting) that reduced mean time to detect and resolve production issues by 45%.",
      "Mentored 3 junior engineers on Python/React patterns, code reviews, and testing practices, improving team code quality (lint/test pass rates) by 25% and onboarding speed.",
      "Collaborated with security and platform teams to refine RBAC and API access policies, closing audit findings and maintaining 100% compliance for internal audits.",
    ],
  },
  /*
  uilt and maintained Python (FastAPI/Flask) microservices + React UIs for payment flows, improving end-to-end transaction reliability by 25% across enterprise web applications.
Developed 10+ RESTful APIs with Swagger/OpenAPI and SQL optimization, increasing backend throughput by 30% while keeping P95 latency under 200ms for partner integrations.
Implemented 4 real-time React forms with client-side validation and API integration, achieving 100% scenario coverage and reducing checkout drop-offs by 12% in internal UAT.
Automated recurring backend jobs using Python scripts + schedulers, cutting manual reconciliation and reporting work by 25% (20->15 hours/week) for operations teams.
Containerized services with Docker and orchestrated deployments via Azure DevOps CI/CD, enabling zero-downtime releases and reducing release effort by 30% per sprint.
Implemented authentication and role-based access (JWT/OAuth2, RBAC) for APIs and internal tools, hardening security and passing 100% internal compliance checks.
Collaborated with cross-functional teams (QA, product, infra) to triage and resolve production incidents, reducing mean time to recovery (MTTR) by 40% and protecting high-value transactions*/
  {
    company: "Accenture Private Limited Solutions",
    image: AccentureImage,
    position: "Software Engineer I",
    duration: "Sep 2021 – Mar 2023",
    location: "Telangana, India",
    details: [
      "Built and maintained Python (FastAPI/Flask) microservices + React UIs for payment flows, improving end-to-end transaction reliability by 25% across enterprise web applications.",
      "Developed 10+ RESTful APIs with Swagger/OpenAPI and SQL optimization, increasing backend throughput by 30% while keeping P95 latency under 200ms for partner integrations.",
      "Implemented 4 real-time React forms with client-side validation and API integration, achieving 100% scenario coverage and reducing checkout drop-offs by 12% in internal UAT.",
      "Automated recurring backend jobs using Python scripts + schedulers, cutting manual reconciliation and reporting work by 25% (20->15 hours/week) for operations teams.",
      "Containerized services with Docker and orchestrated deployments via Azure DevOps CI/CD, enabling zero-downtime releases and reducing release effort by 30% per sprint.",
      "Implemented authentication and role-based access (JWT/OAuth2, RBAC) for APIs and internal tools, hardening security and passing 100% internal compliance checks.",
      "Collaborated with cross-functional teams (QA, product, infra) to triage and resolve production incidents, reducing mean time to recovery (MTTR) by 40% and protecting high-value transactions.",
    ],
  },
  // Add expeience Software Developer, CitiusTech | India | Jun 2020 – Aug 2021
  /* 
  Developed Python Flask API endpoints under senior guidance to ingest HL7 and FHIR messages from EHRs, enabling timely clinical data flow and improving test pipeline throughput by 25%.
Assisted in designing Python-based PostgreSQL schemas and MongoDB collections for patient and encounter records, supporting consistent cross-service queries and reducing data mismatch incidents during integrations.
Built Python ETL jobs using pandas and Apache Airflow to transform raw clinical events into FHIR resources, enabling near-realtime dashboards for careteams within five minutes.
Supported Docker containerization and Python packaging for application components, maintaining Jenkins CI jobs to accelerate reproducible deployments and reduce environment-related debugging time for developers.
Collaborated on monitoring Python services using Prometheus and Grafana, triaging performance alerts and contributing fixes that improved microservice response times during peak test runs.
Automated Python-based data validation with pytest and JSON Schema for clinical payloads, increasing structured-data compliance and reducing manual QA cycles for interfacing systems.*/
  {
    company: "CitiusTech",
    image: CitiusTechImage,
    position: "Software Developer",
    duration: "Jun 2020 – Aug 2021",
    location: "India",
    details: [
      "Developed Python Flask API endpoints under senior guidance to ingest HL7 and FHIR messages from EHRs, enabling timely clinical data flow and improving test pipeline throughput by 25%.",
      "Assisted in designing Python-based PostgreSQL schemas and MongoDB collections for patient and encounter records, supporting consistent cross-service queries and reducing data mismatch incidents during integrations.",
      "Built Python ETL jobs using pandas and Apache Airflow to transform raw clinical events into FHIR resources, enabling near-real-time dashboards for careteams within five minutes.",
      "Supported Docker containerization and Python packaging for application components, maintaining Jenkins CI jobs to accelerate reproducible deployments and reduce environment-related debugging time for developers.",
      "Collaborated on monitoring Python services using Prometheus and Grafana, triaging performance alerts and contributing fixes that improved microservice response times during peak test runs.",
      "Automated Python-based data validation with pytest and JSON Schema for clinical payloads, increasing structured-data compliance and reducing manual QA cycles for interfacing systems.",
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
