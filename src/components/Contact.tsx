import { MdAttachEmail } from 'react-icons/md';
import { FaSquareGithub } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io5';
import { Link } from 'react-router';

export default function Contact() {
  const socials = [
    {
      name: 'Github',
      icon: <FaSquareGithub size={40} />,
      link: 'https://github.com/kennzuki/',
    },
    {
      name: 'Linkedin',
      icon: <IoLogoLinkedin size={40} />,
      link: 'https://www.linkedin.com/in/ken-nzuki-72511515b',
    },
    {
      name: 'Email',
      icon: <MdAttachEmail size={40} />,
      link: 'kennzuki@gmail.com',
    },
  ];
  return (
    <section className='space-y-6'>
      <h3 className='text-xl font-bold uppercase text-center'>Get in touch</h3>
      <p className='text-center mb-8'>Get in touch and let's connect</p>
      <article className=''>
        <article className='grid sm:grid-cols-1 md:grid-cols-2 gap-6'>
          {/* right */}
          <article className=''>
            <form action='' className='space-y-4 flex flex-col'>
              <label htmlFor='' className='block text-sm font-medium mb-2'>
                Name
              </label>
              <input
                type='text'
                className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all'
              />
              <label htmlFor='' className=''>
                Email
              </label>
              <input
                type='email'
                className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all'
              />
              <label htmlFor='' className=''>
                Message
              </label>
              <textarea className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all' />
              <button
                type='submit'
                className='glass text-foreground py-2 px-4 rounded-xl bg-primary hover:bg-primary/90 transition-colors'
              >
                Submit
              </button>
            </form>
          </article>
          {/* right */}

          <article className='animate-fade-in animation-delay-400 p-4'>
            {socials.map((item, i) => (
              <article key={i} className='flex gap-4 place-items-center mb-4'>
                <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                  {item.icon}
                </div>

                <div className='text-sm text-muted-foreground flex flex-col items-start gap-2 '>
                  <p className='text-foreground text-xl'> {item.name}</p>

                  <a
                    href={item.link}
                    className='rounded-xl hover:bg-surface transition-colors group'
                  >
                    {item.link}
                  </a>
                </div>
              </article>
            ))}
          </article>
        </article>
      </article>
    </section>
  );
}
