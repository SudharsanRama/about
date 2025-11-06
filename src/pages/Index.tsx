import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import profilePhoto from "@/assets/photo.jpg"
import threedyLogo from "@/assets/threedy-logo.jpg"
import infineonLogo from "@/assets/Infineon-Logo.png"
import wdcLogo from "@/assets/Western_Digital_logo.svg"
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
      <section className="border-b-4 border-border bg-background-alt p-8 md:p-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[200px_1fr]">
            <div className="relative">
              <div className="aspect-square w-full border-4 border-border bg-muted shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <img
                  src={profilePhoto}
                  alt="Sudharsan Ramakrishnan"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h1 className="mb-2 text-5xl font-black uppercase tracking-tight md:text-7xl">
                Sudharsan Ramakrishnan
              </h1>
              <p className="mb-6 text-xl font-bold text-primary md:text-2xl">
                Software Engineer @ Threedy
              </p>
              <p className="mb-6 text-lg leading-relaxed">
                Experienced Software Developer & Data Engineer with 8+ years of driving digital transformation through innovative web platforms and data solutions. I specialize in automating business processes and building scalable ETL pipelines that power analytics and reporting across organizations.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:sudharsan.raman16@gmail.com" className="flex items-center gap-2 border-2 border-border bg-accent px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <Mail className="h-4 w-4" />
                  Email
                </a>
                <a href="https://www.linkedin.com/in/sudharsan-ramakrishnan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-border bg-secondary px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <div className="flex items-center gap-2 border-2 border-border bg-highlight px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <MapPin className="h-4 w-4" />
                  Bengaluru, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="border-b-4 border-border p-8 md:p-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-4xl font-black uppercase md:text-5xl">
            <span className="border-4 border-border bg-primary px-4 py-2 text-primary-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              Experience
            </span>
          </h2>

          <div className="space-y-8">
            {/* Threedy */}
            <Card className="border-4 border-border p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-32 flex items-center justify-center text-sm font-bold">
                    <img
                      src={threedyLogo}
                      alt="Threedy GmbH"
                      className="h-full w-full object-contain rounded"
                      width="128"
                      height="64"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">Threedy GmbH</h3>
                    <p className="text-lg font-bold text-primary">Senior Solution Architect</p>
                  </div>
                </div>
                <Badge className="border-2 border-border bg-highlight text-highlight-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  June 2025 - Present
                </Badge>
              </div>
              <p className="text-base">
                Driving pre-sales initiatives across India/Asia at Threedy, a leading provider of industrial 3D visualization software. Helping organizations leverage instant3Dhub to transform their industrial data into responsive, interactive 3D applications across the product lifecycle.
              </p>
            </Card>

            {/* Infineon */}
            <Card className="border-4 border-border p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-32 flex items-center justify-center text-sm font-bold">
                    <img
                      src={infineonLogo}
                      alt="Infineon Technologies"
                      className="h-full w-full object-contain rounded"
                      width="128"
                      height="64"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">Infineon Technologies</h3>
                    <p className="text-lg font-bold text-secondary">Staff Engineer - Data Science</p>
                  </div>
                </div>
                <Badge className="border-2 border-border bg-highlight text-highlight-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Apr 2024 - Jun 2025
                </Badge>
              </div>
              <p className="mb-3 text-base">
                Part of Digital Services & Projects team at ATV Quality Management focusing on digitalization, automation, analytics, data science and engineering activities.
              </p>
              <div className="space-y-2 text-sm">
                <p><span className="font-bold text-accent">Customer Self Service:</span> Developed data-pipeline for quality documents generation achieving 80% product coverage, contributing to 90% of customer quality inquiries resolution.</p>
                <p><span className="font-bold text-accent">ValueStream PRO:</span> Built in-house Value Stream Mapping tool to analyze cost & cycle-time, rolled out company-wide for cost-saving opportunities identification.</p>
              </div>
            </Card>

            {/* Western Digital */}
            <Card className="border-4 border-border p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-32 flex items-center justify-center text-sm font-bold">
                    <img
                      src={wdcLogo}
                      alt="Western Digital"
                      className="h-full w-full object-contain rounded"
                      width="128"
                      height="64"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">Western Digital</h3>
                    <p className="text-lg font-bold text-primary">Analyst 3, Programming</p>
                  </div>
                </div>
                <Badge className="border-2 border-border bg-highlight text-highlight-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Apr 2020 - Apr 2024
                </Badge>
              </div>
              <div className="space-y-2 text-sm">
                <p><span className="font-bold text-accent">DISCOVER+:</span> Built integrated analytics platform combining ModelN pricing and POS data with Salesforce rebate information for revenue optimization and predictive analytics.</p>
                <p><span className="font-bold text-accent">Process Navigator:</span> Designed internal process mining tool for operational process analysis using event logs, featuring automated discovery and visual DFG representation.</p>
                <p><span className="font-bold text-accent">Order Movement Reconciliation:</span> Developed ETL model comparing order attributes between legacy ERP systems in near real-time, streamlining CustomerOps efforts.</p>
              </div>
            </Card>

            {/* Configit */}
            <Card className="border-4 border-border p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-32 flex items-center justify-center text-sm font-bold">
                    <img
                      src={configitLogo}
                      alt="Configit"
                      className="h-full w-full object-contain rounded"
                      width="128"
                      height="64"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">Configit</h3>
                    <p className="text-lg font-bold text-secondary">Software Engineer</p>
                  </div>
                </div>
                <Badge className="border-2 border-border bg-highlight text-highlight-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Jun 2018 - Apr 2020
                </Badge>
              </div>
              <p className="text-base">
                Developed and maintained product configuration software for automotive industry clients. Implemented business rules engines and configuration logic to enable complex product customization workflows.
              </p>
            </Card>

            {/* VOONIK */}
            <Card className="border-4 border-border p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-32 flex items-center justify-center text-sm font-bold">
                    <img
                      src={voonikLogo}
                      alt="Voonik"
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">VOONIK</h3>
                    <p className="text-lg font-bold text-accent">Full Stack Developer</p>
                  </div>
                </div>
                <Badge className="border-2 border-border bg-highlight text-highlight-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Jul 2016 - May 2018
                </Badge>
              </div>
              <p className="text-base">
                Built and scaled e-commerce platform features for fashion marketplace. Developed recommendation systems and personalization algorithms to enhance user shopping experience and drive conversions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills & Achievements Section */}
      <section className="border-b-4 border-border bg-background-alt p-8 md:p-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-4xl font-black uppercase md:text-5xl">
            <span className="border-4 border-border bg-secondary px-4 py-2 text-secondary-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              Skills & Achievements
            </span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-4 border-border p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="mb-4 text-2xl font-black uppercase">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="border-2 border-border bg-primary text-primary-foreground">Solution Architecture</Badge>
                <Badge className="border-2 border-border bg-secondary text-secondary-foreground">TypeScript</Badge>
                <Badge className="border-2 border-border bg-accent text-accent-foreground">Go</Badge>
                <Badge className="border-2 border-border bg-primary text-primary-foreground">Python</Badge>
                <Badge className="border-2 border-border bg-secondary text-secondary-foreground">JavaScript</Badge>
                <Badge className="border-2 border-border bg-accent text-accent-foreground">SQL</Badge>
                <Badge className="border-2 border-border bg-primary text-primary-foreground">Flask</Badge>
                <Badge className="border-2 border-border bg-secondary text-secondary-foreground">FastAPI</Badge>
                <Badge className="border-2 border-border bg-accent text-accent-foreground">React</Badge>
                <Badge className="border-2 border-border bg-primary text-primary-foreground">Vue.js</Badge>
                <Badge className="border-2 border-border bg-secondary text-secondary-foreground">Tailwind CSS</Badge>
                <Badge className="border-2 border-border bg-accent text-accent-foreground">Pandas</Badge>
                <Badge className="border-2 border-border bg-primary text-primary-foreground">SQLAlchemy</Badge>
                <Badge className="border-2 border-border bg-secondary text-secondary-foreground">Docker</Badge>
                <Badge className="border-2 border-border bg-accent text-accent-foreground">Azure</Badge>
                <Badge className="border-2 border-border bg-primary text-primary-foreground">OpenShift</Badge>
                <Badge className="border-2 border-border bg-secondary text-secondary-foreground">Machine Learning</Badge>
                <Badge className="border-2 border-border bg-accent text-accent-foreground">NLP</Badge>
              </div>
            </Card>

            <Card className="border-4 border-border p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="mb-4 text-2xl font-black uppercase">Achievements</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-accent">▸</span>
                  <span>🏆 Second Place (Madras Section) in IEEE Xtreme 8.0</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">▸</span>
                  <span>🥈 Second Place in CodeDash</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">▸</span>
                  <span>🥇 First Place in Idea Presentation Contest - IEEE SPAC Madras 2k16</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">▸</span>
                  <span>🎯 Top 4% in Epic Code (HackerRank Global Programming)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">▸</span>
                  <span>⭐ Applause Award - "We push to go further"</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">▸</span>
                  <span>☕ Oracle Certified Professional, Java SE 6 Programmer</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="border-b-4 border-border p-8 md:p-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-4xl font-black uppercase md:text-5xl">
            <span className="border-4 border-border bg-accent px-4 py-2 text-accent-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              Education
            </span>
          </h2>

          <Card className="border-4 border-border p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black">Bachelor of Engineering (B.E)</h3>
                <p className="text-lg font-bold text-primary">Computer Science & Engineering</p>
                <p className="text-base text-muted-foreground">Thiagarajar College of Engineering</p>
              </div>
              <Badge className="border-2 border-border bg-highlight text-highlight-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                2012 - 2016
              </Badge>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background-alt p-8 md:p-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-4xl font-black uppercase md:text-5xl">
            <span className="border-4 border-border bg-highlight px-4 py-2 text-highlight-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              Get In Touch
            </span>
          </h2>

          <Card className="border-4 border-border p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-bold uppercase">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="border-4 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold uppercase">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="border-4 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-bold uppercase">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="border-4 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>

              <Button
                type="submit"
                className="w-full border-4 border-border bg-primary text-primary-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-primary hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                Send Message
              </Button>
            </form>
          </Card>

          <div className="mt-8 text-center">
            <p className="mb-4 text-sm font-bold uppercase">Or reach me directly at:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:sudharsan.raman16@gmail.com" className="flex items-center gap-2 border-2 border-border bg-accent px-4 py-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Mail className="h-4 w-4" />
                sudharsan.raman16@gmail.com
              </a>
              <div className="flex items-center gap-2 border-2 border-border bg-secondary px-4 py-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Phone className="h-4 w-4" />
                +91 9965627627
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-border bg-foreground p-8 text-background">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold">
            © 2025 Sudharsan Ramakrishnan. Built with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
