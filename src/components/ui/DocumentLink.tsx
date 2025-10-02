import React from 'react';
import RevealAnimation from './RevealAnimation';
import { ExternalLink, Award } from 'lucide-react';

interface DocumentLinkProps {
  name: string;
  url: string;
  delay?: number;
  icon?: 'award' | 'external';
  className?: string;
  logo?: string;
}

const DocumentLink: React.FC<DocumentLinkProps> = ({ 
  name, 
  url, 
  delay = 0, 
  icon = 'award',
  className = '',
  logo
}) => {
  const IconComponent = icon === 'award' ? Award : ExternalLink;

  return (
    <RevealAnimation animation="fade-in-up" delay={delay}>
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`group bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl flex items-start border border-blue-100/50 hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] hover:scale-[1.03] hover:from-blue-100 hover:to-purple-100 hover:border-blue-200 animate-fade-in ${className}`}
      >
        {logo ? (
          <div className="mr-3 mt-1 w-10 h-10 flex items-center justify-center bg-white rounded-lg p-1.5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
            <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain" />
          </div>
        ) : (
          <div className="mr-3 mt-1 p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300">
            <IconComponent size={16} />
          </div>
        )}
        <div className="flex-1">
          <span className="font-medium text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
            {name}
          </span>
          <div className="flex items-center mt-1 text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
            <span className="text-sm">View Certificate</span>
            <ExternalLink size={12} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </a>
    </RevealAnimation>
  );
};

export default DocumentLink;