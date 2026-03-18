import TypingEffect from 'react-typing-effect';
import HeroImage from '../assets/hero_image.png';

const Hero = () => {
  return (
    <div className='text-center py-16 bg-white dark:bg-black text-black dark:text-white'>
      <img 
        src={HeroImage} 
        alt="Chaitanya Ginnela" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105' 
      />
      <h1 className='text-4xl font-bold mb-4'>
        <TypingEffect
          text={['Hi there!', `I'm Chaitanya`]}
          speed={50}
          eraseDelay={2000}
          typingDelay={500}
          cursorRenderer={cursor => <span className="text-black dark:text-white">{cursor}</span>}
        />
      </h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
        <span className="font-semibold text-gray-800 dark:text-gray-200">
          Full-stack 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400">
            {' '}Software Engineer
          </span>{' '}
          with 3+ years building production systems using <strong>Python</strong>, 
          <strong> React</strong>, and <strong>cloud-native architectures</strong>.<br />
          Experienced in <strong>backend microservices</strong>, 
          <strong> payment platforms</strong>, and 
          <strong> ML-driven applications</strong> across finance and healthcare domains.<br />
          Currently open to <strong>Software Engineer</strong> and 
          <strong> Full Stack Developer</strong> roles in the US.
        </span>
      </p>
    </div>
  );
};

export default Hero;
