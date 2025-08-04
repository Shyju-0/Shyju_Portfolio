import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Code, Database, Server, Globe, ChevronDown } from 'lucide-react';
import UserImage from '../public/WhatsApp Image 2025-08-04 at 7.25.33 PM.jpeg?url'
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = {
    'Languages & Frameworks': ['JavaScript (ES6)', 'TypeScript', 'React.js', 'Next.js', 'Node.js'],
    'Frontend': ['HTML', 'CSS', 'Redux', 'Tailwind CSS', 'Bootstrap'],
    'Backend & API': ['Express.js', 'REST API', 'MVC', 'JWT', 'Redis', 'Socket.IO'],
    'Databases': ['MongoDB', 'MySQL', 'PostgreSQL'],
    'Tools & DevOps': ['Git', 'GitHub Actions', 'Postman', 'Figma', 'Linux', 'VS Code', 'Docker', 'AWS', 'Azure'],
    'Deployment': ['Render', 'Netlify', 'Vercel']
  };

  const experiences = [
    {
      title: 'Full Stack Developer - Intern',
      company: 'Rexknar Creative Solutions',
      period: '02/2024 - 04/2024',
      description: 'Developed comprehensive management systems and gained hands-on experience with modern web technologies.',
      achievements: [
        'Built School Management System using Next.js, TypeScript, and PostgreSQL',
        'Developed Company Management System with multiple modules',
        'Implemented CI/CD workflows using GitHub Actions',
        'Achieved 30% reduction in API response times through optimization'
      ]
    },
    {
      title: 'Full Stack Developer (MERN)',
      company: 'Since May 2024',
      period: 'May 2024 - Present',
      description: 'Continuing to build scalable web applications and expanding expertise in full-stack development.',
      achievements: [
        'Created dynamic UIs using React.js with Redux state management',
        'Engineered robust backend APIs with Node.js and MongoDB',
        'Integrated Socket.IO for real-time functionality',
        'Implemented clean MVC architecture patterns'
      ]
    }
  ];

  const projects = [
    {
      title: 'School Management System',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'TanStack Query'],
      description: 'Comprehensive system managing student attendance, examinations, grading, timetables, and registration for both students and staff.',
      features: ['Student & Staff Management', 'Attendance Tracking', 'Examination System', 'Grading & Reports', 'Timetable Management']
    },
    {
      title: 'Company Management System',
      tech: ['MERN Stack', 'Socket.IO', 'Redux'],
      description: 'Scalable system including modules for gate pass, employee, visitor, vehicle, storage, vendor, labour, and contract management.',
      features: ['Employee Management', 'Visitor Tracking', 'Vehicle Management', 'Inventory Control', 'Vendor Relations & More']
    },
    {
      title: 'Content Management System',
      tech: ['PERN Stack', 'SEO Optimization'],
      description: 'Dynamic CMS for managing website content, user roles, media uploads, and SEO-friendly pages.',
      features: ['Content Creation', 'Media Management', 'User Role System', 'SEO Optimization', 'Responsive Dashboard']
    }
  ];

  const certifications = [
    {
      title: 'Certified Course in Cloud DevOps',
      institution: 'AICTE ATAL Academy | ST. Xavier\'s Catholic College of Engineering',
      date: 'Aug 2024',
      description: 'One-week Faculty Development Program covering CI/CD pipelines, infrastructure automation, and cloud deployment strategies with hands-on training in AWS, Azure, Docker, and Kubernetes.'
    },
    {
      title: 'Full-Stack Web Development (MERN)',
      institution: 'Rexknar Coding Academy',
      date: '6-month program',
      description: 'Intensive hands-on training focused on building full-stack web applications using MongoDB, Express.js, React, and Node.js with real-world project experience.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            left: '10%'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
            bottom: '10%',
            right: '10%'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-bounce"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            top: '50%',
            left: '80%'
          }}
        />
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
              Shyju S
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-400 hover:scale-110 relative group ${
                    activeSection === item ? 'text-cyan-400' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full ${
                    activeSection === item ? 'w-full' : ''
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden hover:scale-110 transition-transform duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className="animate-spin" /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10 animate-slideDown">
              <div className="flex flex-col space-y-4 mt-4">
                {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="capitalize text-left hover:text-cyan-400 transition-all duration-300 hover:translate-x-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0 animate-fadeInLeft">
              <div className="relative group">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-cyan-400 to-purple-400 p-1 hover:scale-105 transition-all duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                    <img 
                      src={UserImage}
                      alt="Shyju S - Full Stack Developer"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                {/* <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div> */}
                
                {/* Floating particles around image */}
                <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute top-20 right-8 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-16 left-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce delay-500"></div>
                <div className="absolute bottom-10 right-12 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-700"></div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left animate-fadeInRight">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 hover:scale-105 transition-transform duration-300">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                  Shyju S
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 animate-typewriter">Full-Stack Developer</h2>
              <p className="text-xl text-gray-400 max-w-3xl mb-12 leading-relaxed animate-fadeInUp delay-300">
                Passionate about building scalable, real-time, and secure web applications using modern technologies. 
                Specialized in Next.js, React.js, Node.js, TypeScript, and cloud-native development practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp delay-500">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-3 rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 group"
                >
                  <span className="group-hover:animate-pulse">View My Work</span>
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border border-cyan-400 px-8 py-3 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25 group"
                >
                  <span className="group-hover:animate-pulse">Get In Touch</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-125 transition-transform duration-300" onClick={() => scrollToSection('about')}>
          <ChevronDown size={32} className="text-cyan-400 hover:text-purple-400 transition-colors duration-300" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a skilled full-stack developer with hands-on experience in building scalable, real-time, and secure web applications. 
                My passion lies in learning, problem-solving, and contributing to impactful solutions in collaborative team environments.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm familiar with integrating hardware and software systems and exploring cloud-native development practices. 
                I'm eager to grow in fast-paced engineering teams with exposure to full-stack development and DevOps workflows.
              </p>
              <div className="flex items-center gap-4 text-gray-400">
                <MapPin size={20} />
                <span>Nattalam, Kanyakumari District</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">Team Player</h3>
                <p className="text-gray-400">Collaborative mindset with excellent communication skills</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Problem Solving</h3>
                <p className="text-gray-400">Strong analytical skills and attention to detail</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-2 text-pink-400">Hard Working</h3>
                <p className="text-gray-400">Dedicated with full interest in every project</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">Learning</h3>
                <p className="text-gray-400">Continuously updating skills with latest technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible.skills ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
          }`}>
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div 
                key={category} 
                className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 group ${
                  isVisible.skills ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  {category.includes('Frontend') && <Globe className="text-cyan-400 mr-3 group-hover:animate-spin transition-transform duration-300" size={24} />}
                  {category.includes('Backend') && <Server className="text-purple-400 mr-3 group-hover:animate-pulse transition-transform duration-300" size={24} />}
                  {category.includes('Database') && <Database className="text-pink-400 mr-3 group-hover:animate-bounce transition-transform duration-300" size={24} />}
                  {category.includes('Languages') && <Code className="text-cyan-400 mr-3 group-hover:animate-pulse transition-transform duration-300" size={24} />}
                  {category.includes('Tools') && <Globe className="text-purple-400 mr-3 group-hover:animate-spin transition-transform duration-300" size={24} />}
                  {category.includes('Deployment') && <Server className="text-pink-400 mr-3 group-hover:animate-bounce transition-transform duration-300" size={24} />}
                  <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition-colors duration-300">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-3 py-1 rounded-full text-sm border border-cyan-400/30 hover:border-cyan-400 hover:scale-110 hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${(index * 150) + (skillIndex * 50)}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-2">{exp.title}</h3>
                    <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
                  </div>
                  <span className="text-purple-400 font-medium">{exp.period}</span>
                </div>
                <p className="text-gray-400 mb-6">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-2">•</span>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-purple-400">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <h4 className="text-xl font-semibold text-cyan-400 mb-2">{cert.title}</h4>
                  <p className="text-purple-400 mb-2">{cert.institution}</p>
                  <p className="text-gray-400 text-sm mb-4">{cert.date}</p>
                  <p className="text-gray-300">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-purple-500/20 px-2 py-1 rounded text-sm border border-purple-400/30">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl text-gray-300 mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center hover:border-cyan-400/50 transition-all duration-300">
                <Mail className="text-cyan-400 mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a href="mailto:shyjusha333@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  shyjusha333@gmail.com
                </a>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center hover:border-purple-400/50 transition-all duration-300">
                <Phone className="text-purple-400 mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <a href="tel:+918072917859" className="text-gray-300 hover:text-purple-400 transition-colors">
                  +91 8072917859
                </a>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center hover:border-pink-400/50 transition-all duration-300">
                <Linkedin className="text-pink-400 mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/shyju-s-08a891278/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors">
                  shyju-s
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Shyju S. Built with React, Vite, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;