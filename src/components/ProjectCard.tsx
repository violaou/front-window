import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies }) => (
  <div className="group">
    <h3 className="text-4xl font-bold mb-4">{title}</h3>
    <p className="text-xl mb-6 text-neutral-400">{description}</p>
    <div className="flex flex-wrap gap-4">
      {technologies.map((tech) => (
        <span key={tech} className="text-sm tracking-wider">
          {tech}
        </span>
      ))}
    </div>
  </div>
);