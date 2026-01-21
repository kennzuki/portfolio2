export default function Navbar() {
  const links = [
    { href: '#', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#projects', text: 'Projects' },
    { href: '#experience', text: 'Experience' },
    { href: '#contact', text: 'Contact' },
  ];
  return (
    <div>
      {/* desktop nav */}
      <div className='flex items-center justify-between gap-4 '>
        <section className=''>
          <h1 className='text-3xl font-bold hover:text-primary uppercase'>Ken Nzuki</h1>
        </section>
        <section className='flex items-center gap-1 tracking-tight px-4 py-2 glass rounded-full'>
          {links.map((link) => (
            <a className="px-4 py-2 text-muted-foreground hover:text-foreground" href={link.href}>{link.text}</a>
          ))}
        </section>
      </div>
      {/* mobile nav */}
      <div className=''></div>
    </div>
  );
}
