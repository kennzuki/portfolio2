export default function Projects() {
  const projects = [
    {
      name: 'projectpern',
      image: '',
      descrption: '',
      link: '',
    },
    {
      name: 'projectpern',
      image: '',
      descrption: '',
      link: '',
    },
    {
      name: 'projectpern',
      image: '',
      descrption: '',
      link: '',
    },
    {
      name: 'projectpern',
      image: '',
      descrption: '',
      link: '',
    },
  ];
  return (
    <section className="max-w-6xl text-center mx-auto p-8 mb-8 space-y-4 text-foreground capitalize">
      <h2 className='text-2xl font-bold'> my Projects</h2>
      <p className='text-lg'>showcasing some of my projects and work</p>
      <article className='grid xs:grid-cols-1 md:grid-cols-2 items-center gap-2 glass rounded-xl p-6 shadow-xl shadow-primary hover:scale-105 hover:glass-strong'>{
        projects.map((project) => (
           <div className=" glass rounded-2xl shadow-2xl p-8 max-w-md w-full transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {project.name}
        </h2>
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          Full-stack developer passionate about creating beautiful and functional web experiences. 
          Specializing in modern JavaScript frameworks and responsive design.
        </p>
        <a 
          href="https://example.com" 
          className="inline-block bg-linear-to-r from-purple-600 to-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1"
        >
          Visit Profile
        </a>
      </div>
        )

  )}</article>
    </section>
  );
}
