import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerBrand}>
          <div className={styles.logo}>
            <Image src="/images/smart_awnings_and_canopies_logo-1-1.png" alt="Smart Awnings & Canopies" width={200} height={75} style={{ objectFit: 'contain' }} className={styles.footerLogoImage} />
          </div>
          <p className={styles.tagline}>Premium outdoor shading and shelter systems for homes and commercial spaces across the UK.</p>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.linkGroup}>
            <h3>Products</h3>
            <Link href="/products/retractable-roofs">Retractable Roofs</Link>
            <Link href="/products/bioclimatic-louvres">Bioclimatic Louvres</Link>
            <Link href="/products/awnings">Awnings</Link>
            <Link href="/products/glass-rooms">Glass Rooms</Link>
          </div>
          <div className={styles.linkGroup}>
            <h3>Company</h3>
            <Link href="/services.html">Services</Link>
            <Link href="#expertise">Expertise</Link>
            <Link href="#works">Works</Link>
            <Link href="#faqs">FAQs</Link>
          </div>
          <div className={styles.linkGroup}>
            <h3>Contact</h3>
            <p>Tel: <a href="tel:07971917201">07971917201</a></p>
            <Link href="#quote">Request a Quote</Link>
            <Link href="#survey">Book a Site Survey</Link>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Smart Awnings & Canopies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
