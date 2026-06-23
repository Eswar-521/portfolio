import {
  ArrowUpRight,
  Mail,
  Menu,
  Rocket,
  X
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  certifications,
  contactLinks,
  experiences,
  links,
  navItems,
  profile,
  projects,
  skills,
  socialLinks,
  stats
} from "./portfolioData.js";

function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const dot = document.querySelector(".cursor-dot");

    if (!cursor || !dot || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId;

    const move = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursor.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      rafId = requestAnimationFrame(animate);
    };

    const enter = () => document.body.classList.add("cursor-hover");
    const leave = () => document.body.classList.remove("cursor-hover");

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, .interactive").forEach((item) => {
      item.addEventListener("mouseenter", enter);
      item.addEventListener("mouseleave", leave);
    });
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button, .interactive").forEach((item) => {
        item.removeEventListener("mouseenter", enter);
        item.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" />
      <div className="cursor-dot" />
    </>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = () => setOpen(false);

  return (
    <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
      <a className="brand" href="#home" onClick={handleNav} aria-label={`${profile.name} home`}>
        <span className="brand-mark">{profile.initials}</span>
        <span>{profile.name}</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item, index) => (
          <a key={item.href} href={item.href}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="nav-cta" href="#contact">
        <span>Let's Talk</span>
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>

      <button
        className="menu-button"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className={`mobile-panel ${open ? "mobile-panel--open" : ""}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={handleNav}>
            {item.label}
          </a>
        ))}
        <a href="#contact" onClick={handleNav}>
          Let's Talk
        </a>
      </div>
    </header>
  );
}

function SectionHeader({ number, label, title }) {
  return (
    <div className="section-heading">
      <div className="section-kicker">
        <span>{number}</span>
        <i />
        <strong>{label}</strong>
      </div>
      <h2>{title}</h2>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <p className="availability">
          <span />
          {profile.role} based in {profile.location}
        </p>
        <h1>
          {profile.heroTitle.before}
          <em>{profile.heroTitle.highlight}</em>
          {profile.heroTitle.after}
        </h1>
        <p className="hero-subtitle">{profile.heroSummary}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            <Rocket size={18} aria-hidden="true" />
            View Work
          </a>
          <a className="button button-secondary" href={links.email}>
            <Mail size={18} aria-hidden="true" />
            Contact
          </a>
          <a className="button button-outline" href={links.resume} target="_blank" rel="noreferrer">
            <ArrowUpRight size={18} aria-hidden="true" />
            Resume
          </a>
        </div>
        <div className="hero-socials" aria-label="Profile links">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                href={item.href}
                key={item.label}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <Icon size={18} aria-hidden="true" />
                {item.label}
              </a>
            );
          })}
        </div>
      </div>

      <div className="hero-visual interactive" aria-label="Developer dashboard visual">
        <img src="/assets/hero-workspace.png" alt="" />
        <div className="system-panel">
          <span>portfolio.status</span>
          <strong>ready</strong>
        </div>
      </div>

      <div className="stats-row">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-shell" id="about">
      <SectionHeader
        number="01"
        label="About"
        title={
          <>
            Full-stack problem solving with <em>clean</em> execution.
          </>
        }
      />
      <div className="about-layout">
        <div className="about-copy">
          <p>
            I am a full-stack developer focused on building scalable web applications using modern
            JavaScript technologies. My work spans frontend interfaces, REST API development,
            authentication, dashboards, mobile app flows, testing, debugging, and production support.
          </p>
          <p>
            I am comfortable learning quickly, adapting to dynamic environments, and delivering
            practical solutions with React, Next.js, React Native, Node.js, Express, MongoDB, MySQL,
            Docker, Postman, and GitHub.
          </p>
        </div>
        <div className="profile-grid">
          <div>
            <span>Currently</span>
            <strong>Full Stack Developer at Tinitiate</strong>
          </div>
          <div>
            <span>Based In</span>
            <strong>Hyderabad, India</strong>
          </div>
          <div>
            <span>Education</span>
            <strong>Bharath University - CSE, GPA 8.8/10</strong>
          </div>
          <div>
            <span>Focus</span>
            <strong>React, Next.js, MERN, React Native</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section-shell" id="experience">
      <SectionHeader
        number="02"
        label="Experience"
        title={
          <>
            A year of <em>shipping</em> real things.
          </>
        }
      />
      <div className="timeline">
        {experiences.map((item) => (
          <article className="timeline-item" key={`${item.role}-${item.period}`}>
            <div className="timeline-meta">
              <span>{item.period}</span>
              <h3>{item.role}</h3>
              <p>{item.company}</p>
            </div>
            <div className="timeline-body">
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="tag-row">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section-shell" id="projects">
      <SectionHeader
        number="03"
        label="Projects"
        title={
          <>
            Projects I've <em>built</em> from the resume.
          </>
        }
      />
      <div className="project-grid">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <article className="project-card interactive" key={project.title}>
              <div className="project-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon size={24} aria-hidden="true" />
              </div>
              <p className="project-eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <strong>{project.metric}</strong>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-shell" id="skills">
      <SectionHeader
        number="04"
        label="Skills"
        title={
          <>
            The <em>tools</em> I reach for.
          </>
        }
      />
      <div className="skills-grid">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <article className="skill-card interactive" key={skill.title}>
              <div className="skill-title">
                <Icon size={22} aria-hidden="true" />
                <h3>{skill.title}</h3>
              </div>
              <div className="tag-row">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
      <div className="certification-strip">
        {certifications.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title}>
              <Icon size={22} aria-hidden="true" />
              <div>
                <span>{item.label}</span>
                <strong>{item.title}</strong>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-shell" id="contact">
      <SectionHeader
        number="05"
        label="Contact"
        title={
          <>
            Let's build something <em>extraordinary</em>.
          </>
        }
      />
      <a className="contact-email" href={links.email}>
        {profile.email}
        <ArrowUpRight size={24} aria-hidden="true" />
      </a>
      <div className="contact-grid">
        {contactLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              className="contact-link interactive"
              href={link.href}
              key={link.label}
              target={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined}
              rel={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "noreferrer" : undefined}
            >
              <Icon size={22} aria-hidden="true" />
              <span>{link.label}</span>
              <strong>{link.value}</strong>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <span>{profile.name}</span>
        <p>Designed and built with React, Vite, and care.</p>
      </footer>
    </>
  );
}
