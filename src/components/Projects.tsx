import React from 'react';
import { ProjectCard } from './ProjectCard';

export const Projects = () => (
  <section className="h-[50vh] bg-black text-white p-8 md:p-16 overflow-y-auto">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-6xl mb-12 font-bold">WORKS</h2>
      <div className="space-y-16">
        <ProjectCard
          title="E-Commerce Platform"
          description="A modern marketplace built with cutting-edge technology"
          technologies={['React', 'Node.js', 'TypeScript']}
        />
        <ProjectCard
          title="AI Chat Application"
          description="Real-time communication powered by artificial intelligence"
          technologies={['Python', 'TensorFlow', 'WebSocket']}
        />
      </div>
    </div>
  </section>
);