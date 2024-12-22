import React from 'react'

const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker']

export const Skills = () => (
  <section className="bg-white text-black p-8 md:p-16 overflow-y-auto">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-6xl mb-12 font-bold">SKILLS</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div key={skill} className="text-4xl font-light">
            {skill}
          </div>
        ))}
      </div>
    </div>
  </section>
)
