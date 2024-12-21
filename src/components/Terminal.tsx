import React from 'react';
import { Terminal as TerminalIcon, Github, Mail, Linkedin, Code2 } from 'lucide-react';

interface CommandProps {
  command: string;
  output: React.ReactNode;
}

const Command: React.FC<CommandProps> = ({ command, output }) => (
  <div className="mb-4">
    <div className="flex items-center text-green-500">
      <span className="mr-2">$</span>
      <span className="font-mono">{command}</span>
    </div>
    <div className="ml-4 mt-2 text-amber-100">{output}</div>
  </div>
);

export const Terminal: React.FC = () => {
  return (
    <div className="font-mono bg-gray-900 p-6 rounded-lg shadow-xl border-2 border-green-500 max-w-3xl w-full mx-auto overflow-hidden">
      <div className="flex items-center mb-4 border-b border-green-500 pb-2">
        <TerminalIcon className="w-5 h-5 text-green-500 mr-2" />
        <span className="text-green-500">developer@portfolio ~ %</span>
      </div>
      
      <Command
        command="cat about.txt"
        output={
          <div>
            Hi, I'm John Doe, a passionate software developer with 5+ years of experience
            crafting robust web applications. Specialized in React, TypeScript, and Node.js.
          </div>
        }
      />

      <Command
        command="ls ./skills/"
        output={
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {['TypeScript', 'React', 'Node.js', 'Python', 'Docker', 'AWS'].map((skill) => (
              <div key={skill} className="flex items-center">
                <Code2 className="w-4 h-4 mr-2 text-green-500" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        }
      />

      <Command
        command="cat projects.json"
        output={
          <div className="space-y-4">
            <div className="border border-green-500 p-4 rounded">
              <h3 className="text-green-500">E-Commerce Platform</h3>
              <p>Built a scalable e-commerce solution using React and Node.js</p>
            </div>
            <div className="border border-green-500 p-4 rounded">
              <h3 className="text-green-500">AI Chat Application</h3>
              <p>Developed a real-time chat application with AI integration</p>
            </div>
          </div>
        }
      />

      <Command
        command="cat contact.txt"
        output={
          <div className="flex space-x-4">
            <a href="#" className="flex items-center text-green-500 hover:text-green-400">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a href="#" className="flex items-center text-green-500 hover:text-green-400">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a href="#" className="flex items-center text-green-500 hover:text-green-400">
              <Mail className="w-5 h-5 mr-2" />
              Email
            </a>
          </div>
        }
      />
    </div>
  );
};