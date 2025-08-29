export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Our Work' },
  { href: '/about', label: 'About Us' },
  // { href: '/category-identifier', label: 'AI Tool' },
  // { href: '/contact', label: 'Contact' },
];
