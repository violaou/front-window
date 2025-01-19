import { Github, Linkedin } from 'lucide-react'
import '@fillout/react/style.css'
import { FilloutStandardEmbed } from '@fillout/react'

export const Contact = () => (
  <>
    <section className="p-16 bg-black text-white md:p-16 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-6xl mb-12 font-bold">LINKS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <a
            href="https://github.com/violaou"
            className="group flex items-center space-x-4 text-2xl"
          >
            <Github className="w-8 h-8" />
            <span className="group-hover:underline">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ouviola/"
            className="group flex items-center space-x-4 text-2xl"
          >
            <Linkedin className="w-8 h-8" />
            <span className="group-hover:underline">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
    <section className=" md:mb-16 h-[600px] lg:h-[700px]">
      <FilloutStandardEmbed filloutId="v1DC683uyyus" />
    </section>
  </>
)
