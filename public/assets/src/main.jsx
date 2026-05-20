import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Download,
  ExternalLink,
  Globe2,
  GraduationCap,
  Mail,
  Menu,
  Mic,
  Music,
  Phone,
  PlayCircle,
  X,
} from "lucide-react";
import "./styles.css";

const contactEmail = "angelika.n.fabry@gmail.com";
const contactPhone = "+421 918 253 305";
const cleanPhone = "+421918253305";
const youtubeUrl = "https://www.youtube.com/watch?v=0WhX-sQyIXI";
const youtubeEmbed = "https://www.youtube.com/embed/0WhX-sQyIXI";
const facebookEvent = "https://fb.me/e/6K4yza8bf";

const copy = {
  en: {
    brand: "Angelika N. Fabry — Soprano",
    nav: [
      ["bio", "Bio"],
      ["videos", "Videos & Audio"],
      ["services", "Services"],
      ["gallery", "Gallery"],
      ["contact", "Contact"],
    ],
    hero: {
      title: "Angelika N. Fabry",
      eyebrow: "Soprano · Bratislava",
      subtitle: "Opera · Classical Concerts · Acoustic Evenings · Singing Lessons",
      cta: "Book a Performance",
    },
    bio: {
      label: "Bio",
      title: "About Angelika",
      paragraphs: [
        "Angelika N. Fabry is a Slovak soprano based in Bratislava with a rich background in opera, classical concerts, and chamber music. Trained at the Bratislava Conservatory and holding a Master's Degree from the Academy of Performing Arts in Bratislava, she brings both academic rigour and genuine passion to every performance.",
        "Alongside her performing career, Angelika teaches singing at a Primary Music School, sharing her love of music with the next generation. Her warm, expressive voice and versatility across repertoire, from Mozart and Verdi to intimate acoustic evenings, make her a sought-after artist for a wide range of occasions.",
      ],
      educationTitle: "Education",
      education: [
        "Master's Degree — Academy of Performing Arts, Bratislava (2018-2024)",
        "Conservatory — Opera singing & cello (2012-2018)",
      ],
      highlightsTitle: "Experience & Highlights",
      highlights: [
        "Solo singer · Red Cat Cabaret Bratislava (2018-present)",
        "Slovak Philharmonic Choir — cond. Daniel Raiskin (2022)",
        "Collaborations: Symphony Orchestra Karlovy Vary, Chamber Orchestra Praha, Capella Istropolitana",
        "Chorus member · The New Scene Bratislava (2017-2019)",
      ],
      rolesTitle: "Selected Roles",
      roles: [
        "Despina — Così fan tutte (Mozart)",
        "Pamina & Papagena — Die Zauberflöte (Mozart)",
        "Gilda — Rigoletto (Verdi)",
        "Zerlina — Don Giovanni (Mozart)",
        "Susanna — Le nozze di Figaro (Mozart)",
        "Adela — Die Fledermaus (J. Strauss Jr.)",
      ],
      masterclassesTitle: "Masterclasses",
      masterclasses:
        "Margreet Honig · Simona Šaturová · Jennifer Larmore · Ferdinand Bothmer · Julia Radosz · Olga Pasichnyk · Pavol Bršlik · Magdaléna Hayossiová",
      pressKit: "Request CV / Press Kit",
    },
    videos: {
      title: "Videos & Audio",
      subtitle: "Experience the voice",
      caption: "Opera Performance — Angelika N. Fabry",
      note: "More videos available on request.",
      watch: "Watch on YouTube",
    },
    servicesTitle: "Services",
    services: [
      {
        icon: "mic",
        title: "Opera Performances",
        body: "Professional soprano for opera productions, classical concerts, galas, and cultural events. Extensive repertoire spanning Mozart, Verdi, Lehar, and more.",
        link: "Watch a performance",
        href: youtubeUrl,
        cta: "Book for Performance",
        subject: "Opera performance booking",
      },
      {
        icon: "music",
        title: "Acoustic / Guitar Evenings",
        body: "Intimate live vocal performances accompanied by acoustic guitar, perfect for romantic evenings, private dinners, wine events, and restaurants.",
        link: "Upcoming event on Facebook",
        href: facebookEvent,
        cta: "Inquire for Evening",
        subject: "Acoustic evening inquiry",
      },
      {
        icon: "lesson",
        title: "Private Singing Lessons",
        body: "In-person singing lessons in Bratislava tailored to your level and goals. Covering technique, breath control, repertoire, and stage confidence.",
        price: "40€ / 60 min",
        cta: "Schedule a Lesson",
        subject: "Private singing lesson",
      },
    ],
    gallery: {
      title: "Gallery",
      subtitle: "Portraits and performance moments",
      items: ["Portrait", "Opera portrait", "Performance"],
    },
    testimonials: {
      title: "Testimonials",
      quote:
        "A warm, elegant soprano presence for classical programs and intimate live events.",
      credit: "References available on request",
    },
    contact: {
      title: "Get in Touch",
      subtitle:
        "For bookings, inquiries, or lesson scheduling, reach out and I will get back to you within 24 hours.",
      labels: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
      },
      placeholders: {
        name: "Your name",
        email: "you@example.com",
        subject: "How can I help?",
        message: "Tell me about the date, venue, repertoire, or lesson goals.",
      },
      send: "Send Message",
      sent: "Thank you. Your email client is opening with the message ready to send.",
    },
    footer: {
      location: "Soprano · Bratislava",
      email: "Email",
      phone: "Phone",
      facebook: "Facebook",
    },
  },
  sk: {
    brand: "Angelika N. Fabry — soprán",
    nav: [
      ["bio", "Bio"],
      ["videos", "Videá a audio"],
      ["services", "Služby"],
      ["gallery", "Galéria"],
      ["contact", "Kontakt"],
    ],
    hero: {
      title: "Angelika N. Fabry",
      eyebrow: "Soprán · Bratislava",
      subtitle: "Opera · klasické koncerty · akustické večery · hodiny spevu",
      cta: "Rezervovať vystúpenie",
    },
    bio: {
      label: "Bio",
      title: "O Angelike",
      paragraphs: [
        "Angelika N. Fabry je slovenská sopranistka pôsobiaca v Bratislave s bohatým zázemím v opere, klasických koncertoch a komornej hudbe. Vyštudovala spev a violončelo na konzervatóriu a magisterské štúdium na Vysokej škole múzických umení v Bratislave.",
        "Popri koncertnej činnosti učí spev na základnej umeleckej škole a odovzdáva svoju lásku k hudbe ďalšej generácii. Jej teplý, expresívny hlas a všestrannosť v repertoári, od Mozarta a Verdiho až po komorné akustické večery, ju robia prirodzenou voľbou pre rôzne príležitosti.",
      ],
      educationTitle: "Vzdelanie",
      education: [
        "Magisterské štúdium — VŠMU v Bratislave (2018-2024)",
        "Konzervatórium — operný spev a violončelo (2012-2018)",
      ],
      highlightsTitle: "Skúsenosti a úspechy",
      highlights: [
        "Sólistka · Red Cat Cabaret Bratislava (2018-súčasnosť)",
        "Slovenský filharmonický zbor — dir. Daniel Raiskin (2022)",
        "Spolupráce: Symfonický orchester Karlovy Vary, Komorný orchester Praha, Capella Istropolitana",
        "Členka zboru · Divadlo Nová scéna Bratislava (2017-2019)",
      ],
      rolesTitle: "Vybrané roly",
      roles: [
        "Despina — Così fan tutte (Mozart)",
        "Pamina a Papagena — Čarovná flauta (Mozart)",
        "Gilda — Rigoletto (Verdi)",
        "Zerlina — Don Giovanni (Mozart)",
        "Susanna — Figarova svadba (Mozart)",
        "Adela — Netopier (J. Strauss ml.)",
      ],
      masterclassesTitle: "Majstrovské kurzy",
      masterclasses:
        "Margreet Honig · Simona Šaturová · Jennifer Larmore · Ferdinand Bothmer · Julia Radosz · Olga Pasichnyk · Pavol Bršlik · Magdaléna Hayossiová",
      pressKit: "Vyžiadať CV / press kit",
    },
    videos: {
      title: "Videá a audio",
      subtitle: "Zažite hlas",
      caption: "Operné vystúpenie — Angelika N. Fabry",
      note: "Ďalšie videá sú k dispozícii na vyžiadanie.",
      watch: "Pozrieť na YouTube",
    },
    servicesTitle: "Služby",
    services: [
      {
        icon: "mic",
        title: "Operné vystúpenia",
        body: "Profesionálny soprán pre operné produkcie, klasické koncerty, galavečery a kultúrne podujatia. Repertoár zahŕňa Mozarta, Verdiho, Lehára a ďalších autorov.",
        link: "Pozrieť vystúpenie",
        href: youtubeUrl,
        cta: "Rezervovať vystúpenie",
        subject: "Rezervácia operného vystúpenia",
      },
      {
        icon: "music",
        title: "Akustické / gitarové večery",
        body: "Intímne živé vokálne vystúpenia so sprievodom akustickej gitary, ideálne pre romantické večery, súkromné oslavy, vínne podujatia a reštaurácie.",
        link: "Udalosť na Facebooku",
        href: facebookEvent,
        cta: "Informovať sa o večeri",
        subject: "Dopyt na akustický večer",
      },
      {
        icon: "lesson",
        title: "Súkromné hodiny spevu",
        body: "Osobné hodiny spevu v Bratislave prispôsobené vašej úrovni a cieľom. Technika, dych, repertoár a javisková istota.",
        price: "40€ / 60 min",
        cta: "Dohodnúť hodinu",
        subject: "Súkromná hodina spevu",
      },
    ],
    gallery: {
      title: "Galéria",
      subtitle: "Portréty a momenty z vystúpení",
      items: ["Portrét", "Operný portrét", "Vystúpenie"],
    },
    testimonials: {
      title: "Referencie",
      quote:
        "Vrúcna a elegantná sopranistická prítomnosť pre klasické programy aj komorné živé podujatia.",
      credit: "Referencie sú k dispozícii na vyžiadanie",
    },
    contact: {
      title: "Ozvite sa",
      subtitle:
        "Pre rezervácie, otázky alebo hodiny spevu ma kontaktujte. Odpoviem vám do 24 hodín.",
      labels: {
        name: "Meno",
        email: "Email",
        subject: "Predmet",
        message: "Správa",
      },
      placeholders: {
        name: "Vaše meno",
        email: "vas@email.sk",
        subject: "Ako môžem pomôcť?",
        message: "Napíšte dátum, miesto, repertoár alebo ciele hodín spevu.",
      },
      send: "Odoslať správu",
      sent: "Ďakujem. Otvára sa váš emailový klient so správou pripravenou na odoslanie.",
    },
    footer: {
      location: "Soprán · Bratislava",
      email: "Email",
      phone: "Telefón",
      facebook: "Facebook",
    },
  },
};

const galleryImages = [
  "/assets/angelika-portrait.jpeg",
  "/assets/angelika-red-portrait.jpg",
  "/assets/performance-thumbnail.jpg",
];

function ServiceIcon({ type }) {
  if (type === "mic") return <Mic aria-hidden="true" />;
  if (type === "music") return <Music aria-hidden="true" />;
  return <GraduationCap aria-hidden="true" />;
}

function App() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const t = copy[lang];
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((valueMap) => ({ ...valueMap, [name]: value }));
  };

  const scrollToSection = (id, subject = "") => {
    if (subject) {
      setForm((valueMap) => ({ ...valueMap, subject }));
    }
    setMenuOpen(false);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const sendMessage = (event) => {
    event.preventDefault();
    const subject = form.subject || "Portfolio inquiry";
    const body = [
      `${t.contact.labels.name}: ${form.name}`,
      `${t.contact.labels.email}: ${form.email}`,
      "",
      form.message,
    ].join("\n");
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    window.location.href = mailto;
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#bio" onClick={() => scrollToSection("bio")}>
          {t.brand}
        </a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          {t.nav.map(([id, label]) => (
            <button key={id} type="button" onClick={() => scrollToSection(id)}>
              {label}
            </button>
          ))}
          <button
            className="language-button"
            type="button"
            aria-label="Switch language"
            onClick={() => setLang((value) => (value === "en" ? "sk" : "en"))}
          >
            <Globe2 size={15} aria-hidden="true" />
            {lang === "en" ? "SK" : "EN"}
          </button>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      <main>
        <section className="hero-section" id="top" aria-labelledby="hero-title">
          <div className="watercolor-wash wash-one" aria-hidden="true" />
          <div className="watercolor-wash wash-two" aria-hidden="true" />
          <div className="hero-content">
            <div className="portrait-frame">
              <img src="/assets/angelika-portrait.jpeg" alt={t.brand} />
            </div>
            <h1 id="hero-title">{t.hero.title}</h1>
            <p className="hero-eyebrow">{t.hero.eyebrow}</p>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <button className="primary-button" type="button" onClick={() => scrollToSection("contact", t.services[0].subject)}>
              {t.hero.cta}
            </button>
          </div>
        </section>

        <section className="content-section bio-section" id="bio" aria-labelledby="bio-title">
          <div className="section-heading">
            <span>{t.bio.label}</span>
            <h2 id="bio-title">{t.bio.title}</h2>
          </div>
          <div className="bio-grid">
            <div className="bio-copy">
              {t.bio.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <a className="text-button" href={`mailto:${contactEmail}?subject=${encodeURIComponent(t.bio.pressKit)}`}>
                <Download size={17} aria-hidden="true" />
                {t.bio.pressKit}
              </a>
            </div>
            <div className="bio-details">
              <div className="detail-block">
                <h3>{t.bio.educationTitle}</h3>
                <ul className="soft-list music-list">
                  {t.bio.education.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="detail-block">
                <h3>{t.bio.highlightsTitle}</h3>
                <ul className="soft-list diamond-list">
                  {t.bio.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="detail-block roles-block">
                <h3>{t.bio.rolesTitle}</h3>
                <ul>
                  {t.bio.roles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </div>
              <div className="masterclass-note">
                <h3>{t.bio.masterclassesTitle}</h3>
                <p>{t.bio.masterclasses}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section video-section" id="videos" aria-labelledby="videos-title">
          <div className="section-heading">
            <span>{t.videos.subtitle}</span>
            <h2 id="videos-title">{t.videos.title}</h2>
          </div>
          <div className="video-wrap">
            <iframe
              src={youtubeEmbed}
              title={t.videos.caption}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="video-caption">
            <p>{t.videos.caption}</p>
            <a href={youtubeUrl} target="_blank" rel="noreferrer">
              <PlayCircle size={17} aria-hidden="true" />
              {t.videos.watch}
            </a>
          </div>
          <p className="muted-note">{t.videos.note}</p>
        </section>

        <section className="content-section services-section" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <h2 id="services-title">{t.servicesTitle}</h2>
          </div>
          <div className="services-grid">
            {t.services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">
                  <ServiceIcon type={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                {service.price ? <strong>{service.price}</strong> : null}
                {service.link ? (
                  <a href={service.href} target="_blank" rel="noreferrer">
                    {service.link}
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                ) : null}
                <button
                  className={service.icon === "music" ? "primary-button" : "outline-button"}
                  type="button"
                  onClick={() => scrollToSection("contact", service.subject)}
                >
                  {service.cta}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section gallery-section" id="gallery" aria-labelledby="gallery-title">
          <div className="section-heading">
            <span>{t.gallery.subtitle}</span>
            <h2 id="gallery-title">{t.gallery.title}</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((src, index) => (
              <figure key={src}>
                <img src={src} alt={t.gallery.items[index]} />
                <figcaption>{t.gallery.items[index]}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="quote-section" aria-labelledby="testimonials-title">
          <div className="quote-inner">
            <h2 id="testimonials-title">{t.testimonials.title}</h2>
            <blockquote>“{t.testimonials.quote}”</blockquote>
            <p>{t.testimonials.credit}</p>
          </div>
        </section>

        <section className="content-section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-heading">
            <h2 id="contact-title">{t.contact.title}</h2>
            <p>{t.contact.subtitle}</p>
          </div>
          <div className="contact-links">
            <a href={`mailto:${contactEmail}`}>
              <Mail size={16} aria-hidden="true" />
              {contactEmail}
            </a>
            <a href={`tel:${cleanPhone}`}>
              <Phone size={16} aria-hidden="true" />
              {contactPhone}
            </a>
          </div>
          <form className="contact-form" onSubmit={sendMessage}>
            <label>
              <span>{t.contact.labels.name}</span>
              <input
                name="name"
                value={form.name}
                onChange={updateField}
                placeholder={t.contact.placeholders.name}
                autoComplete="name"
                required
              />
            </label>
            <label>
              <span>{t.contact.labels.email}</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                placeholder={t.contact.placeholders.email}
                autoComplete="email"
                required
              />
            </label>
            <label className="full-field">
              <span>{t.contact.labels.subject}</span>
              <input
                name="subject"
                value={form.subject}
                onChange={updateField}
                placeholder={t.contact.placeholders.subject}
                required
              />
            </label>
            <label className="full-field">
              <span>{t.contact.labels.message}</span>
              <textarea
                name="message"
                value={form.message}
                onChange={updateField}
                placeholder={t.contact.placeholders.message}
                rows="6"
                required
              />
            </label>
            <button className="primary-button form-button" type="submit">
              {t.contact.send}
            </button>
            {sent ? <p className="form-status">{t.contact.sent}</p> : null}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p>Angelika N. Fabry</p>
          <span>{t.footer.location}</span>
        </div>
        <div className="footer-links">
          <a href={`mailto:${contactEmail}`}>{t.footer.email}</a>
          <a href={`tel:${cleanPhone}`}>{t.footer.phone}</a>
          <a href={facebookEvent} target="_blank" rel="noreferrer">
            {t.footer.facebook}
          </a>
        </div>
        <p>© {currentYear} Angelika N. Fabry. All rights reserved.</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
