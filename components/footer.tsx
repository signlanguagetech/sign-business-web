import Link from 'next/link';
import { Github, Linkedin, Twitter, CodeXml } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-bold font-headline text-xl text-primary">
                 Solutions
              </span>
            </Link>
            <p className="text-muted-foreground text-center md:text-left text-sm max-w-xs">
              Your vision, engineered. Expert software development and product design to drive your business forward.
            </p>
          </div>
          
          <div className="text-center">
            <ul className="space-y-2 mt-0 md:mt-10 flex gap-0 flex-col md:flex-row md:gap-4 justify-center">
              <li><Link href="/#about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/#services" className="text-sm text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/#contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h3 className="font-headline text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="text-sm text-muted-foreground mb-4">
              <a href="mailto:solutions@signlanguagetech.com" className="text-primary font-medium hover:underline">
                solutions@signlanguagetech.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sign Language Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}