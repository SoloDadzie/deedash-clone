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
  phone: '07380 201928',
  phoneTel: '07380201928',
  email: 'bookings@deedash.co.uk',
  whatsapp: '07380 201928',
  office: '12 Watergate Street, Chester, CH1 2LA'
};
