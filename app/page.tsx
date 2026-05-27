"use client";

import { useState } from "react";

const content = {
  el: {
    navServices: "Υπηρεσίες",
    navProjects: "Έργα",
    navApproach: "Προσέγγιση",
    navTechnology: "Τεχνολογίες",
    navContact: "Επικοινωνία",
    cta: "Μιλήστε μαζί μας",
    badge: "Software · Cloud · Digital Marketing",
    heroTitle: "Τεχνολογία και marketing που κάνουν την επιχείρησή σας να λειτουργεί καλύτερα.",
    heroText:
      "Η Mass Data αναπτύσσει custom λογισμικό, cloud υποδομές, αυτοματισμούς και digital marketing ενέργειες που συνδέουν τα συστήματά σας, ενισχύουν την online παρουσία σας και δίνουν στα δεδομένα σας πραγματική αξία.",
    primaryButton: "Ξεκινήστε ένα έργο",
    secondaryButton: "Δείτε τις υπηρεσίες",

    platform: "Mass Data Platform",
    online: "Online",
    automation: "Automation",
    automationText: "Μείωση χειροκίνητων διαδικασιών",
    integrations: "Integrations",
    integrationsText: "Σύνδεση ERP, CRM, e-shop και APIs",
    cloud: "Digital Growth",
    cloudText: "Τεχνολογία, δεδομένα και marketing σε ένα ενιαίο πλάνο",

    servicesLabel: "Υπηρεσίες",
    servicesTitle:
      "Ολοκληρωμένες ψηφιακές λύσεις για επιχειρήσεις που θέλουν ανάπτυξη.",
    servicesText:
      "Από custom εφαρμογές και cloud υποδομές μέχρι SEO, social media και content, δημιουργούμε λύσεις που συνδέουν τεχνολογία, δεδομένα και marketing.",

    projectsLabel: "Έργα",
    projectsTitle: "Ενδεικτικά έργα που έχουμε δημιουργήσει.",
    projectsText:
      "Παρουσιάζουμε επιλεγμένα projects σε μορφή preview, χωρίς δημόσια πρόσβαση στα εσωτερικά συστήματα ή στα δεδομένα τους.",
    medicalTitle: "MASS DATA Medical Suite",
    medicalCategory: "Medical Software · Private Platform",
    medicalText:
      "Custom εφαρμογή για γιατρούς και ιατρεία, σχεδιασμένη για πιο οργανωμένη διαχείριση καθημερινών διαδικασιών, πληροφοριών και λειτουργιών.",
    medicalNote:
      "Το project παρουσιάζεται μόνο ως εικόνα preview. Δεν παρέχεται δημόσια πρόσβαση στην πλατφόρμα.",

    approachLabel: "Προσέγγιση",
    approachTitle: "Από την ιδέα στην υλοποίηση, με καθαρό πλάνο.",
    approachText:
      "Δεν ξεκινάμε από τον κώδικα ή τη διαφήμιση. Ξεκινάμε από τον στόχο που πρέπει να πετύχει η επιχείρησή σας.",

    technologyLabel: "Τεχνολογίες & Κανάλια",
    technologyTitle: "Σύγχρονα εργαλεία για σταθερές και επεκτάσιμες λύσεις.",
    technologyText:
      "Επιλέγουμε τεχνολογίες και κανάλια με βάση την αξιοπιστία, την απόδοση και τις ανάγκες κάθε έργου.",

    contactLabel: "Επικοινωνία",
    contactTitle: "Έχετε ένα έργο που θέλετε να συζητήσουμε;",
    contactText:
      "Στείλτε μας λίγες πληροφορίες για την επιχείρησή σας και την ιδέα σας. Θα επικοινωνήσουμε μαζί σας για να δούμε πώς μπορούμε να βοηθήσουμε.",

    namePlaceholder: "Ονοματεπώνυμο",
    emailPlaceholder: "Email",
    companyPlaceholder: "Εταιρεία",
    messagePlaceholder: "Τι θέλετε να δημιουργήσουμε;",
    submit: "Αποστολή μηνύματος",

    footer: "All rights reserved.",
    emailLabel: "Email",
    headquartersLabel: "Έδρα",
    address: "9ο χλμ. Θεσσαλονίκης - Θέρμης (Τεχνόπολις), Τ.Κ. 55510, Θεσσαλονίκη",

    services: [
      {
        title: "Custom Software",
        text: "Αναπτύσσουμε web εφαρμογές, portals και εσωτερικά εργαλεία προσαρμοσμένα στις ανάγκες της επιχείρησής σας.",
      },
      {
        title: "Cloud Infrastructure",
        text: "Σχεδιάζουμε γρήγορες, ασφαλείς και αξιόπιστες cloud υποδομές για επιχειρήσεις που θέλουν σταθερότητα.",
      },
      {
        title: "System Integrations",
        text: "Συνδέουμε ERP, CRM, e-shop, APIs και εσωτερικά συστήματα ώστε τα δεδομένα σας να λειτουργούν ενιαία.",
      },
      {
        title: "Data & Automation",
        text: "Δημιουργούμε αυτοματισμούς, reports και dashboards που μειώνουν τη χειροκίνητη εργασία.",
      },
      {
        title: "Digital Marketing",
        text: "Σχεδιάζουμε και υλοποιούμε digital marketing ενέργειες που ενισχύουν την online παρουσία, την επισκεψιμότητα και τις πωλήσεις.",
      },
      {
        title: "Content Strategy",
        text: "Χτίζουμε στρατηγική περιεχομένου με θεματολογία, στόχους και πλάνο δημοσιεύσεων για σταθερή ανάπτυξη.",
      },
      {
        title: "Email Marketing Campaigns",
        text: "Σχεδιάζουμε email campaigns και newsletters που ενημερώνουν, ενεργοποιούν το κοινό σας και αυξάνουν τις μετατροπές.",
      },
      {
        title: "Social Media Management",
        text: "Διαχειριζόμαστε την παρουσία σας στα social media με στρατηγικό περιεχόμενο, συνέπεια και καθαρή εικόνα brand.",
      },
      {
        title: "Social Media Ads",
        text: "Δημιουργούμε στοχευμένες διαφημιστικές καμπάνιες σε social media για μεγαλύτερη προβολή, leads και πωλήσεις.",
      },
      {
        title: "Content Creation",
        text: "Δημιουργούμε κείμενα, visual concepts και περιεχόμενο για social media, websites, newsletters και digital καμπάνιες.",
      },
      {
        title: "SEO",
        text: "Βελτιστοποιούμε το website σας για καλύτερη οργανική κατάταξη, περισσότερη επισκεψιμότητα και ποιοτικότερα leads.",
      },
    ],

    steps: [
      {
        number: "01",
        title: "Ανάλυση",
        text: "Καταγράφουμε τις ανάγκες, τους στόχους και τα υπάρχοντα συστήματά σας.",
      },
      {
        number: "02",
        title: "Στρατηγική",
        text: "Δημιουργούμε τεχνικό και marketing πλάνο με ξεκάθαρη κατεύθυνση.",
      },
      {
        number: "03",
        title: "Υλοποίηση",
        text: "Αναπτύσσουμε λύσεις, περιεχόμενο, καμπάνιες και αυτοματισμούς με συνέπεια.",
      },
      {
        number: "04",
        title: "Βελτιστοποίηση",
        text: "Παρακολουθούμε την απόδοση, αναλύουμε τα δεδομένα και βελτιώνουμε συνεχώς.",
      },
    ],
  },

  en: {
    navServices: "Services",
    navProjects: "Projects",
    navApproach: "Approach",
    navTechnology: "Technologies",
    navContact: "Contact",
    cta: "Talk to us",
    badge: "Software · Cloud · Digital Marketing",
    heroTitle: "Technology and marketing that help your business work better.",
    heroText:
      "Mass Data develops custom software, cloud infrastructure, automations and digital marketing actions that connect your systems, strengthen your online presence and turn your data into real business value.",
    primaryButton: "Start a project",
    secondaryButton: "View services",

    platform: "Mass Data Platform",
    online: "Online",
    automation: "Automation",
    automationText: "Reducing manual business processes",
    integrations: "Integrations",
    integrationsText: "Connecting ERP, CRM, e-commerce and APIs",
    cloud: "Digital Growth",
    cloudText: "Technology, data and marketing in one clear plan",

    servicesLabel: "Services",
    servicesTitle:
      "Complete digital solutions for businesses that want to grow.",
    servicesText:
      "From custom applications and cloud infrastructure to SEO, social media and content, we build solutions that connect technology, data and marketing.",

    projectsLabel: "Projects",
    projectsTitle: "Selected projects we have created.",
    projectsText:
      "We present selected projects as previews only, without public access to internal systems or private data.",
    medicalTitle: "MASS DATA Medical Suite",
    medicalCategory: "Medical Software · Private Platform",
    medicalText:
      "A custom application for doctors and medical practices, designed to support better organization of daily processes, information and operations.",
    medicalNote:
      "This project is shown only as an image preview. Public access to the platform is not provided.",

    approachLabel: "Approach",
    approachTitle: "From idea to implementation, with a clear plan.",
    approachText:
      "We do not start with code or advertising. We start with the goal your business needs to achieve.",

    technologyLabel: "Technologies & Channels",
    technologyTitle: "Modern tools for stable and scalable solutions.",
    technologyText:
      "We choose technologies and channels based on reliability, performance and the needs of each project.",

    contactLabel: "Contact",
    contactTitle: "Have a project you would like to discuss?",
    contactText:
      "Send us a few details about your business and your idea. We will get back to you to see how we can help.",

    namePlaceholder: "Full name",
    emailPlaceholder: "Email",
    companyPlaceholder: "Company",
    messagePlaceholder: "What would you like us to build?",
    submit: "Send message",

    footer: "All rights reserved.",
    emailLabel: "Email",
    headquartersLabel: "Headquarters",
    address: "9th km Thessaloniki - Thermi Road (Technopolis), P.C. 55510, Thessaloniki",

    services: [
      {
        title: "Custom Software",
        text: "We develop web applications, portals and internal tools tailored to your business needs.",
      },
      {
        title: "Cloud Infrastructure",
        text: "We design fast, secure and reliable cloud infrastructure for businesses that need stability.",
      },
      {
        title: "System Integrations",
        text: "We connect ERP, CRM, e-commerce platforms, APIs and internal systems so your data works as one.",
      },
      {
        title: "Data & Automation",
        text: "We create automations, reports and dashboards that reduce manual work.",
      },
      {
        title: "Digital Marketing",
        text: "We plan and execute digital marketing actions that strengthen your online presence, traffic and sales.",
      },
      {
        title: "Content Strategy",
        text: "We build a content strategy with topics, goals and a publishing plan for steady growth.",
      },
      {
        title: "Email Marketing Campaigns",
        text: "We design email campaigns and newsletters that inform, activate your audience and increase conversions.",
      },
      {
        title: "Social Media Management",
        text: "We manage your social media presence with strategic content, consistency and a clear brand image.",
      },
      {
        title: "Social Media Ads",
        text: "We create targeted social media advertising campaigns for higher visibility, leads and sales.",
      },
      {
        title: "Content Creation",
        text: "We create copy, visual concepts and content for social media, websites, newsletters and digital campaigns.",
      },
      {
        title: "SEO",
        text: "We optimize your website for stronger organic rankings, more traffic and higher-quality leads.",
      },
    ],

    steps: [
      {
        number: "01",
        title: "Discovery",
        text: "We map your needs, goals and existing systems.",
      },
      {
        number: "02",
        title: "Strategy",
        text: "We create a technical and marketing plan with a clear direction.",
      },
      {
        number: "03",
        title: "Execution",
        text: "We build solutions, content, campaigns and automations with consistency.",
      },
      {
        number: "04",
        title: "Optimization",
        text: "We track performance, analyze data and continuously improve.",
      },
    ],
  },
};

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "APIs",
  "Cloud",
  "SEO",
  "Meta Ads",
  "Email Marketing",
  "Social Media",
  "Dashboards",
];

export default function Home() {
  const [language, setLanguage] = useState<"el" | "en">("el");
  const t = content[language];

  return (
    <main
      className="min-h-screen bg-slate-50 text-slate-950"
      style={{ fontFamily: "Verdana, sans-serif" }}
    >
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="flex items-center">
            <img
              src="/mass-data-logo.png"
              alt="Mass Data"
              className="h-16 w-auto"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#services" className="hover:text-[#137DC5]">
              {t.navServices}
            </a>
            <a href="#projects" className="hover:text-[#137DC5]">
              {t.navProjects}
            </a>
            <a href="#approach" className="hover:text-[#137DC5]">
              {t.navApproach}
            </a>
            <a href="#technology" className="hover:text-[#137DC5]">
              {t.navTechnology}
            </a>
            <a href="#contact" className="hover:text-[#137DC5]">
              {t.navContact}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLanguage(language === "el" ? "en" : "el")}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[#137DC5] hover:text-[#137DC5]"
            >
              {language === "el" ? "EN" : "EL"}
            </button>

            <a
              href="#contact"
              className="rounded-full bg-[#137DC5] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0F6EAE]"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#137DC5]">
              {t.badge}
            </p>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              {t.heroTitle}
            </h1>

            <p className="mb-8 text-lg leading-8 text-slate-600">
              {t.heroText}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-[#137DC5] px-7 py-3 font-semibold text-white shadow-lg shadow-blue-700/20 hover:bg-[#0F6EAE]"
              >
                {t.primaryButton}
              </a>

              <a
                href="#services"
                className="rounded-full border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-800 hover:border-[#137DC5] hover:text-[#137DC5]"
              >
                {t.secondaryButton}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-blue-100 blur-3xl"></div>

            <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl">
              <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
                <div className="mb-8 flex items-center justify-between">
                  <p className="text-sm font-semibold text-blue-300">
                    {t.platform}
                  </p>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    {t.online}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="mb-1 text-sm text-slate-300">
                      {t.automation}
                    </p>
                    <p className="font-semibold">{t.automationText}</p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="mb-1 text-sm text-slate-300">
                      {t.integrations}
                    </p>
                    <p className="font-semibold">{t.integrationsText}</p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="mb-1 text-sm text-slate-300">{t.cloud}</p>
                    <p className="font-semibold">{t.cloudText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="services" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#137DC5]">
              {t.servicesLabel}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-slate-950 md:text-4xl">
              {t.servicesTitle}
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              {t.servicesText}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <h3 className="mb-3 text-xl font-bold text-slate-950">
                  {service.title}
                </h3>
                <p className="text-sm leading-7 text-slate-600">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#137DC5]">
              {t.projectsLabel}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-slate-950 md:text-4xl">
              {t.projectsTitle}
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              {t.projectsText}
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="bg-slate-100 p-4 md:p-6">
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                  <img
                    src="/medical-suite-preview.png"
                    alt="MASS DATA Medical Suite preview"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="mb-4 inline-flex w-fit rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#137DC5]">
                  {t.medicalCategory}
                </p>

                <h3 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                  {t.medicalTitle}
                </h3>

                <p className="mb-6 text-lg leading-8 text-slate-600">
                  {t.medicalText}
                </p>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm leading-7 text-slate-500">
                    {t.medicalNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="approach" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#137DC5]">
              {t.approachLabel}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-slate-950 md:text-4xl">
              {t.approachTitle}
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              {t.approachText}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {t.steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >
                <p className="mb-5 text-sm font-bold text-[#137DC5]">
                  {step.number}
                </p>
                <h3 className="mb-3 text-xl font-bold text-slate-950">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-300">
              {t.technologyLabel}
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {t.technologyTitle}
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              {t.technologyText}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-slate-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#137DC5]">
              {t.contactLabel}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-slate-950 md:text-4xl">
              {t.contactTitle}
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              {t.contactText}
            </p>
          </div>

          <form
            action="mailto:massdatapc@gmail.com"
            method="post"
            encType="text/plain"
            className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
          >
            <div className="grid gap-5">
              <input
                name="name"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-[#137DC5]"
                placeholder={t.namePlaceholder}
              />
              <input
                name="email"
                type="email"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-[#137DC5]"
                placeholder={t.emailPlaceholder}
              />
              <input
                name="company"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-[#137DC5]"
                placeholder={t.companyPlaceholder}
              />
              <textarea
                name="message"
                className="min-h-36 rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-[#137DC5]"
                placeholder={t.messagePlaceholder}
              />
              <button
                type="submit"
                className="rounded-full bg-[#137DC5] px-7 py-3 font-semibold text-white hover:bg-[#0F6EAE]"
              >
                {t.submit}
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3 md:items-start">
          <div>
            <img
              src="/mass-data-logo.png"
              alt="Mass Data"
              className="h-12 w-auto"
            />
            <p className="mt-4 text-sm text-slate-500">
              © {new Date().getFullYear()} Mass Data. {t.footer}
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#137DC5]">
              {t.emailLabel}
            </p>
            <a
              href="mailto:massdatapc@gmail.com"
              className="text-sm text-slate-600 hover:text-[#137DC5]"
            >
              massdatapc@gmail.com
            </a>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#137DC5]">
              {t.headquartersLabel}
            </p>
            <p className="text-sm leading-7 text-slate-600">{t.address}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}