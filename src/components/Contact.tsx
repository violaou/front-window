import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

export const Contact = () => (
  <section className="h-[50vh] bg-black text-white p-8 md:p-16 flex items-center">
    <div className="max-w-6xl mx-auto w-full">
      <h2 className="text-6xl mb-12 font-bold">CONTACT</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <a href="#" className="group flex items-center space-x-4 text-2xl">
          <Github className="w-8 h-8" />
          <span className="group-hover:underline">GitHub</span>
        </a>
        <a href="#" className="group flex items-center space-x-4 text-2xl">
          <Linkedin className="w-8 h-8" />
          <span className="group-hover:underline">LinkedIn</span>
        </a>
        <a href="#" className="group flex items-center space-x-4 text-2xl">
          <Mail className="w-8 h-8" />
          <span className="group-hover:underline">Email</span>
        </a>
      </div>
    </div>
  </section>
);