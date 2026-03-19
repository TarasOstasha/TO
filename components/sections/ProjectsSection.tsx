"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, sectionReveal, staggerContainer } from "@/lib/motion";
import Image from "next/image";

const projects = [
  {
    title: "Crystal System Cleaning",
    img: "/images/projects/crystal-system-cleaning.png",
    tag: "Business website · Booking system · Full stack",
    description:
      "Developed a full-featured website for a large cleaning company in Manhattan, supporting residential, office, and commercial services. Implemented a custom booking system with real-time availability, secure payments via Stripe, and user authentication. The platform streamlines service scheduling and improves customer experience.",
    tech: [
      "React",
      "Node.js (Express)",
      "MongoDB",
      "Stripe Payments",
      "Google APIs",
      "REST API",
      "Nodemailer",
      "Bootstrap",
      "LESS",
    ],
  },
  {
    title: "Drone Parts USA",
    img: "/images/projects/drone-parts-usa.png",
    tag: "E-commerce platform · Global sales · Product catalog",
    description:
      "Developed a modern e-commerce website for selling drones, drone parts, and FPV accessories worldwide. Built a responsive storefront with product catalog browsing, promotional sections, and a performance-focused user experience using Next.js and React, with SEO improvements to support product visibility and growth.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel KV",
      "Axios",
      "Swiper",
      "Formidable",
    ],
  },
  {
    title: "WakeUp Bellisima",
    img: "/images/projects/wakeup-bellisima.png",
    tag: "Beauty salon website · Booking system · Service platform",
    description:
      "Built a modern website and booking platform for a North NJ-based beauty and massage studio. Designed a clean, calming user experience to highlight services such as professional makeup, massage, and add-ons. Developed an intuitive booking flow to simplify appointment scheduling and enhance customer engagement, helping improve client retention and overall booking efficiency.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "PostCSS",
      "Next.js (API routes)",
      "Vercel Serverless Functions",
      "Resend (Email API)",
      "JavaScript (ES Modules)",
      "Lucide React (Icons)",
      "Google Fonts",
      "Vercel (Hosting)",
      "GitHub",
      "ESLint",
    ],
  },
  {
    title: "Cybersance",
    img: "/images/projects/cybersance.png",
    tag: "Landing page · Marketing website · Custom frontend",
    description:
      "Developed a custom marketing website for a cybersecurity company, focusing on clear service presentation, strong visual identity, and responsive design. Implemented a structured, section-based layout with optimized assets to deliver a fast and engaging user experience across devices.",
    tech: [
      "HTML",
      "CSS",
      "LESS",
      "Bootstrap",
      "JavaScript",
      "Express.js",
      "Gulp",
      "Autoprefixer",
      "BrowserSync",
      "Image Optimization",
    ],
  },
  {
    title: "Order Processing Automation System",
    img: "/images/projects/order-processing-automation-system.png",
    tag: "Internal business system · Workflow automation · Admin platform",
    description:
      "Developed an internal order processing and product reselling system integrated with the Volusion API and existing Volusion workflows. The platform automated product ordering, purchase order generation, and reseller operations, saving hundreds of hours of manual work, reducing order-related issues by 80%, and increasing team productivity by 50%. Built to streamline high-volume operations and improve overall processing accuracy..",
    tech: [
      "React",
      "Redux",
      "Vite",
      "Node.js",
      "Express",
      "REST API",
      "Volusion API",
      "Axios",
      "Formik",
      "Yup",
      "React Router",
      "Bootstrap",
      "Sass",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    title: "Transaction Checker System",
    img: "/images/projects/transaction-checker-system.png",
    tag: "Internal tool · Data validation · Workflow automation",
    description:
      "Developed an internal transaction validation system that compares bank statement records with order data from the Volusion API. Built a workflow to process transaction-related data from Gmail and bank statement files, returning only the specific records needed for review. The tool saves hundreds of hours annually, reduces manual sales effort, and improves business efficiency and accuracy.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Express.js",
      "Axios",
      "Formik",
      "Yup",
      "Sass",
      "Gmail API",
      "Microsoft Graph API",
      "MSAL.js",
      "Volusion API",
      "CSV Processing",
      "Multer",
    ],
  },
  {
    title: "Custom Product Filter Platform",
    img: "/images/projects/custom-product-filter-platform.png",
    tag: "Full stack app · Admin system · Product filtering engine",
    description:
      "Built a custom product filtering platform for large e-commerce catalogs, designed to handle over 50,000 products with fast, high-quality filtering and search experience. Developed both a customer-facing filter interface and an admin panel for managing custom filters, importing and exporting product data via CSV files, and integrating with the Volusion API. The system was designed as a scalable solution with the potential to be integrated into any Volusion-based store.",
    tech: [
      "React",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Sequelize",
      "Volusion API",
      "REST API",
      "CSV Import/Export",
      "XLSX Processing",
      "Authentication (JWT)",
      "Formik",
      "Yup",
      "Axios",
      "React Router",
      "React Slider",
      "Sass",
      "Bootstrap",
      "Multer",
    ],
  },
  {
    title: "Order Workflow & Production Management System",
    img: "/images/projects/order-workflow-and-production-management-system.png",
    tag: "Full stack platform · Internal operations · Multi-admin workflow",
    description:
      "Developed a full-stack order workflow and production management system used to support the complete order lifecycle - from order intake and status updates to production tracking and archival. Built for multi-admin use, the platform manages thousands of tasks and orders while improving team coordination, process visibility, and operational efficiency. Its successful adoption helped strengthen internal workflows and supported the growth of a high-volume reseller business in the U.S.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Sequelize",
      "Redux Toolkit",
      "Material UI",
      "MUI Data Grid",
      "Formik",
      "Yup",
      "Axios",
      "XLSX Processing",
      "Authentication",
      "Sass",
      "Multer",
    ],
  },
  {
    title: "Bulk UPS Reference Tracking System",
    img: "/images/projects/bulk-ups-reference-tracking-system.png",
    tag: "Logistics tool · Real-time tracking · Delivery monitoring",
    description:
      "Built a bulk shipment tracking system integrated into a dropshipping workflow, giving the team real-time visibility into UPS deliveries and helping catch issues before they impact customers. Implemented alert-based monitoring to surface delays and important shipment updates, improving response time, customer communication, and overall order management.",
    tech: [
      "Next.js",
      "React",
      "UPS Tracking Integration",
      "Shipment Monitoring",
      "Alert Workflows",
      "date-fns",
    ],
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.22, 0.61, 0.36, 1] },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    transition: { duration: 0.3 },
  }),
};

export function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (next: number) => {
    const nextIndex = (next + projects.length) % projects.length;
    setDirection(nextIndex > index ? 1 : -1);
    setIndex(nextIndex);
  };

  const project = projects[index];

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionReveal}
      className="relative px-4 py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-stretch">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:w-1/3"
        >
          <motion.div variants={fadeInUp} className="sticky top-28 space-y-4">
            <p className="text-overline text-slate-400">Projects</p>
            <h2 className="font-display text-display-md font-semibold text-slate-50">
              A reel of recent work.
            </h2>
            <p className="text-sm text-slate-400">
              Full stack builds and interactive experiences—replace with your
              own projects and links.
            </p>
            {/* Slider controls: dots */}
            <div className="flex items-center gap-2 pt-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-6 bg-accent shadow-glow-sm"
                      : "w-2 bg-white/20 hover:bg-white/35"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative md:w-2/3"
        >
          <div className="relative rounded-3xl">
            <div className="overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.article
                  key={index}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_32px_120px_rgba(15,23,42,0.95)] backdrop-blur-2xl transition-shadow duration-300 hover:border-accent/20 hover:shadow-glow-border md:p-6"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-80" />
                  <div className="relative flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                        {project.tag}
                      </p>
                      <span className="text-[11px] text-slate-500">
                        0{index + 1} / {projects.length}
                      </span>
                    </div>
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 66vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-50 md:text-xl">
                        {project.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed text-slate-300">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-[11px] text-slate-200">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2 flex gap-3 text-xs">
                      <button className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-semibold uppercase tracking-[0.16em] text-accent transition-shadow hover:shadow-glow-sm">
                        View case study
                      </button>
                      <button className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-200 transition-colors hover:border-white/20 hover:text-white">
                        Visit live site
                      </button>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-3 md:px-4">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous project"
                className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-slate-300 backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent hover:shadow-glow-sm md:h-12 md:w-12"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next project"
                className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-slate-300 backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent hover:shadow-glow-sm md:h-12 md:w-12"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
