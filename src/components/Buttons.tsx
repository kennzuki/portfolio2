

export default function Buttons({ className="", children, size="md" }) {
    const baseClasses = 'uppercase relative overflow-hidden font-bold py-2 px-4 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary <text-primary-foreground hover:bg-primary/80 shadow-lg shadow-primary/25';
    const sizeClasses ={
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`
  return (
      <div className={classes}>
           <span className="relative flex items-center justify-center gap-2">{children}</span>
    </div>
  )
}
