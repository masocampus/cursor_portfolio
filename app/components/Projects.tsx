import React from 'react';
import Image from 'next/image';

export interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  tech: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-10 text-center">프로젝트</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 relative">
              {project.imageUrl ? (
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} 프로젝트 이미지`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              ) : (
                <div className="h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  프로젝트 이미지
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                <strong>사용 기술:</strong> {project.tech}
              </div>
              <div className="flex space-x-3">
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors"
                  >
                    데모 보기
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 