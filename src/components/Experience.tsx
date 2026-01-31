import { SiPostgresql, SiReact,SiTailwindcss,SiTypescript, SiNextdotjs, SiPrisma, SiMongodb  } from "react-icons/si";

export default function Experience() {
  const techs = [
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {icon: <SiReact />,
      name: "react js",
    },
    {
      name: "Next js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Tailwind css",
      icon: <SiTailwindcss />,
    },
    {
      name: "Prisma js",
      icon: <SiPrisma />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript />,
    },
  
  ]
  return (
    <section className="glass rounded-full px-2 py-5 flex flex-col items-center gap-1 space-y-4 capitalize">
      <h2 className="text-primary  text-2xl">Text stack & expertise</h2>
      <p className="">technologies i work with to build projects and products</p>
      <article className="grid md:grid-cols-3 items-center gap-4 p-8 text-xl">
      { techs.map((tech) => (
        <article className="flex flex-col items-center gap-2 glass rounded-xl py-2 px-4 shadow-xl shadow-primary hover:scale-105 hover:glass">
          {tech.icon}
          <span>{tech.name}</span>
        </article>
      ))}
      
      </article>
      
    </section>
  )
}
