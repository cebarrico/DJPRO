const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <>
        <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5.4" />
        <circle cx="12" cy="12" r="4.1" />
        <circle cx="17.7" cy="6.5" r=".85" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://www.whatsapp.com/",
    icon: (
      <>
        <path d="M20.1 11.7a8.1 8.1 0 0 1-12 7.1L3.5 20l1.2-4.4a8.1 8.1 0 1 1 15.4-3.9Z" />
        <path d="M8.6 8.4c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .7.5.9 1.3 1.6 2.2 2.1.3.2.5.2.7 0l.8-.9c.2-.2.4-.2.6-.1l1.6.8c.2.1.4.3.4.5 0 .3-.2 1.2-.8 1.6-.5.4-1.1.6-1.8.5-1.3-.2-2.8-1-4-2.1-1.2-1.1-2.1-2.6-2.3-3.7-.2-1 .2-1.8.8-2.3Z" />
      </>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <>
        <path d="M21 8.1a2.7 2.7 0 0 0-1.9-1.9C17.4 5.7 12 5.7 12 5.7s-5.4 0-7.1.5A2.7 2.7 0 0 0 3 8.1a28 28 0 0 0-.5 3.9A28 28 0 0 0 3 15.9a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.1.5 7.1.5s5.4 0 7.1-.5a2.7 2.7 0 0 0 1.9-1.9 28 28 0 0 0 .5-3.9 28 28 0 0 0-.5-3.9Z" />
        <path d="m10 9.5 5 2.5-5 2.5z" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M7.2 9.3c3.5-1 7.3-.6 10.2 1.2M7.9 12.3c2.8-.7 5.7-.4 8.1 1.1m-7.3 1.9c2.1-.5 4.1-.2 5.8.8" />
      </>
    ),
  },
];

export function HeroSocialRail() {
  return (
    <aside
      aria-label="Redes sociais"
      className="absolute left-5 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-4 sm:flex lg:left-10 scale-150"
    >
      <span className="h-8 w-px bg-gradient-to-b from-transparent via-white/30 to-white/5" />
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          className="group flex h-7 w-7 items-center justify-center text-white/55 transition-[color,transform,filter] duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:scale-110 hover:text-[#72e5ef] hover:[filter:drop-shadow(0_0_6px_rgba(114,229,239,.55))] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#72e5ef]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            {social.icon}
          </svg>
        </a>
      ))}
      <span className="h-8 w-px bg-gradient-to-b from-white/5 via-white/30 to-transparent" />
    </aside>
  );
}
