import githubIcon from '../assets/github-icon-2.svg';
import linkedinIcon from '../assets/linkedin-icon-2.svg';
import gmailIcon from '../assets/gmail-icon.svg';

function Contact() {
  const contactItems = [
    {
      name: 'Email',
      link: 'mailto:vedantsalvekar86@gmail.com',
      icon: gmailIcon,
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/vedant-salvekar-7b4a5b211/',
      icon: linkedinIcon,
    },
    {
      name: 'GitHub',
      link: 'https://github.com/VedantSalvekar',
      icon: githubIcon,
    },
    {
      name: 'Phone',
      link: 'tel:+353899444772',
      icon: null,
    },
  ];

  return (
    <section className="flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl mx-auto w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Get In Touch
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8">
          {contactItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : '_self'}
              rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform duration-200"
            >
              {item.icon ? (
                <img 
                  src={item.icon} 
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <svg 
                  className="w-full h-full text-gray-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
