import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import profilePhoto from "@/assets/photo.jpg"
import threedyLogo from "@/assets/threedy-logo.png"
import infineonLogo from "@/assets/Infineon-Logo.png"
import sanDiskLogo from "@/assets/SanDisk_2024_logo.svg"
import configitLogo from "@/assets/Configit_logo.webp"
import voonikLogo from "@/assets/voonik-logo.png"

const Index = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

    window.location.href = `mailto:sudharsan.raman16@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero/Summary Section */}
      <section className="border-b-4 border-border bg-background-alt p-4 sm:p-8 md:p-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-[200px_1fr]">
            <div className="relative mx-auto w-48 sm:w-full">
              <div className="aspect-square w-full border-4 border-border bg-muted shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <img
                  src={profilePhoto}
                  alt="Sudharsan Ramakrishnan"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="mb-2 text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl lg:text-7xl">
                Sudharsan Ramakrishnan
              </h1>
              <p className="mb-4 text-lg font-bold text-primary sm:mb-6 sm:text-xl md:text-2xl">
                Technical Consultant @ Threedy
              </p>
              <p className="mb-4 text-base leading-relaxed sm:mb-6 sm:text-lg">
                Full stack developer with 8+ years of experience building data-driven applications and analytics platforms. I focus on scalable enterprise software, process automation, and operational efficiency, and I enjoy contributing across product engineering, customer delivery, and digital transformation initiatives.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:justify-start">
                <a href="mailto:sudharsan.raman16@gmail.com" className="flex items-center gap-2 border-2 border-border bg-accent px-3 py-2 text-sm font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] sm:px-4 sm:text-base sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <Mail className="h-4 w-4" />
                  Email
                </a>
                <a href="https://www.linkedin.com/in/sudharsan-ramakrishnan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-border bg-secondary px-3 py-2 text-sm font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] sm:px-4 sm:text-base sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <div className="flex items-center gap-2 border-2 border-border bg-highlight px-3 py-2 text-sm font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:px-4 sm:text-base sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <MapPin className="h-4 w-4" />
                  <span className="hidden sm:inline">Bangalore, KA</span>
                  <span className="sm:hidden">Bangalore</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="border-b-4 border-border p-4 sm:p-8 md:p-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-3xl font-black uppercase sm:mb-8 sm:text-4xl md:text-5xl">
            <span className="border-4 border-border bg-primary px-3 py-2 text-primary-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:px-4 sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              Experience
            </span>
          </h2>

          <div className="space-y-6 sm:space-y-8">
            {/* Threedy */}
            <Card className="border-4 border-border p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:p-6 sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex h-12 w-24 items-center justify-center text-sm font-bold sm:h-16 sm:w-32">
                    <img
                      src={threedyLogo}
                      alt="Threedy GmbH"
                      className="h-full w-full rounded object-contain"
                      width="128"
                      height="64"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-black sm:text-2xl">Threedy GmbH</h3>
                    <p className="text-base font-bold text-primary sm:text-lg">Technical Consultant</p>
                  </div>
                </div>
                <Badge className="self-start border-2 border-border bg-highlight text-highlight-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:self-auto">
                  June 2025 - Present
                </Badge>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <p>First employee at the India location, supporting Threedy&apos;s global expansion efforts.</p>
                <p>Started in technical pre-sales, contributing to internal projects, PoCs, and showcase applications.</p>
                <p>Now part of Customer Success, shipping custom full-stack solutions with React, Lit, and Go, alongside CI/CD, containerization, and Helm-based deployments on on-prem Kubernetes clusters.</p>
              </div>
            </Card>

            {/* Infineon */}
            <Card className="border-4 border-border p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:p-6 sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex h-12 w-24 items-center justify-center text-sm font-bold sm:h-16 sm:w-32">
                    <img
                      src={infineonLogo}
                      alt="Infineon Technologies"
                      className="h-full w-full rounded object-contain"
                      width="128"
                      height="64"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-black sm:text-2xl">Infineon Technologies</h3>
                    <p className="text-base font-bold text-secondary sm:text-lg">Staff Engineer - Data Science</p>
                  </div>
                </div>
                <Badge className="self-start border-2 border-border bg-highlight text-highlight-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:self-auto">
                  Apr 2024 - Jun 2025
                </Badge>
              </div>
              <p className="mb-3 text-sm sm:text-base">
                Part of the Digital Service &amp; Projects team at ATV QM, focused on digitalization, process automation, data science, and engineering initiatives.
              </p>
              <div className="space-y-2 text-xs sm:text-sm">
                <p><span className="font-bold text-accent">QM Self Service:</span> Engineered a data integration pipeline combining product, quality, and reliability data to automate customer quality documentation, achieving 80% product coverage and resolving 90% of customer quality inquiries.</p>
                <p><span className="font-bold text-accent">ValueStream PRO:</span> Built a value stream mapping tool to support lean-agile practices and enable data-driven efficiency improvements and cost optimization opportunities.</p>
              </div>
            </Card>

            {/* Western Digital */}
            <Card className="border-4 border-border p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:p-6 sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex h-12 w-24 items-center justify-center text-sm font-bold sm:h-16 sm:w-32">
                    <img
                      src={sanDiskLogo}
                      alt="SanDisk"
                      className="h-full w-full rounded object-contain"
                      width="128"
                      height="64"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-black sm:text-2xl">SanDisk India Device Design Center Pvt Ltd</h3>
                    <p className="text-base font-bold text-primary sm:text-lg">Analyst 3, Programming</p>
                  </div>
                </div>
                <Badge className="self-start border-2 border-border bg-highlight text-highlight-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:self-auto">
                  Aug 2019 - Apr 2024
                </Badge>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <p>Worked in SanDisk&apos;s Advanced Business Analytics team building end-to-end data applications and analytical solutions.</p>
                <p><span className="font-bold text-accent">Lead Analyst:</span> Led development of data pipelines, predictive ML models for freight cost and AR payment forecasting, and internal web applications including Process Navigator and DISCOVER+.</p>
                <p><span className="font-bold text-accent">Earlier contributions:</span> Introduced scheduling and monitoring for Python jobs with Apache Airflow, explored PySpark migration for large transaction tables, and built ETL and analytics pipelines spanning Oracle ERP, Hybris, pricing, search, and review data.</p>
                <p><span className="font-bold text-accent">Platform operations:</span> Supported Tableau Server administration with tabcmd and REST API for refreshes, audits, alerts, backups, version control, and exports.</p>
              </div>
            </Card>

            {/* Configit */}
            <Card className="border-4 border-border p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:p-6 sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex h-12 w-24 items-center justify-center text-sm font-bold sm:h-16 sm:w-32">
                    <img
                      src={configitLogo}
                      alt="Configit"
                      className="h-full w-full rounded object-contain"
                      width="128"
                      height="64"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-black sm:text-2xl">Configit</h3>
                    <p className="text-base font-bold text-secondary sm:text-lg">Solution Developer</p>
                  </div>
                </div>
                <Badge className="self-start border-2 border-border bg-highlight text-highlight-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:self-auto">
                  Jun 2017 - Jul 2019
                </Badge>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <p>Worked in the delivery team on data preparation, product enhancements, client projects, and PoCs for configuration lifecycle management software.</p>
                <p>Led development of Solidworks add-ins by integrating Configit&apos;s VT-SDK with the Solidworks API, expanding modeling and configuration capabilities that later evolved into the standalone Configit Engineering product.</p>
                <p>Also conducted Configit Academy training and certification programs at TCS and Infosys.</p>
              </div>
            </Card>

            {/* VOONIK */}
            <Card className="border-4 border-border p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:p-6 sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex h-12 w-24 items-center justify-center text-sm font-bold sm:h-16 sm:w-32">
                    <img
                      src={voonikLogo}
                      alt="Voonik"
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-black sm:text-2xl">VOONIK</h3>
                    <p className="text-base font-bold text-accent sm:text-lg">Software Development Engineer Intern</p>
                  </div>
                </div>
                <Badge className="self-start border-2 border-border bg-highlight text-highlight-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:self-auto">
                  Dec 2016 - May 2017
                </Badge>
              </div>
              <p className="text-sm sm:text-base">
                Contributed to the Android application development team for Voonik&apos;s women&apos;s fashion e-commerce platform.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills & Achievements Section */}
      <section className="border-b-4 border-border bg-background-alt p-4 sm:p-8 md:p-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-3xl font-black uppercase sm:mb-8 sm:text-4xl md:text-5xl">
            <span className="border-4 border-border bg-secondary px-3 py-2 text-secondary-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:px-4 sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              Skills & Achievements
            </span>
          </h2>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            <Card className="border-4 border-border p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:p-6 sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="mb-3 text-xl font-black uppercase sm:mb-4 sm:text-2xl">Technical Skills</h3>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                <Badge className="border-2 border-border bg-primary text-xs text-primary-foreground sm:text-sm">Solution Architecture</Badge>
                <Badge className="border-2 border-border bg-secondary text-xs text-secondary-foreground sm:text-sm">ETL</Badge>
                <Badge className="border-2 border-border bg-accent text-xs text-accent-foreground sm:text-sm">Go</Badge>
                <Badge className="border-2 border-border bg-primary text-xs text-primary-foreground sm:text-sm">Python</Badge>
                <Badge className="border-2 border-border bg-secondary text-xs text-secondary-foreground sm:text-sm">TypeScript</Badge>
                <Badge className="border-2 border-border bg-accent text-xs text-accent-foreground sm:text-sm">SQL</Badge>
                <Badge className="border-2 border-border bg-primary text-xs text-primary-foreground sm:text-sm">Flask</Badge>
                <Badge className="border-2 border-border bg-secondary text-xs text-secondary-foreground sm:text-sm">FastAPI</Badge>
                <Badge className="border-2 border-border bg-accent text-xs text-accent-foreground sm:text-sm">SQLAlchemy</Badge>
                <Badge className="border-2 border-border bg-primary text-xs text-primary-foreground sm:text-sm">React</Badge>
                <Badge className="border-2 border-border bg-primary text-xs text-primary-foreground sm:text-sm">Vue.js</Badge>
                <Badge className="border-2 border-border bg-secondary text-xs text-secondary-foreground sm:text-sm">Tailwind CSS</Badge>
                <Badge className="border-2 border-border bg-accent text-xs text-accent-foreground sm:text-sm">Pandas</Badge>
                <Badge className="border-2 border-border bg-primary text-xs text-primary-foreground sm:text-sm">Docker</Badge>
                <Badge className="border-2 border-border bg-secondary text-xs text-secondary-foreground sm:text-sm">Kubernetes</Badge>
                <Badge className="border-2 border-border bg-accent text-xs text-accent-foreground sm:text-sm">Helm</Badge>
                <Badge className="border-2 border-border bg-primary text-xs text-primary-foreground sm:text-sm">Oracle Database</Badge>
                <Badge className="border-2 border-border bg-secondary text-xs text-secondary-foreground sm:text-sm">Tableau</Badge>
                <Badge className="border-2 border-border bg-accent text-xs text-accent-foreground sm:text-sm">Data Modeling</Badge>
              </div>
            </Card>

            <Card className="border-4 border-border p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:p-6 sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="mb-3 text-xl font-black uppercase sm:mb-4 sm:text-2xl">Achievements</h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex gap-2">
                  <span className="text-accent">▸</span>
                  <span>👏 Won 2 iAppreciate peer recognition awards at Infineon.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">▸</span>
                  <span>⭐ Won 2 &quot;We push to go further&quot; and 1 &quot;We Innovate&quot; Applause awards at Western Digital.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">▸</span>
                  <span>🏆 Ranked 2nd in the IEEE Xtreme programming contest for the Madras Section.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">▸</span>
                  <span>🎯 Ranked in the top 4th percentile in HackerRank&apos;s Epic Code global programming contest.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">▸</span>
                  <span>🥇 Won the Idea Presentation Competition at IEEE SPAC Madras Section 2016 hosted at SASTRA.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">▸</span>
                  <span>🥈 Won the Code-Dash competitive programming event conducted by CIT, Coimbatore.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="border-b-4 border-border p-4 sm:p-8 md:p-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-3xl font-black uppercase sm:mb-8 sm:text-4xl md:text-5xl">
            <span className="border-4 border-border bg-accent px-3 py-2 text-accent-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:px-4 sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              Education
            </span>
          </h2>

          <Card className="border-4 border-border p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:p-6 sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-black sm:text-2xl">Bachelor of Engineering (B.E)</h3>
                <p className="text-base font-bold text-primary sm:text-lg">Computer Science & Engineering</p>
                <p className="text-sm text-muted-foreground sm:text-base">Thiagarajar College of Engineering (Anna University)</p>
                <p className="mt-2 text-xs sm:text-sm">8.48 CGPA • IEEE Student Chapter Coordinator</p>
              </div>
              <Badge className="self-start border-2 border-border bg-highlight text-highlight-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:self-auto">
                2013 - 2017
              </Badge>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background-alt p-4 sm:p-8 md:p-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-3xl font-black uppercase sm:mb-8 sm:text-4xl md:text-5xl">
            <span className="border-4 border-border bg-highlight px-3 py-2 text-highlight-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:px-4 sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              Get In Touch
            </span>
          </h2>

          <Card className="border-4 border-border p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:p-6 sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase sm:text-sm">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="border-4 border-border shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase sm:text-sm">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="border-4 border-border shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase sm:text-sm">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="border-4 border-border shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>

              <Button
                type="submit"
                className="w-full border-4 border-border bg-primary text-sm text-primary-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-primary hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:text-base sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                Send Message
              </Button>
            </form>
          </Card>

          <div className="mt-6 text-center sm:mt-8">
            <p className="mb-3 text-xs font-bold uppercase sm:mb-4 sm:text-sm">Or reach me directly at:</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
              <a href="mailto:sudharsan.raman16@gmail.com" className="flex items-center justify-center gap-2 border-2 border-border bg-accent px-3 py-2 text-xs font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] sm:px-4 sm:text-sm sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Mail className="h-4 w-4" />
                <span className="truncate">sudharsan.raman16@gmail.com</span>
              </a>
              <div className="flex items-center justify-center gap-2 border-2 border-border bg-secondary px-3 py-2 text-xs font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:px-4 sm:text-sm sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Phone className="h-4 w-4" />
                (+91) 99656 27627
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-border bg-foreground p-4 text-background sm:p-6 md:p-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-bold sm:text-sm">
            © 2025 Sudharsan Ramakrishnan. Built with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
