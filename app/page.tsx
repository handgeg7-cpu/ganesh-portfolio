"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<string | null>(null);
  const [contactStatus, setContactStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xaenrqwk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setContactStatus("success");
    } catch {
      setContactStatus("error");
    }
  };

  return (
    <main className="site">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="hero" id="home">
        <div className="hero-grid" />

        <header className="navbar">
          <div className="brand">
            <span className="brand-mark">GH</span>
            <span className="brand-name">Ganesh Handge</span>
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#expertise" onClick={closeMenu}>
              Expertise
            </a>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
            <a href="#work" onClick={closeMenu}>
              Work
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>
        </header>

        <div className="hero-content">
          {/* TAGLINE */}
          <div className="hero-tagline">
            <span className="tagline-line" />

            <p>
              <span>Learn with purpose.</span>
              <span>Build with confidence.</span>
              <span>Deliver with impact.</span>
            </p>

            <span className="tagline-line" />
          </div>

          <div className="hero-eyebrow">
            Senior DevOps Engineer <span>·</span> Multi-Cloud <span>·</span>{" "}
            AI/AIOps <span>·</span> Platform Engineering <span>·</span>{" "}
            3x Certified <span>·</span> DBA
            </div>

          <div className="hero-main">
            {/* LEFT */}
            <div className="hero-text">
              <div className="hello">HELLO, I&apos;M</div>

              <h1>
                Ganesh
                <br />
                <span>Handge.</span>
              </h1>

              <div className="role-pill">
                <span className="role-dot" />
                Cloud Architect
              </div>

              <p className="hero-description">
                I engineer secure, scalable and reliable cloud platforms
                through infrastructure automation, Kubernetes, CI/CD,
                DevSecOps and AI-enabled engineering.
              </p>

              <div className="hero-actions">
                <a href="#experience" className="primary-button">
                  View Experience
                  <span>↗</span>
                </a>

                <a href="#expertise" className="secondary-button">
                  Technical Expertise
                </a>

                <a
                  href="/Ganesh-Handge-DevOps-Resume.pdf"
                  download
                  className="secondary-button resume-button"
                >
                  Download Resume
                  <span>↓</span>
                </a>
              </div>

              <div className="hero-metrics">
                <div>
                  <strong>5+</strong>
                  <span>Years Experience</span>
                </div>

                <div>
                  <strong>Azure</strong>
                  <span>Cloud Platform</span>
                </div>

                <div>
                  <strong>AKS</strong>
                  <span>Kubernetes</span>
                </div>

                <div>
                  <strong>AI</strong>
                  <span>AI Engineering</span>
                </div>
              </div>
            </div>

            {/* RIGHT — SQUARE PROFILE PHOTO */}
            <div className="hero-photo-wrap">
              <div className="photo-label photo-label-top">
                CLOUD
              </div>

              <div className="photo-frame">
                <div className="photo-inner">
                  <img
                    src="/ganesh-profile.png.jpg"
                    alt="Ganesh Handge"
                  />
                </div>
              </div>

              <div className="photo-label photo-label-bottom">
                ENGINEERING
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <span />
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}
      <section className="section about-section" id="about">
        <div className="section-container">
          <div className="section-heading reveal">
            <span className="section-number">01</span>

            <div>
              <span className="section-label">ABOUT</span>

              <h2>
                Engineering with
                <br />
                purpose.
              </h2>
            </div>
          </div>

          <div className="about-content reveal">
            <div className="about-main">
              <p className="large-text">
                I build the infrastructure that keeps software moving.
              </p>

              <p>
                I&apos;m a DevOps Engineer with 5+ years of experience
                engineering cloud platforms across Azure and AWS. My work
                combines infrastructure as code, Kubernetes, CI/CD,
                automation, DevSecOps and observability to make enterprise
                platforms more reliable, secure and scalable.
              </p>

              <p>
                From provisioning infrastructure to solving recurring
                production problems, I focus on creating repeatable systems
                instead of manual processes—with reliability, security and
                operational efficiency built into the platform.
              </p>
            </div>

            <div className="about-side">
              <div className="about-stat">
                <strong>05+</strong>
                <span>Years in IT</span>
              </div>

              <div className="about-stat">
                <strong>02</strong>
                <span>Cloud Platforms</span>
              </div>

              <div className="about-stat">
                <strong>01</strong>
                <span>Engineering Mindset</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNICAL EXPERTISE
      ====================================================== */}
      <section className="section expertise-section" id="expertise">
        <div className="section-container">
          <div className="section-heading reveal">
            <span className="section-number">02</span>

            <div>
              <span className="section-label">
                TECHNICAL EXPERTISE
              </span>

              <h2>
                Tools that turn
                <br />
                ideas into systems.
              </h2>
            </div>
          </div>

          <div className="expertise-grid">
            <ExpertiseCard
              number="01"
              title="Cloud Engineering"
              description="Azure, AWS, IaaS, PaaS, networking, compute, storage, identity and cloud-native architecture."
              tags={["Azure", "AWS", "VNet", "IAM"]}
            />

            <ExpertiseCard
              number="02"
              title="Kubernetes"
              description="Container orchestration, AKS/EKS, Helm, ingress, scaling, networking and production workloads."
              tags={["AKS", "EKS", "Helm", "Ingress"]}
            />

            <ExpertiseCard
              number="03"
              title="Infrastructure as Code"
              description="Reusable infrastructure modules, remote state, multi-environment provisioning and automation."
              tags={["Terraform", "ARM", "Ansible"]}
            />

            <ExpertiseCard
              number="04"
              title="CI/CD & GitOps"
              description="Automated software delivery pipelines with deployment controls across enterprise environments."
              tags={["Azure DevOps", "Jenkins", "Argo CD"]}
            />

            <ExpertiseCard
              number="05"
              title="DevSecOps"
              description="Security integrated into development and deployment workflows through scanning, secrets management and governance."
              tags={["SonarQube", "Trivy", "Key Vault"]}
            />

            <ExpertiseCard
              number="06"
              title="Observability"
              description="Monitoring, logging, metrics, dashboards and production reliability engineering."
              tags={["Prometheus", "Grafana", "Azure Monitor"]}
            />

            <ExpertiseCard
              number="07"
              title="Automation"
              description="Engineering repetitive operational processes into reliable, repeatable automation."
              tags={["Bash", "PowerShell", "Python"]}
            />

            <ExpertiseCard
              number="08"
              title="Platform Engineering"
              description="Designing reusable engineering foundations that improve developer experience, reliability and operational efficiency."
              tags={["Platform", "Reliability", "Governance"]}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          ENGINEERING APPROACH
      ====================================================== */}
      <section className="section approach-section">
        <div className="section-container">
          <div className="section-heading reveal">
            <span className="section-number">03</span>

            <div>
              <span className="section-label">
                ENGINEERING APPROACH
              </span>

              <h2>
                Beyond tools.
                <br />
                Built around outcomes.
              </h2>
            </div>
          </div>

          <div className="approach-grid">
            <ApproachCard
              number="01"
              title="Platform Architecture"
              description="Designing cloud foundations that support scalability, reliability and maintainability."
            />

            <ApproachCard
              number="02"
              title="Modernization"
              description="Improving existing platforms through automation, containerization and cloud-native approaches."
            />

            <ApproachCard
              number="03"
              title="Reliability & Operations"
              description="Building monitoring, health checks, incident response and operational practices into platforms."
            />

            <ApproachCard
              number="04"
              title="Security & Governance"
              description="Applying identity, secrets management, RBAC and policy controls across cloud environments."
            />

            <ApproachCard
              number="05"
              title="Cost & Efficiency"
              description="Optimizing infrastructure utilization and eliminating unnecessary operational overhead."
            />

            <ApproachCard
              number="06"
              title="AI-Enabled Engineering"
              description="Exploring practical AI capabilities to improve automation, engineering workflows and developer productivity."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          AI ENGINEERING
      ====================================================== */}
      <section className="ai-section">
        <div className="ai-grid" />

        <div className="section-container">
          <div className="ai-header reveal">
            <span className="section-number">04</span>

            <div>
              <span className="section-label">
                AI-ENABLED ENGINEERING
              </span>

              <h2>
                Engineering for the
                <br />
                <span>next generation.</span>
              </h2>
            </div>
          </div>

          <div className="ai-content reveal">
            <p className="ai-intro">
              I&apos;m exploring how AI can become part of the engineering
              workflow—not as a replacement for engineering judgment,
              but as a capability that helps teams move faster and solve
              problems more effectively.
            </p>

            <div className="ai-tools">
              <AiTool title="OpenAI" subtitle="AI Platforms" />
              <AiTool title="Azure AI" subtitle="AI Services" />
              <AiTool
                title="Prompt Engineering"
                subtitle="AI Interaction"
              />
              <AiTool title="Azure ML" subtitle="Machine Learning" />
              <AiTool title="MLOps" subtitle="ML Operations" />
              <AiTool
                title="AI Automation"
                subtitle="Engineering Productivity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ====================================================== */}
      <section
        className="section experience-section"
        id="experience"
      >
        <div className="section-container">
          <div className="section-heading reveal">
            <span className="section-number">05</span>

            <div>
              <span className="section-label">
                PROFESSIONAL EXPERIENCE
              </span>

              <h2>
                Experience that
                <br />
                solves problems.
              </h2>
            </div>
          </div>

          <div className="experience-list">
            <article className="experience-item reveal">
              <div className="experience-meta">
                <span>JUL 2023 — PRESENT</span>
                <span>PUNE · INDIA</span>
              </div>

              <div className="experience-main">
                <div className="experience-title">
                  <h3>DevOps Engineer</h3>
                  <p>TCS · Pacific Life</p>
                </div>

                <div className="experience-description">
                  <p>
                    Engineering and supporting enterprise cloud-native
                    platforms using Azure, AKS, Terraform, CI/CD,
                    DevSecOps and observability.
                  </p>

                  <ul>
                    <li>
                      Designed and supported Azure/AKS microservices
                      platforms with automated scaling and health checks.
                    </li>

                    <li>
                      Built CI/CD workflows using Azure DevOps, Jenkins
                      and Argo CD across DEV, QA, UAT and PROD.
                    </li>

                    <li>
                      Developed reusable Terraform modules and
                      multi-environment infrastructure provisioning.
                    </li>

                    <li>
                      Implemented security and governance using
                      Key Vault, RBAC, Managed Identity and Azure Policy.
                    </li>

                    <li>
                      Improved observability using Azure Monitor,
                      Log Analytics, Prometheus and Grafana.
                    </li>

                    <li>
                      Worked on cost optimization, problem management,
                      RCA and permanent corrective actions.
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="experience-item reveal">
              <div className="experience-meta">
                <span>MAR 2021 — JUN 2023</span>
                <span>PUNE · INDIA</span>
              </div>

              <div className="experience-main">
                <div className="experience-title">
                  <h3>Software Engineer</h3>
                  <p>Infosys · Zoetis</p>
                </div>

                <div className="experience-description">
                  <p>
                    Supported cloud operations, production environments,
                    automation and infrastructure services across Azure
                    and AWS.
                  </p>

                  <ul>
                    <li>
                      Supported Azure/AWS cloud operations, Linux
                      administration and IAM.
                    </li>

                    <li>
                      Automated operational activities using Ansible,
                      Bash, PowerShell and scheduled jobs.
                    </li>

                    <li>
                      Supported CI/CD pipelines, application deployments
                      and production releases.
                    </li>

                    <li>
                      Participated in incident, change and problem
                      management activities.
                    </li>

                    <li>
                      Supported backup, disaster recovery, high
                      availability and business continuity activities.
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          SELECTED WORK
      ====================================================== */}
      <section className="section work-section" id="work">
        <div className="section-container">
          <div className="section-heading reveal">
            <span className="section-number">06</span>

            <div>
              <span className="section-label">
                SELECTED WORK
              </span>

              <h2>
                Systems I&apos;ve
                <br />
                engineered.
              </h2>
            </div>
          </div>

          <div className="work-grid">
            <WorkCard
              number="01"
              category="PLATFORM"
              title="Enterprise Kubernetes Platform"
              description="Cloud-native Kubernetes infrastructure designed for scalable enterprise microservices workloads with automated deployment, monitoring and operational controls."
              tags={[
                "AKS",
                "Azure",
                "Docker",
                "Helm",
                "Prometheus",
              ]}
              projectKey="kubernetes"
              onOpen={() => setSelectedWork("kubernetes")}
            />

            <WorkCard
              number="02"
              category="INFRASTRUCTURE"
              title="Terraform Infrastructure Platform"
              description="Reusable infrastructure automation for cloud environments covering networking, AKS, ACR, monitoring and multi-environment provisioning."
              tags={[
                "Terraform",
                "Azure",
                "ARM",
                "IaC",
              ]}
              projectKey="terraform"
              onOpen={() => setSelectedWork("terraform")}
            />

            <WorkCard
              number="03"
              category="DEVSECOPS"
              title="Automated CI/CD Platform"
              description="Enterprise delivery workflows combining CI/CD automation, GitOps, security scanning, secrets management and controlled multi-environment deployments."
              tags={[
                "Azure DevOps",
                "Jenkins",
                "Argo CD",
                "SonarQube",
                "Trivy",
              ]}
              projectKey="devsecops"
              onOpen={() => setSelectedWork("devsecops")}
            />
          </div>
        </div>
      </section>

      {selectedWork && (
        <ProjectModal
          projectKey={selectedWork}
          onClose={() => setSelectedWork(null)}
        />
      )}

      {/* =====================================================
          CREDENTIALS
      ====================================================== */}
      <section className="section credentials-section">
        <div className="section-container">
          <div className="section-heading reveal">
            <span className="section-number">07</span>

            <div>
              <span className="section-label">
                CREDENTIALS
              </span>

              <h2>
                Continuous
                <br />
                learning.
              </h2>
            </div>
          </div>

          <div className="credentials-grid reveal">
            <Credential
              number="01"
              title="AWS Certified Developer"
              subtitle="Associate"
            />

            <Credential
              number="02"
              title="Microsoft Certified"
              subtitle="Azure AI Fundamentals · AI-900"
            />

            <Credential
              number="03"
              title="Oracle Certified Professional"
              subtitle="OCP"
            />

            <Credential
              number="04"
              title="B.E. Information Technology"
              subtitle="Savitribai Phule Pune University"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ====================================================== */}
      <section className="contact-section" id="contact">
        <div className="contact-grid" />

        <div className="section-container">
          <div className="contact-content reveal">
            <span className="section-label">
              LET&apos;S CONNECT
            </span>

            <h2>
              Let&apos;s build something
              <br />
              <span>meaningful.</span>
            </h2>

            <p>
              Open to conversations around DevOps, Cloud Architecture,
              Platform Engineering, SRE, AI-enabled engineering and
              challenging infrastructure problems.
            </p>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="contact-form-row">
                <label>
                  <span>YOUR NAME</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  <span>EMAIL ADDRESS</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <label>
                <span>SUBJECT</span>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can I help?"
                  required
                />
              </label>

              <label>
                <span>MESSAGE</span>
                <textarea
                  name="message"
                  placeholder="Tell me a little about your requirement..."
                  rows={6}
                  required
                />
              </label>

              <button
                type="submit"
                className="contact-submit"
                disabled={contactStatus === "sending"}
              >
                <span>
                  {contactStatus === "sending" ? "SENDING..." : "SEND MESSAGE"}
                </span>
                <span>↗</span>
              </button>

              {contactStatus === "success" && (
                <p className="contact-status success" role="status">
                  Message sent successfully. I&apos;ll get back to you soon.
                </p>
              )}

              {contactStatus === "error" && (
                <p className="contact-status error" role="alert">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>

            <a
              href="mailto:ghandge9@gmail.com"
              className="contact-email"
            >
              ghandge9@gmail.com
              <span>↗</span>
            </a>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/ganesh-h-029437327/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/_grh_10/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {selectedWork && (
        <ProjectModal
          projectKey={selectedWork}
          onClose={() => setSelectedWork(null)}
        />
      )}

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="footer">
        <div className="footer-left">
          <span className="footer-mark">GH</span>
          <span>Ganesh Handge</span>
        </div>

        <div className="footer-center">
          DEVOPS · CLOUD · PLATFORM ENGINEERING · AI
        </div>

        <div className="footer-right">
          © 2026 Ganesh Handge
        </div>
      </footer>

      {/* =====================================================
          STYLES
      ====================================================== */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #ffffff;
          color: #101214;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .site {
          overflow: hidden;
        }

        /* =========================
           HERO
        ========================== */

        .hero {
          min-height: 100vh;
          background: #07090c;
          color: #ffffff;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .hero-grid,
        .ai-grid,
        .contact-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.25;

          background-image:
            linear-gradient(
              rgba(255,255,255,0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.035) 1px,
              transparent 1px
            );

          background-size: 60px 60px;

          mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 85%
            );
        }

        /* =========================
           NAVBAR
        ========================== */

        .navbar {
          position: relative;
          z-index: 20;

          width:
            min(
              1200px,
              calc(100% - 48px)
            );

          margin: 0 auto;
          padding: 28px 0;

          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;

          font-size: 14px;
          font-weight: 600;
        }

        .brand-mark {
          width: 34px;
          height: 34px;

          display: grid;
          place-items: center;

          border:
            1px solid
            rgba(141,255,191,0.6);

          color: #8dffbf;

          font-size: 10px;
          letter-spacing: 0.08em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 34px;
        }

        .nav-links a {
          font-size: 12px;
          color: #a8adb5;

          transition:
            color 0.25s ease,
            transform 0.25s ease;
        }

        .nav-links a:hover {
          color: #ffffff;
          transform: translateY(-2px);
        }

        .menu-button {
          display: none;

          background: transparent;
          border: 0;
          cursor: pointer;
        }

        .menu-button span {
          width: 24px;
          height: 1px;

          background: #ffffff;

          display: block;
          margin: 5px 0;
        }

        /* =========================
           HERO CONTENT
        ========================== */

        .hero-content {
          width:
            min(
              1200px,
              calc(100% - 48px)
            );

          margin: auto;

          padding: 55px 0 90px;

          position: relative;
          z-index: 2;
        }

        /* =========================
           TAGLINE
        ========================== */

        .hero-tagline {
          width: fit-content;
          max-width: 100%;

          margin:
            0 auto 62px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 22px;

          animation:
            taglineEntrance
            1.2s
            cubic-bezier(.22,.61,.36,1)
            both;
        }

        .hero-tagline p {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 9px;

          color: #d9dde2;

          font-size: 11px;
          line-height: 1;

          letter-spacing: 0.16em;

          text-transform: uppercase;

          white-space: nowrap;
        }

        .hero-tagline p span {
          opacity: 0;

          transform:
            translateY(12px);

          animation:
            taglineWords
            0.7s
            cubic-bezier(.22,.61,.36,1)
            forwards;
        }

        .hero-tagline p span:nth-child(1) {
          animation-delay: 0.35s;
        }

        .hero-tagline p span:nth-child(2) {
          animation-delay: 0.55s;
        }

        .hero-tagline p span:nth-child(3) {
          animation-delay: 0.75s;
        }

        .tagline-line {
          width: 42px;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #8dffbf
            );

          opacity: 0;

          animation:
            taglineLine
            1s
            ease
            forwards;

          animation-delay: 0.15s;
        }

        .tagline-line:last-child {
          background:
            linear-gradient(
              90deg,
              #8dffbf,
              transparent
            );

          animation-delay: 0.9s;
        }

        @keyframes taglineEntrance {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes taglineWords {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes taglineLine {
          from {
            opacity: 0;
            width: 0;
          }

          to {
            opacity: 1;
            width: 42px;
          }
        }

        /* =========================
           HERO TEXT
        ========================== */

        .hero-eyebrow {
          color: #8dffbf;

          font-size: 11px;

          letter-spacing: 0.18em;

          margin-bottom: 28px;
        }

        .hero-eyebrow span {
          color: #59616b;
          margin: 0 5px;
        }

        .hero-main {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            235px;

          align-items: center;

          gap: 60px;
        }

        .hello {
          color: #858c95;

          font-size: 12px;

          letter-spacing: 0.18em;

          margin-bottom: 12px;
        }

        .hero-text h1 {
          font-size:
            clamp(
              70px,
              9vw,
              125px
            );

          line-height: 0.86;

          letter-spacing: -0.075em;

          font-weight: 600;
        }

        .hero-text h1 span {
          color: #8dffbf;
        }

        .role-pill {
          display: inline-flex;

          align-items: center;

          gap: 9px;

          margin-top: 28px;

          padding: 8px 13px;

          border:
            1px solid
            rgba(141,255,191,0.22);

          background:
            rgba(141,255,191,0.04);

          color: #d8dce1;

          font-size: 11px;

          letter-spacing: 0.08em;

          text-transform: uppercase;
        }

        .role-dot {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #8dffbf;

          box-shadow:
            0 0 14px
            rgba(141,255,191,0.8);

          animation:
            pulseDot
            2s
            ease-in-out
            infinite;
        }

        @keyframes pulseDot {
          0%,
          100% {
            opacity: 0.55;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.25);
          }
        }

        .hero-description {
          max-width: 620px;

          color: #9ba2ab;

          font-size: 15px;

          line-height: 1.8;

          margin-top: 27px;
        }

        /* =========================
           BUTTONS
        ========================== */

        .hero-actions {
          display: flex;

          gap: 12px;

          margin-top: 32px;

          flex-wrap: wrap;
        }

        .primary-button,
        .secondary-button {
          padding: 13px 17px;

          font-size: 11px;

          letter-spacing: 0.05em;

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease;
        }

        .primary-button {
          background: #8dffbf;

          color: #07100b;

          display: inline-flex;

          gap: 18px;

          align-items: center;

          font-weight: 700;
        }

        .primary-button:hover {
          transform: translateY(-3px);

          background: #b2ffd0;
        }

        .secondary-button {
          border:
            1px solid
            #30353b;

          color: #d5d9de;
        }

        .secondary-button:hover {
          transform: translateY(-3px);

          border-color: #8dffbf;

          color: #ffffff;
        }

        .resume-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .resume-button span {
          color: #8dffbf;
          font-size: 14px;
          line-height: 1;
        }

        /* =========================
           METRICS
        ========================== */

        .hero-metrics {
          display: flex;

          gap: 42px;

          margin-top: 55px;

          padding-top: 25px;

          border-top:
            1px solid
            #20242a;
        }

        .hero-metrics div {
          display: flex;

          flex-direction: column;

          gap: 5px;
        }

        .hero-metrics strong {
          font-size: 18px;

          font-weight: 600;

          color: #ffffff;
        }

        .hero-metrics span {
          color: #717984;

          font-size: 9px;

          letter-spacing: 0.1em;

          text-transform: uppercase;
        }

        /* =========================
           SQUARE PROFILE PHOTO
        ========================== */

        .hero-photo-wrap {
          width: 235px;

          position: relative;

          display: flex;

          justify-content: center;

          align-items: center;

          min-height: 250px;
        }

        .photo-frame {
          width: 260px;
          height: 260px;

          padding: 5px;

          position: relative;

          border:
            1px solid
            rgba(141,255,191,0.55);

          background:
            rgba(141,255,191,0.03);

          box-shadow:
            0 0 0 8px
            rgba(141,255,191,0.025),

            0 0 0 1px
            rgba(255,255,255,0.04),

            0 0 50px
            rgba(141,255,191,0.10);

          animation:
            photoFloat
            5s
            ease-in-out
            infinite;
        }

        .photo-inner {
          width: 100%;
          height: 100%;

          overflow: hidden;

          border-radius: 10px;

          background: #11161a;

          position: relative;
        }

        .photo-inner::after {
          content: "";

          position: absolute;

          inset: 0;

          pointer-events: none;

          background:
            linear-gradient(
              135deg,
              rgba(141,255,191,0.10),
              transparent 40%,
              rgba(0,0,0,0.18)
            );

          mix-blend-mode: screen;
        }

        .photo-inner img {
          width: 100%;
          height: 100%;

          object-fit: cover;
          object-position: center;

          display: block;

          transition:
            transform 0.6s
            cubic-bezier(.22,.61,.36,1);
        }

        .photo-frame:hover .photo-inner img {
          transform: scale(1.04);
        }

        .photo-frame::before {
          content: "";

          position: absolute;

          inset: -12px;

          border:
            1px solid
            rgba(141,255,191,0.10);

          border-radius: 14px;

          animation:
            photoRing
            8s
            linear
            infinite;

          pointer-events: none;
        }

        .photo-frame::after {
          content: "";

          position: absolute;

          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #8dffbf;

          top: 10px;
          right: 27px;

          box-shadow:
            0 0 15px
            #8dffbf;
        }

        @keyframes photoFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-9px);
          }
        }

        @keyframes photoRing {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .photo-label {
          position: absolute;

          z-index: 3;

          color: #6e7782;

          font-size: 8px;

          letter-spacing: 0.18em;

          writing-mode: vertical-rl;
        }

        .photo-label-top {
          top: 5px;
          right: 0;
        }

        .photo-label-bottom {
          bottom: 5px;
          left: 0;
        }

        /* =========================
           SCROLL
        ========================== */

        .hero-scroll {
          position: absolute;

          bottom: 28px;
          left: 50%;

          transform: translateX(-50%);

          color: #5d6570;

          font-size: 8px;

          letter-spacing: 0.18em;

          display: flex;

          align-items: center;

          gap: 10px;
        }

        .hero-scroll span {
          width: 24px;
          height: 1px;

          background: #8dffbf;

          animation:
            scrollLine
            1.8s
            ease-in-out
            infinite;
        }

        @keyframes scrollLine {
          0%,
          100% {
            transform: scaleX(0.5);
            opacity: 0.4;
          }

          50% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        /* =========================
           GENERAL SECTIONS
        ========================== */

        .section {
          padding: 125px 0;

          background: #ffffff;
        }

        .section-container {
          width:
            min(
              1200px,
              calc(100% - 48px)
            );

          margin: 0 auto;
        }

        .section-heading {
          display: grid;

          grid-template-columns:
            70px 1fr;

          gap: 20px;

          margin-bottom: 70px;
        }

        .section-number {
          color: #8b939d;

          font-size: 11px;

          padding-top: 8px;
        }

        .section-label {
          display: block;

          color: #8a929c;

          font-size: 9px;

          letter-spacing: 0.18em;

          margin-bottom: 16px;
        }

        .section-heading h2 {
          font-size:
            clamp(
              42px,
              5vw,
              72px
            );

          line-height: 0.95;

          letter-spacing: -0.055em;

          font-weight: 500;
        }

        /* =========================
           REVEAL
        ========================== */

        .reveal {
          opacity: 0;

          transform:
            translateY(35px);

          transition:
            opacity 0.8s ease,
            transform
              0.8s
              cubic-bezier(.22,.61,.36,1);
        }

        .reveal.visible {
          opacity: 1;

          transform:
            translateY(0);
        }

        /* =========================
           ABOUT
        ========================== */

        .about-section {
          background: #f5f5f3;
        }

        .about-content {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            280px;

          gap: 100px;
        }

        .about-main {
          max-width: 760px;
        }

        .about-main p {
          color: #626971;

          font-size: 16px;

          line-height: 1.9;

          margin-top: 22px;
        }

        .about-main .large-text {
          color: #111315;

          font-size:
            clamp(
              25px,
              3vw,
              38px
            );

          line-height: 1.25;

          letter-spacing: -0.03em;

          margin-top: 0;
        }

        .about-side {
          border-left:
            1px solid
            #d5d7d8;

          padding-left: 30px;

          display: flex;

          flex-direction: column;

          gap: 35px;
        }

        .about-stat {
          display: flex;

          flex-direction: column;

          gap: 7px;
        }

        .about-stat strong {
          font-size: 35px;

          font-weight: 500;

          letter-spacing: -0.05em;
        }

        .about-stat span {
          font-size: 9px;

          text-transform: uppercase;

          letter-spacing: 0.12em;

          color: #8a9097;
        }

        /* =========================
           EXPERTISE
        ========================== */

        .expertise-section {
          background: #ffffff;
        }

        .expertise-grid {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          border-top:
            1px solid
            #dfe1e2;

          border-left:
            1px solid
            #dfe1e2;
        }

        .expertise-card {
          min-height: 290px;

          padding: 30px;

          border-right:
            1px solid
            #dfe1e2;

          border-bottom:
            1px solid
            #dfe1e2;

          position: relative;

          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .expertise-card:hover {
          background: #f5f5f3;

          transform:
            translateY(-5px);
        }

        .card-number {
          color: #a2a8ae;

          font-size: 9px;

          letter-spacing: 0.12em;
        }

        .expertise-card h3 {
          margin-top: 60px;

          font-size: 21px;

          font-weight: 500;

          letter-spacing: -0.03em;
        }

        .expertise-card p {
          color: #737a82;

          font-size: 12px;

          line-height: 1.7;

          margin-top: 13px;
        }

        .card-tags {
          position: absolute;

          left: 30px;
          bottom: 28px;

          display: flex;

          flex-wrap: wrap;

          gap: 6px;
        }

        .card-tags span,
        .work-tags span {
          border:
            1px solid
            #d7dadd;

          padding: 5px 7px;

          color: #737a82;

          font-size: 8px;

          letter-spacing: 0.06em;
        }

        /* =========================
           APPROACH
        ========================== */

        .approach-section {
          background: #f5f5f3;
        }

        .approach-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 1px;

          background: #d8dadb;
        }

        .approach-card {
          background: #f5f5f3;

          min-height: 230px;

          padding: 30px;

          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .approach-card:hover {
          background: #ffffff;

          transform:
            translateY(-4px);
        }

        .approach-card > span {
          color: #9aa1a8;

          font-size: 9px;
        }

        .approach-card h3 {
          margin-top: 60px;

          font-size: 20px;

          font-weight: 500;

          letter-spacing: -0.03em;
        }

        .approach-card p {
          color: #747b83;

          font-size: 12px;

          line-height: 1.7;

          margin-top: 12px;
        }

        /* =========================
           AI
        ========================== */

        .ai-section {
          position: relative;

          overflow: hidden;

          padding: 125px 0;

          background: #080b0e;

          color: #ffffff;
        }

        .ai-header {
          display: grid;

          grid-template-columns:
            70px 1fr;

          gap: 20px;

          margin-bottom: 70px;
        }

        .ai-header .section-number {
          color: #56616a;
        }

        .ai-header .section-label {
          color: #7d8791;
        }

        .ai-header h2 {
          font-size:
            clamp(
              45px,
              6vw,
              82px
            );

          line-height: 0.95;

          letter-spacing: -0.06em;

          font-weight: 500;
        }

        .ai-header h2 span {
          color: #8dffbf;
        }

        .ai-intro {
          max-width: 700px;

          color: #89929b;

          font-size: 16px;

          line-height: 1.9;
        }

        .ai-tools {
          margin-top: 65px;

          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          border-top:
            1px solid
            #242a30;

          border-left:
            1px solid
            #242a30;
        }

        .ai-tools div {
          min-height: 150px;

          padding: 25px;

          border-right:
            1px solid
            #242a30;

          border-bottom:
            1px solid
            #242a30;

          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .ai-tools div:hover {
          background:
            rgba(141,255,191,0.04);

          transform:
            translateY(-3px);
        }

        .ai-tools strong {
          display: block;

          color: #ffffff;

          font-size: 17px;

          font-weight: 500;
        }

        .ai-tools span {
          display: block;

          margin-top: 8px;

          color: #65707a;

          font-size: 9px;

          letter-spacing: 0.12em;

          text-transform: uppercase;
        }

        /* =========================
           EXPERIENCE
        ========================== */

        .experience-section {
          background: #ffffff;
        }

        .experience-list {
          border-top:
            1px solid
            #dfe1e2;
        }

        .experience-item {
          padding: 50px 0;

          border-bottom:
            1px solid
            #dfe1e2;
        }

        .experience-meta {
          display: flex;

          justify-content: space-between;

          color: #969da4;

          font-size: 8px;

          letter-spacing: 0.13em;

          margin-bottom: 35px;
        }

        .experience-main {
          display: grid;

          grid-template-columns:
            32% 1fr;

          gap: 60px;
        }

        .experience-title h3 {
          font-size: 29px;

          font-weight: 500;

          letter-spacing: -0.04em;
        }

        .experience-title p {
          color: #8a9198;

          font-size: 11px;

          margin-top: 8px;
        }

        .experience-description > p {
          color: #656d75;

          font-size: 14px;

          line-height: 1.8;

          margin-bottom: 20px;
        }

        .experience-description ul {
          padding-left: 17px;
        }

        .experience-description li {
          color: #727981;

          font-size: 12px;

          line-height: 1.8;

          margin-bottom: 7px;
        }

        /* =========================
           WORK
        ========================== */

        .work-section {
          background: #f5f5f3;
        }

        .work-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 15px;
        }

        .work-card {
          min-height: 390px;

          padding: 30px;

          background: #ffffff;

          border:
            1px solid
            #dedfe0;

          display: flex;

          flex-direction: column;

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .work-card:hover {
          transform:
            translateY(-8px);

          box-shadow:
            0 20px 50px
            rgba(0,0,0,0.07);
        }

        .work-top {
          display: flex;

          justify-content: space-between;

          color: #969da4;

          font-size: 8px;

          letter-spacing: 0.13em;
        }

        .work-card h3 {
          margin-top: 70px;

          font-size: 25px;

          font-weight: 500;

          letter-spacing: -0.04em;
        }

        .work-card p {
          color: #737a82;

          font-size: 12px;

          line-height: 1.75;

          margin-top: 15px;
        }

        .work-tags {
          display: flex;

          flex-wrap: wrap;

          gap: 6px;

          margin-top: auto;

          padding-top: 35px;
        }

        .work-card-button {
          width: 100%;
          text-align: left;
          font: inherit;
          color: inherit;
          cursor: pointer;
          appearance: none;
        }

        .work-card-button:focus-visible {
          outline: 2px solid #8dffbf;
          outline-offset: 4px;
        }

        .work-case-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 28px;
          padding-top: 16px;
          border-top: 1px solid #e4e5e5;
          color: #111315;
          font-size: 8px;
          letter-spacing: 0.14em;
        }

        .work-case-link span:last-child {
          color: #8a9299;
          font-size: 14px;
          transition: transform 0.25s ease, color 0.25s ease;
        }

        .work-card:hover .work-case-link span:last-child {
          transform: translate(3px, -3px);
          color: #111315;
        }

        .project-modal {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: grid;
          place-items: center;
          padding: 24px;
        }

        .project-modal-backdrop {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
          background: rgba(3, 5, 7, 0.82);
          backdrop-filter: blur(8px);
          cursor: pointer;
        }

        .project-modal-panel {
          position: relative;
          z-index: 1;
          width: min(1050px, 100%);
          max-height: min(900px, calc(100vh - 48px));
          overflow-y: auto;
          padding: 48px;
          background: #f5f5f3;
          color: #101214;
          border: 1px solid rgba(141, 255, 191, 0.25);
          box-shadow: 0 35px 100px rgba(0, 0, 0, 0.35);
          animation: modalIn 0.35s cubic-bezier(.22,.61,.36,1) both;
        }

        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .project-modal-close {
          position: absolute;
          top: 22px;
          right: 24px;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          border: 0;
          background: transparent;
          color: #7f878f;
          cursor: pointer;
        }

        .project-modal-close span {
          font-size: 7px;
          letter-spacing: 0.12em;
        }

        .project-modal-close strong {
          font-size: 25px;
          font-weight: 300;
          line-height: 1;
        }

        .project-modal-close:hover {
          color: #101214;
        }

        .project-modal-top {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding-bottom: 18px;
          border-bottom: 1px solid #d7d9da;
          color: #8a9299;
          font-size: 8px;
          letter-spacing: 0.15em;
        }

        .project-modal-panel h2 {
          max-width: 800px;
          margin-top: 45px;
          font-size: clamp(42px, 6vw, 72px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 500;
        }

        .project-modal-intro {
          max-width: 760px;
          margin-top: 25px;
          color: #626971;
          font-size: 15px;
          line-height: 1.85;
        }

        .project-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 28px;
        }

        .project-stack span {
          padding: 7px 9px;
          border: 1px solid #d2d5d6;
          color: #6f777e;
          font-size: 8px;
          letter-spacing: 0.07em;
        }

        .case-study-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          margin-top: 50px;
          background: #d7d9da;
          border-top: 1px solid #d7d9da;
          border-left: 1px solid #d7d9da;
        }

        .case-study-block {
          min-height: 220px;
          padding: 27px;
          background: #f5f5f3;
          border-right: 1px solid #d7d9da;
          border-bottom: 1px solid #d7d9da;
        }

        .case-study-block > span,
        .case-study-outcome > span {
          color: #8a9299;
          font-size: 8px;
          letter-spacing: 0.14em;
        }

        .case-study-block p {
          margin-top: 25px;
          color: #60686f;
          font-size: 12px;
          line-height: 1.8;
        }

        .case-study-block ul {
          margin-top: 22px;
          padding-left: 17px;
        }

        .case-study-block li {
          margin-bottom: 9px;
          color: #60686f;
          font-size: 11px;
          line-height: 1.65;
        }

        .case-study-outcome {
          margin-top: 1px;
          padding: 30px;
          background: #080b0e;
          color: #ffffff;
        }

        .case-study-outcome > span {
          color: #68737d;
        }

        .case-study-outcome p {
          max-width: 850px;
          margin-top: 18px;
          color: #a7afb6;
          font-size: 14px;
          line-height: 1.8;
        }

        /* =========================
           CREDENTIALS
        ========================== */

        .credentials-section {
          background: #ffffff;
        }

        .credentials-grid {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          border-top:
            1px solid
            #dedfe0;

          border-left:
            1px solid
            #dedfe0;
        }

        .credential {
          min-height: 190px;

          padding: 27px;

          border-right:
            1px solid
            #dedfe0;

          border-bottom:
            1px solid
            #dedfe0;
        }

        .credential > span {
          color: #a1a7ad;

          font-size: 9px;
        }

        .credential h3 {
          margin-top: 45px;

          font-size: 17px;

          font-weight: 500;

          line-height: 1.3;
        }

        .credential p {
          color: #858c94;

          font-size: 10px;

          margin-top: 8px;
        }

        /* =========================
           CONTACT
        ========================== */

        .contact-section {
          position: relative;

          overflow: hidden;

          padding: 140px 0;

          background: #080b0e;

          color: #ffffff;
        }

        .contact-content {
          max-width: 900px;
        }

        .contact-content .section-label {
          color: #7e8892;
        }

        .contact-content h2 {
          font-size:
            clamp(
              50px,
              7vw,
              92px
            );

          line-height: 0.92;

          letter-spacing: -0.065em;

          font-weight: 500;
        }

        .contact-content h2 span {
          color: #8dffbf;
        }

        .contact-content > p {
          max-width: 600px;

          margin-top: 30px;

          color: #858e97;

          font-size: 14px;

          line-height: 1.8;
        }

        .contact-email {
          display: inline-flex;

          align-items: center;

          gap: 22px;

          margin-top: 40px;

          color: #ffffff;

          font-size: 18px;

          padding-bottom: 9px;

          border-bottom:
            1px solid
            #8dffbf;

          transition:
            color 0.25s ease,
            gap 0.25s ease;
        }

        .contact-email:hover {
          color: #8dffbf;

          gap: 30px;
        }

        .contact-form {
          max-width: 780px;
          margin-top: 48px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-form-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .contact-form label {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .contact-form label > span {
          color: #68737d;
          font-size: 8px;
          letter-spacing: 0.15em;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          border: 1px solid #252c32;
          background: rgba(255, 255, 255, 0.025);
          color: #ffffff;
          padding: 15px 16px;
          font: inherit;
          font-size: 12px;
          line-height: 1.6;
          outline: none;
          resize: vertical;
          transition: border-color 0.25s ease, background 0.25s ease;
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: #59636d;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: rgba(141, 255, 191, 0.65);
          background: rgba(141, 255, 191, 0.035);
        }

        .contact-submit {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          min-width: 175px;
          padding: 14px 17px;
          border: 1px solid #8dffbf;
          background: #8dffbf;
          color: #07100b;
          font: inherit;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          cursor: pointer;
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .contact-submit:hover:not(:disabled) {
          transform: translateY(-3px);
          background: #b2ffd0;
        }

        .contact-submit:disabled {
          cursor: wait;
          opacity: 0.65;
        }

        .contact-submit span:last-child {
          font-size: 15px;
        }

        .contact-status {
          margin: 0 !important;
          font-size: 11px !important;
          line-height: 1.6 !important;
        }

        .contact-status.success {
          color: #8dffbf !important;
        }

        .contact-status.error {
          color: #ff9c9c !important;
        }

        .social-links {
          display: flex;

          gap: 25px;

          margin-top: 35px;
        }

        .social-links a {
          color: #737d87;

          font-size: 10px;

          text-transform: uppercase;

          letter-spacing: 0.14em;

          transition:
            color 0.25s ease;
        }

        .social-links a:hover {
          color: #8dffbf;
        }

        /* =========================
           FOOTER
        ========================== */

        .footer {
          min-height: 90px;

          padding: 20px 24px;

          background: #050709;

          border-top:
            1px solid
            #181d21;

          color: #5e6872;

          display: grid;

          grid-template-columns:
            1fr 1fr 1fr;

          align-items: center;

          font-size: 8px;

          letter-spacing: 0.12em;

          text-transform: uppercase;
        }

        .footer-left {
          display: flex;

          align-items: center;

          gap: 10px;
        }

        .footer-mark {
          color: #8dffbf;
        }

        .footer-center {
          text-align: center;
        }

        .footer-right {
          text-align: right;
        }

        /* =========================
           TABLET
        ========================== */

        @media (max-width: 900px) {
          .hero-main {
            grid-template-columns:
              minmax(0, 1fr)
              180px;

            gap: 30px;
          }

          .hero-photo-wrap {
            width: 180px;
          }

          .photo-frame {
            width: 165px;
            height: 165px;
          }

          .expertise-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .approach-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .work-grid {
            grid-template-columns: 1fr;
          }

          .credentials-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .about-content {
            gap: 50px;
          }

          .ai-tools {
            grid-template-columns:
              repeat(2, 1fr);
          }
        }

        /* =========================
           MOBILE
        ========================== */

        @media (max-width: 700px) {
          .navbar {
            width:
              min(
                calc(100% - 32px),
                1200px
              );
          }

          .brand-name {
            display: none;
          }

          .menu-button {
            display: block;

            position: relative;

            z-index: 30;
          }

          .nav-links {
            display: none;

            position: absolute;

            top: 70px;

            right: 0;

            width: 200px;

            padding: 20px;

            background: #0d1115;

            border:
              1px solid
              #242a30;

            flex-direction: column;

            align-items: flex-start;

            gap: 20px;
          }

          .nav-links.open {
            display: flex;
          }

          .hero-content,
          .section-container {
            width:
              min(
                calc(100% - 32px),
                1200px
              );
          }

          .hero-content {
            padding-top: 35px;
            padding-bottom: 90px;
          }

          /* TAGLINE */

          .hero-tagline {
            width: 100%;

            gap: 10px;

            margin-bottom: 45px;
          }

          .hero-tagline p {
            flex-direction: column;

            gap: 6px;

            font-size: 8px;

            letter-spacing: 0.12em;

            text-align: center;

            line-height: 1.3;
          }

          .tagline-line {
            width: 22px;
          }

          @keyframes taglineLine {
            from {
              opacity: 0;
              width: 0;
            }

            to {
              opacity: 1;
              width: 22px;
            }
          }

          .hero-eyebrow {
            font-size: 8px;

            line-height: 1.7;

            max-width: 290px;
          }

          .hero-main {
            display: flex;

            flex-direction: column-reverse;

            align-items: flex-start;

            gap: 45px;
          }

          .hero-photo-wrap {
            width: 165px;

            min-height: 175px;

            align-self: center;
          }

          .photo-frame {
            width: 155px;
            height: 155px;
          }

          .photo-label {
            font-size: 7px;
          }

          .hero-text h1 {
            font-size:
              clamp(
                64px,
                20vw,
                95px
              );
          }

          .hero-description {
            font-size: 13px;
          }

          .hero-metrics {
            gap: 22px;

            flex-wrap: wrap;
          }

          .hero-metrics div {
            min-width: 80px;
          }

          .hero-scroll {
            display: none;
          }

          .section {
            padding: 85px 0;
          }

          .section-heading {
            grid-template-columns:
              40px 1fr;

            gap: 10px;

            margin-bottom: 45px;
          }

          .section-heading h2 {
            font-size:
              clamp(
                40px,
                12vw,
                58px
              );
          }

          .about-content {
            grid-template-columns: 1fr;

            gap: 50px;
          }

          .about-side {
            border-left: 0;

            border-top:
              1px solid
              #d5d7d8;

            padding-left: 0;

            padding-top: 25px;

            display: grid;

            grid-template-columns:
              repeat(3, 1fr);
          }

          .about-stat strong {
            font-size: 27px;
          }

          .expertise-grid {
            grid-template-columns: 1fr;
          }

          .expertise-card {
            min-height: 270px;
          }

          .approach-grid {
            grid-template-columns: 1fr;
          }

          .ai-header {
            grid-template-columns:
              40px 1fr;

            gap: 10px;
          }

          .ai-tools {
            grid-template-columns: 1fr;
          }

          .experience-main {
            grid-template-columns: 1fr;

            gap: 30px;
          }

          .experience-meta {
            flex-direction: column;

            gap: 8px;
          }

          .credentials-grid {
            grid-template-columns: 1fr;
          }

          .contact-form {
            margin-top: 38px;
          }

          .contact-form-row {
            grid-template-columns: 1fr;
          }

          .contact-submit {
            width: 100%;
          }

          .footer {
            grid-template-columns: 1fr;

            gap: 15px;

            text-align: center;
          }

          .footer-left,
          .footer-right {
            justify-content: center;

            text-align: center;
          }

          .footer-center {
            order: 3;
          }

          .footer-right {
            order: 2;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================== */


        @media (max-width: 700px) {
          .project-modal {
            padding: 10px;
          }

          .project-modal-panel {
            max-height: calc(100vh - 20px);
            padding: 30px 20px 20px;
          }

          .project-modal-panel h2 {
            margin-top: 35px;
            font-size: clamp(38px, 13vw, 56px);
          }

          .project-modal-top {
            padding-right: 45px;
          }

          .case-study-grid {
            grid-template-columns: 1fr;
            margin-top: 35px;
          }

          .case-study-block {
            min-height: auto;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration:
              0.01ms !important;

            animation-iteration-count:
              1 !important;

            transition-duration:
              0.01ms !important;
          }

          .reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </main>
  );
}

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function ExpertiseCard({
  number,
  title,
  description,
  tags,
}: {
  number: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="expertise-card reveal">
      <span className="card-number">{number}</span>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="card-tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

function ApproachCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="approach-card reveal">
      <span>{number}</span>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}

function AiTool({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <strong>{title}</strong>
      <span>{subtitle}</span>
    </div>
  );
}

function WorkCard({
  number,
  category,
  title,
  description,
  tags,
  onOpen,
}: {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  projectKey: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      className="work-card reveal work-card-button"
      onClick={onOpen}
      aria-label={`View case study: ${title}`}
    >
      <div className="work-top">
        <span>{number}</span>
        <span>{category}</span>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="work-tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="work-case-link">
        <span>VIEW CASE STUDY</span>
        <span>↗</span>
      </div>
    </button>
  );
}

const projectDetails: Record<
  string,
  {
    category: string;
    title: string;
    intro: string;
    problem: string;
    architecture: string[];
    implementation: string[];
    security: string[];
    reliability: string[];
    optimization: string[];
    outcome: string;
    stack: string[];
  }
> = {
  kubernetes: {
    category: "PLATFORM ENGINEERING",
    title: "Enterprise Kubernetes Platform",
    intro:
      "Designed and supported Azure-based Kubernetes infrastructure for enterprise microservices, with an emphasis on repeatable delivery, reliability, security and operational visibility.",
    problem:
      "Enterprise microservices required a consistent platform for deployment and operations across environments, while teams needed controlled releases, health checks, scaling and production observability.",
    architecture: [
      "Source control and CI/CD workflows feed containerized workloads into Azure Container Registry.",
      "AKS provides the Kubernetes runtime for enterprise microservices, with ingress, networking and service exposure managed as part of the platform.",
      "Azure Monitor, Log Analytics, Prometheus and Grafana provide operational visibility across the platform."
    ],
    implementation: [
      "Supported AKS-based microservices platforms with automated scaling and application health checks.",
      "Used Docker and Helm for container packaging and repeatable Kubernetes deployments.",
      "Integrated Azure DevOps, Jenkins and Argo CD across DEV, QA, UAT and PROD delivery workflows.",
      "Automated infrastructure provisioning with reusable Terraform modules."
    ],
    security: [
      "Applied Azure Key Vault for secrets management.",
      "Used RBAC and Managed Identity to control access to cloud resources and workloads.",
      "Applied Azure Policy and DevSecOps scanning practices as part of platform governance."
    ],
    reliability: [
      "Implemented health checks, monitoring and centralized logging for production workloads.",
      "Used Prometheus and Grafana together with Azure Monitor and Log Analytics for operational visibility.",
      "Participated in production support, problem management, RCA and permanent corrective actions."
    ],
    optimization: [
      "Worked on resource utilization and AKS optimization to improve infrastructure efficiency.",
      "Focused on repeatable automation to reduce manual operational effort and deployment overhead."
    ],
    outcome:
      "The delivery approach contributed to more repeatable releases, stronger operational visibility and improved platform reliability. The CV records 99.9% availability for the supported platform and a 40% reduction in deployment time.",
    stack: ["Azure", "AKS", "Terraform", "Docker", "Helm", "Argo CD", "Prometheus", "Grafana"]
  },
  terraform: {
    category: "INFRASTRUCTURE AS CODE",
    title: "Terraform Infrastructure Platform",
    intro:
      "Built reusable infrastructure automation for Azure environments, standardizing provisioning and making cloud foundations easier to manage across multiple environments.",
    problem:
      "Cloud infrastructure needed to be provisioned consistently while avoiding repeated manual configuration across environments and keeping infrastructure changes traceable and repeatable.",
    architecture: [
      "Terraform acts as the infrastructure orchestration layer for Azure resources.",
      "Reusable modules provide standardized patterns for networking, AKS, ACR and monitoring resources.",
      "Remote state and environment-specific configuration support controlled multi-environment provisioning."
    ],
    implementation: [
      "Developed reusable Terraform modules for cloud infrastructure provisioning.",
      "Managed remote state and Terraform state lifecycle for infrastructure changes.",
      "Provisioned resource groups, networking, AKS, ACR and Log Analytics resources.",
      "Supported multi-environment infrastructure provisioning using reusable patterns."
    ],
    security: [
      "Integrated infrastructure provisioning with Azure identity and access controls.",
      "Supported governance through standardized resource and networking configurations.",
      "Used Key Vault, RBAC, Managed Identity and Azure Policy within the wider platform implementation."
    ],
    reliability: [
      "Standardized infrastructure creation to reduce configuration drift and manual setup.",
      "Used infrastructure as code to make changes repeatable and easier to review.",
      "Combined Terraform automation with monitoring and operational support practices."
    ],
    optimization: [
      "Reusable modules reduced duplicated infrastructure definitions and operational effort.",
      "Standardized provisioning patterns made environment creation and maintenance more efficient."
    ],
    outcome:
      "The approach established a repeatable infrastructure foundation for cloud workloads and enabled consistent multi-environment provisioning using infrastructure as code.",
    stack: ["Terraform", "Azure", "ARM", "VNet", "AKS", "ACR", "Log Analytics"]
  },
  devsecops: {
    category: "DEVSECOPS & GITOPS",
    title: "Enterprise DevSecOps Delivery Platform",
    intro:
      "Engineered automated delivery workflows that combine build automation, security validation, containerization and GitOps-based deployment across enterprise environments.",
    problem:
      "Application delivery required a repeatable path from source code through build, security validation and deployment, with controls suitable for multiple enterprise environments.",
    architecture: [
      "Source control triggers CI workflows for build and validation.",
      "Static and container security checks run before container images are promoted to the registry.",
      "Argo CD provides GitOps-based deployment into Kubernetes environments."
    ],
    implementation: [
      "Built and supported Azure DevOps and Jenkins CI/CD workflows.",
      "Integrated Docker image build and Azure Container Registry publishing.",
      "Used Argo CD for GitOps-based Kubernetes deployments.",
      "Supported DEV, QA, UAT and PROD deployment workflows with controlled release practices."
    ],
    security: [
      "Integrated SonarQube for code quality and security validation.",
      "Used Trivy for container vulnerability scanning.",
      "Applied Azure Key Vault and HashiCorp Vault for secrets management.",
      "Applied RBAC, Managed Identity and policy-based governance across the platform."
    ],
    reliability: [
      "Standardized deployment workflows to reduce manual release steps.",
      "Used GitOps to provide a controlled and traceable deployment model for Kubernetes workloads.",
      "Supported production releases and troubleshooting across multiple environments."
    ],
    optimization: [
      "Automation reduced repetitive deployment activity and improved release consistency.",
      "The CV records a 40% reduction in deployment time through the CI/CD implementation."
    ],
    outcome:
      "The delivery platform improved release repeatability and security coverage while reducing deployment effort. The documented result includes a 40% reduction in deployment time.",
    stack: ["Azure DevOps", "Jenkins", "Argo CD", "Docker", "SonarQube", "Trivy", "Key Vault"]
  }
};

function ProjectModal({
  projectKey,
  onClose,
}: {
  projectKey: string;
  onClose: () => void;
}) {
  const project = projectDetails[projectKey];

  if (!project) return null;

  return (
    <div className="project-modal" role="dialog" aria-modal="true" aria-label={project.title}>
      <button className="project-modal-backdrop" onClick={onClose} aria-label="Close case study" />

      <div className="project-modal-panel">
        <button className="project-modal-close" onClick={onClose} aria-label="Close case study">
          <span>ESC</span>
          <strong>×</strong>
        </button>

        <div className="project-modal-top">
          <span>{project.category}</span>
          <span>CASE STUDY</span>
        </div>

        <h2>{project.title}</h2>
        <p className="project-modal-intro">{project.intro}</p>

        <div className="project-stack">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="case-study-grid">
          <CaseStudyBlock title="01 · PROBLEM" text={project.problem} />
          <CaseStudyList title="02 · ARCHITECTURE" items={project.architecture} />
          <CaseStudyList title="03 · IMPLEMENTATION" items={project.implementation} />
          <CaseStudyList title="04 · SECURITY & GOVERNANCE" items={project.security} />
          <CaseStudyList title="05 · RELIABILITY" items={project.reliability} />
          <CaseStudyList title="06 · OPTIMIZATION" items={project.optimization} />
        </div>

        <div className="case-study-outcome">
          <span>07 · OUTCOME</span>
          <p>{project.outcome}</p>
        </div>
      </div>
    </div>
  );
}

function CaseStudyBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="case-study-block">
      <span>{title}</span>
      <p>{text}</p>
    </div>
  );
}

function CaseStudyList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="case-study-block">
      <span>{title}</span>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Credential({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="credential">
      <span>{number}</span>

      <h3>{title}</h3>

      <p>{subtitle}</p>
    </div>
  );
}
