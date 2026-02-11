export type NavLink = {
  label: string;
  href: string;
};

export const primaryNavLinks: NavLink[] = [
  { label: 'Book a Ride', href: '/book-a-ride' },
  { label: 'Our Services', href: '/our-services' },
  { label: 'Business Solutions', href: '/business-solutions' },
  { label: 'Driver Portal', href: '/driver-portal' }
];

export const quickLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Book a Ride', href: '/book-a-ride' },
  { label: 'Our Services', href: '/our-services' },
  { label: 'Business Solutions', href: '/business-solutions' },
  { label: 'Driver Portal', href: '/driver-portal' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact-us' }
];

export const legalLinks: NavLink[] = [
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' }
];

export const contactDetails = {
  phone: '[PHONE NUMBER]',
  email: '[EMAIL ADDRESS]',
  whatsapp: '[WHATSAPP NUMBER]',
  office: '[OFFICE/BASE ADDRESS, CHESTER]'
};
