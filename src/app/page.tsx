"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ============================================
   SVG ICON COMPONENTS
   ============================================ */
function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M8.5 2.5L3.75 7.5L1.5 5.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h10m0 0L9 4m4 4L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 3.5V7L9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M7 1.5C4.79 1.5 3 3.29 3 5.5C3 8.5 7 12.5 7 12.5C7 12.5 11 8.5 11 5.5C11 3.29 9.21 1.5 7 1.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="7" cy="5.5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="5" cy="4" r="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1 12c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="10" cy="4.5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10.5 8c1.38 0 2.5 1.12 2.5 2.5V12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ============================================
   NAVBAR COMPONENT
   ============================================ */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo" id="logo" onClick={closeMenu}>
          <Image
            src="/assets/Logo Akar Jogja.svg"
            alt="AKAR Jogja Logo"
            width={95}
            height={64}
            style={{ width: '94.75px', height: '64.39px' }}
            priority
          />
        </a>

        {/* Desktop Menu */}
        <div className="navbar-right" id="nav-right">
          <a href="#tentang">TENTANG</a>
          <a href="#program">PROGRAM</a>
          <a href="#fasilitas">FASILITAS</a>
          <a href="https://wa.me/6281299509961" target="_blank" rel="noopener noreferrer">KONTAK</a>
          <a 
            href="https://wa.me/6281299509961" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary" 
            id="nav-cta"
          >
            Daftar Sekarang
            <ArrowRight />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div
          className={`navbar-mobile-toggle ${isOpen ? 'active' : ''}`}
          id="mobile-toggle"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`navbar-mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          <a href="#tentang" onClick={closeMenu}>TENTANG</a>
          <a href="#program" onClick={closeMenu}>PROGRAM</a>
          <a href="#fasilitas" onClick={closeMenu}>FASILITAS</a>
          <a href="https://wa.me/6281299509961" onClick={closeMenu} target="_blank" rel="noopener noreferrer">KONTAK</a>
          <a 
            href="https://wa.me/6281299509961" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary" 
            onClick={closeMenu}
          >
            Daftar Sekarang
            <ArrowRight />
          </a>
        </div>
      </div>
    </nav>
  );
}


/* ============================================
   HERO SECTION
   ============================================ */
function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-pattern" />
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Siapkan diri Kerja di
            <br />
            Industri <span className="highlight">Hospitality.</span>
          </h1>
          <p className="hero-subtitle">
            Training yang tepat, peluang kerja
            <br />
            datang lebih cepat!
          </p>
          <p className="hero-description">
            AKAR adalah lembaga pelatihan kerja berbasis industri nyata yang
            mempersiapkan tenaga hospitality siap kerja melalui praktik langsung di hotel.
          </p>
          <div className="hero-actions">
          <a 
            href="https://wa.me/6281299509961" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary btn-primary-lg" 
            id="hero-cta"
          >
            Daftar Sekarang
            <ArrowRight />
          </a>
          </div>
          <div className="hero-social-proof">
            <div className="hero-avatars">
              <Image
                src="/assets/Avatars.png"
                alt="Students"
                width={120}
                height={36}
                priority
              />
            </div>
            <div className="hero-social-text">
              Bergabung dengan  <strong>100+ Alumni</strong>  lainnya
            </div>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src="/assets/Hero Image.png"
            alt="AKAR Hospitality Training Team"
            width={673}
            height={690}
            priority
            className="hero-main-img"
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================
   ABOUT SECTION
   ============================================ */
function AboutSection() {
  return (
    <section className="about" id="tentang">
      <div className="about-container">
        <div className="about-image-wrapper">
          <Image
            src="/assets/Akar Jogja People.png"
            alt="Team AKAR Jogja"
            width={533.86}
            height={391}
          />
        </div>
        <div className="about-content">
          <h2>
            Tentang <span className="highlight">AKAR</span>
          </h2>
          <p className="about-subtitle">
            Lembaga Pelatihan Kerja Hospitality Profesional
          </p>
          <p className="about-text">
            AKAR adalah lembaga pelatihan kerja yang telah berdiri sejak tahun 2019.
            Kami fokus melatih peserta di bidang Housekeeping dan Kitchen.
          </p>
          <p className="about-text">
            Kami berkomitmen kepada BNSP/LSP agar melatih skill para siswa di industri
            hospitality. Peserta tidak hanya belajar di kelas, tetapi langsung praktik di industri
            sehingga siap untuk bekerja langsung dengan dunia kerja di Hotel.
          </p>
          <div className="about-quote">
            <p>
              &ldquo;AKAR membuktikan bahwa hospitality siap kerja melalui pelatihan berbasis
              industri nyata, bukan sekadar teori.&rdquo;
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">2019</div>
              <div className="stat-label">Didirikan</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2</div>
              <div className="stat-label">Program Unggulan</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Alumni Terserap</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   VISION SECTION
   ============================================ */
function VisionSection() {
  const items = [
    "Menyelenggarakan pelatihan berbasis praktik industri melalui kemitraan dengan hotel berbintang.",
    "Membekali peserta dengan kompetensi teknis dan karakter kerja profesional (attitude, disiplin).",
    "Menyediakan jalur penempatan kerja nasional dan internasional.",
    "Meningkatkan daya serap kerja lulusan SMA/SMK melalui pelatihan terstruktur 6 bulan.",
    "Membangun kemitraan berkelanjutan dengan hotel, restoran, rumah sakit, dan kapal pesiar.",
  ];

  return (
    <section className="vision" id="visi">
      <div className="vision-container">
        <div className="vision-left">
          <span className="section-label">Visi Kami</span>
          <h2>
            Menjadi lembaga pelatihan kerja hospitality terdepan di Indonesia.
          </h2>
          <p>
            Kami berkomitmen menghasilkan tenaga profesional berstandar industri global dan berdaya saing internasional untuk masa depan pariwisata Indonesia.
          </p>
        </div>
        <div className="vision-right">
          <span className="section-label">Misi Kami</span>
          <div className="vision-items-grid">
            {items.map((item, i) => (
              <div className="vision-item" key={i}>
                <div className="vision-number">{i + 1}</div>
                <div className="vision-item-content">
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   VALUES SECTION
   ============================================ */
function ValuesSection() {
  const values = [
    {
      letter: "A",
      icon: "/assets/icon-Attitude.png",
      title: "Attitude First",
      desc: "Sikap adalah fondasi karier. Profesionalisme dan integritas lebih utama dari sekadar skill.",
    },
    {
      letter: "K",
      icon: "/assets/icon-Kompeten.png",
      title: "Kompeten",
      desc: "Menguasai SOP industri, food safety, housekeeping procedure, workflow hotel, dan hospitality English.",
    },
    {
      letter: "A",
      icon: "/assets/icon-Adaptif.png",
      title: "Adaptif",
      desc: "Mampu menyesuaikan diri dengan ritme kerja hotel dan budaya kerja internasional.",
    },
    {
      letter: "R",
      icon: "/assets/icon-Responsible.png",
      title: "Responsible",
      desc: "Bertanggung jawab terhadap pekerjaan, tim, dan kepercayaan mitra industri.",
    },
  ];

  return (
    <section className="values" id="nilai">
      <div className="values-container">
        <h2>
          Nilai Inti <span className="highlight">AKAR</span>
        </h2>
        <p className="values-subtitle">
          Karakter yang kami tanamkan kepada setiap peserta diilik untuk menjadi profesional
          holistis.
        </p>
        <div className="values-grid">
          {values.map((v, i) => (
            <div className="value-card" key={i}>
              <div className="value-icon-wrapper">
                <Image src={v.icon} alt={v.title} width={56} height={56} />
              </div>
              <h3>
                <span className="value-letter">{v.letter}</span> {v.title}
              </h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   PROGRAMS SECTION
   ============================================ */
function ProgramsSection() {
  const programs = [
    {
      title: "Housekeeping",
      image: "/assets/Bedroom.jpg",
      person: "/assets/Housekeeper.png",
      badge: "Batch Juli 2026",
      desc: "Pelatihan kerja untuk kamu yang ingin berkarir di hotel, rumah sakit, hingga kapal pesiar.",
      features: [
        "Dasar Housekeeping Hotel",
        "Cleaning Procedure & SOP Industri",
        "Grooming & Attitude Kerja",
        "Bahasa Inggris Dasar Hospitality",
      ],
      duration: "6 Bulan ( Teori + Praktik )",
      location: "Loman Park Hotel Yogyakarta",
      students: "25 Orang/Batch",
    },
    {
      title: "Culinary / Kitchen",
      image: "/assets/Kitchen.jpg",
      person: "/assets/Chef.png",
      badge: "Batch Juli 2026",
      desc: "Untuk kamu yang suka memasak dan ingin berkarir di dapur profesional.",
      features: [
        "Food Safety & Hygiene",
        "Cooking Methods",
        "Basic Gastronomy",
        "Kitchen Workflow Hotel",
      ],
      duration: "6 Bulan ( Teori + Praktik )",
      location: "Loman Park Hotel Yogyakarta",
      students: "25 Orang/Batch",
    },
  ];

  return (
    <section className="programs" id="program">
      <div className="programs-container">
        <h2>Program Pelatihan</h2>
        <p className="programs-subtitle">Pilih jalur karirmu dan mulai perjalanan menjadi profesional hospitality</p>
        <div className="programs-grid">
          {programs.map((prog, i) => (
            <div className="program-card" key={i}>
              <div className="program-card-image-outer">
                <div className="program-card-image-bg">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    width={532}
                    height={300}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
                <div className="program-card-person">
                  <Image
                    src={prog.person}
                    alt={`${prog.title} Staff`}
                    width={500}
                    height={600}
                    className="person-image"
                  />
                </div>
                <span className="program-badge-new">{prog.badge}</span>
              </div>
              <div className="program-card-body">
                <h3>{prog.title}</h3>
                <p className="program-desc">{prog.desc}</p>
                <div className="program-features-label">Materi Pelatihan</div>
                <ul className="program-features">
                  {prog.features.map((f, j) => (
                    <li key={j}>
                      <span className="check-orange">
                        <CheckIcon />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="program-meta-box">
                  <div className="program-meta-item">
                    <span className="meta-icon-gold"><ClockIcon /></span>
                    <span className="meta-text">Durasi: {prog.duration}</span>
                  </div>
                  <div className="program-meta-item">
                    <span className="meta-icon-gold"><LocationIcon /></span>
                    <span className="meta-text">Lokasi: {prog.location}</span>
                  </div>
                  <div className="program-meta-item">
                    <span className="meta-icon-gold"><UsersIcon /></span>
                    <span className="meta-text">Kuota: {prog.students}</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/6281299509961" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-program-new" 
                  id={`program-cta-${i}`}
                >
                  Daftar & Ikut Test Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   PARTNERS SECTION
   ============================================ */
function PartnersSection() {
  const partners = [
    { name: "Hyatt", logo: "/assets/hyatt.png" },
    { name: "Fairmont", logo: "/assets/fairmont.png" },
    { name: "Sheraton", logo: "/assets/sheraton.png" },
    { name: "The Ritz-Carlton", logo: "/assets/ritz.png" },
    { name: "Gran Melia", logo: "/assets/grand melia.png" },
    { name: "Shangri-La", logo: "/assets/shangrila.png" },
  ];

  return (
    <section className="partners" id="mitra">
      <div className="partners-container">
        <h2>Mitra Penempatan Kerja &amp; Magang</h2>
        <p className="partners-subtitle">
          Alumni AKAR telah ditempatkan di berbagai hotel nasional dan internasional.
        </p>
        <div className="partners-logos">
          {partners.map((p, i) => (
            <div className="partner-logo" key={i}>
              <Image
                src={p.logo}
                alt={p.name}
                width={180}
                height={60}
                style={{ objectFit: 'contain' }}
                className="partner-img"
              />
            </div>
          ))}
        </div>
        <div className="partners-divider" />
      </div>
    </section>
  );
}

/* ============================================
   FACILITIES SECTION
   ============================================ */
function FacilitiesSection() {
  const facilities = [
    {
      title: "Kitchen Standar Industri",
      image: "/assets/fas-1.png",
      span: "span-2",
    },
    {
      title: "Housekeeping Lab",
      image: "/assets/fas-2.png",
      span: "span-1",
    },
    {
      title: "Ruang Kelas Kondusif",
      image: "/assets/fas-3.png",
      span: "span-3",
    },
  ];

  return (
    <section className="facilities" id="fasilitas">
      <div className="facilities-container">
        <h2>Fasilitas Kami</h2>
        <div className="facilities-grid">
          {facilities.map((f, i) => (
            <div
              className={`facility-card ${f.span}`}
              key={i}
            >
              <Image
                src={f.image}
                alt={f.title}
                width={f.span === "span-3" ? 1200 : 800}
                height={500}
                style={{ objectFit: "cover" }}
              />
              <div className="facility-card-overlay">
                <h3>{f.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   CTA SECTION
   ============================================ */
function CTASection() {
  return (
    <section className="cta" id="daftar">
      <div className="cta-container">
        <span className="cta-badge">Kuota Terbatas! Daftar dari Sekarang</span>
        <h2>
          Siap Memulai Karier di Industri
          <br />
          Hospitality?
        </h2>
        <p>
          Program ini dibuat untuk siapa saja, termasuk kamu yang sama sekali belum berkarier
          profesional.
        </p>
        <a 
          href="https://wa.me/6281299509961" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-cta" 
          id="cta-whatsapp"
        >
          <WhatsAppIcon />
          Daftar Sekarang via WhatsApp
        </a>
      </div>
    </section>
  );
}

/* ============================================
   FOOTER COMPONENT
   ============================================ */
function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <a href="#" className="footer-logo">
          <Image
            src="/assets/Logo Akar Jogja.svg"
            alt="AKAR Jogja Logo"
            width={94.75}
            height={64.39}
          />
        </a>
        <p className="footer-copy">
          © 2026 &nbsp;&nbsp; AKAR Jogja. All rights reserved.
        </p>
        <p className="footer-copy">
          Loman Park Hotel Yogyakarta
        </p>
        <div className="footer-links">
          <a href="#" aria-label="Instagram" id="social-instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://wa.me/6281299509961" aria-label="WhatsApp" id="social-whatsapp" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3.5z"></path></svg>
          </a>
          <a href="#" aria-label="Email" id="social-email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ============================================
   MAIN PAGE
   ============================================ */
export default function Home() {
  const mainRef = useRef(null);

  useGSAP(
    () => {
      // Fade up animations for sections
      const sections = gsap.utils.toArray("section");
      sections.forEach((section: any) => {
        gsap.fromTo(
          section.querySelectorAll(".section-label, h2, p, .about-stats, .vision-item, .value-card, .program-card, .facility-card"),
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Special animation for hero
      gsap.fromTo(
        ".hero-content > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 1.2, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-image",
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.2 }
      );
    },
    { scope: mainRef }
  );

  return (
    <div ref={mainRef}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <ValuesSection />
        <ProgramsSection />
        <PartnersSection />
        <FacilitiesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
