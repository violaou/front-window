import { ProjectCard } from './ProjectCard'

const PROJECTS = [
  {
    title: 'Study Desk',
    description: 'A page to get into study mode, with pomodoro timer',
    technologies: ['React', 'Node.js', 'TypeScript']
  }
  // {
  //   title: '',
  //   description: 'R',
  //   technologies: []
  // }
]

export const Projects = () => (
  <section className="h-[50vh] bg-black text-white p-8 md:p-16 overflow-y-auto">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-6xl mb-12 font-bold">PROJECTS</h2>
      <div className="space-y-16">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  </section>
)
