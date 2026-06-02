'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import QuintaEscalaLogo from '@/components/ui/QuintaEscalaLogo';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/',           label: 'Inicio' },
  { href: '/servicios',  label: 'Servicios' },
  { href: '/productos',  label: 'Productos' },
  { href: '/portfolio',  label: 'Portfolio' },
  { href: '/nosotros',   label: 'Nosotros' },
  { href: '/contacto',   label: 'Contacto' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close menu when navigating
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.brandLogo}>
          <QuintaEscalaLogo size={24} showText />
        </Link>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname?.startsWith(link.href) ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className={styles.actions}>
          <Link href="/contacto" className="btn btn--primary btn--sm">
            Hablemos
          </Link>
          {/* Mobile toggle */}
          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`} aria-hidden={!menuOpen}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileLink} ${pathname?.startsWith(link.href) ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contacto" className={`btn btn--primary ${styles.mobileCta}`}>
            Hablemos
          </Link>
        </nav>
      </div>
    </header>
  );
}
