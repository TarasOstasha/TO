"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, sectionReveal, staggerContainer } from "@/lib/motion";
import { CaseStudyModal, type CaseStudyData } from "@/components/ui/CaseStudyModal";
import Image from "next/image";

type Project = {
  title: string;
  img: string;
  tag: string;
  description: string;
  tech: string[];
  caseStudy?: CaseStudyData;
};

const projects: Project[] = [
  {
    title: "Crystal System Cleaning",
    img: "/images/projects/crystal-system-cleaning.jpg",
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
    caseStudy: {
      title: "Crystal System Cleaning",
      overview:
        "Full-stack booking platform for a commercial cleaning company allowing real-time scheduling and payments.",
      problem:
        "Client needed a centralized booking and scheduling system to replace manual coordination.",
      solution:
        "Built a full-stack system with real-time availability and secure payment integration.",
      technicalImplementation: [
        "REST API for bookings",
        "Real-time scheduling logic",
        "Stripe integration",
        "Authentication (JWT)",
        "Responsive UI",
      ],
      challenges:
        "Preventing booking conflicts, syncing frontend with backend, and integrating payments reliably.",
      results:
        "Simplified booking workflow, reduced manual work, and improved user experience.",
    },
  },
  {
    title: "Drone Parts USA",
    img: "/images/projects/drone-parts-usa.jpg",
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
    caseStudy: {
      title: "Next Drone Shop",
      overview:
        "Full-stack e-commerce platform for selling drone parts and FPV accessories, built with Next.js and designed for performance, scalability, and real-world sales workflows.",
      problem:
        "The project required a modern online store that could handle product presentation, secure checkout, and external marketplace integration while keeping the shopping experience fast and clean.",
      solution:
        "Built a production-ready storefront with category-based product browsing, Snipcart-powered checkout, and eBay API integration to support external sales workflows and product synchronization.",
      technicalImplementation: [
        "Next.js storefront with dynamic product and category pages",
        "Snipcart integration for cart and secure checkout",
        "eBay API integration for marketplace connectivity",
        "Custom API routes for external service handling",
        "Tailwind CSS responsive UI",
        "Vercel deployment and hosting",
      ],
      challenges:
        "Coordinating third-party integrations, keeping product data consistent across systems, and maintaining a smooth storefront experience while working with external APIs.",
      results:
        "Delivered a scalable drone-parts e-commerce platform with modern UX, secure purchasing flow, and expanded business capability through marketplace integration.",
    },
  },
  {
    title: "WakeUp Bellisima",
    img: "/images/projects/wakeup-bellisima.jpg",
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
    caseStudy: {
      title: "WakeUp Bellisima Platform",
      overview:
        "Full-stack platform for a beauty and massage studio, including a public-facing React website and an Express-based admin panel for managing bookings, content, and business operations.",
      problem:
        "The business needed both a modern client-facing website for bookings and an internal system to manage appointments, content, and customer workflows instead of manual coordination.",
      solution:
        "Developed a complete full-stack solution with a responsive React frontend for customers and a secure Express admin panel for internal management, enabling streamlined booking and business operations.",
      technicalImplementation: [
        "React frontend for services, booking flow, and UI",
        "Express backend for API and admin panel",
        "MongoDB + Mongoose for data storage",
        "Authentication with Passport and JWT",
        "File uploads with Multer",
        "Email notifications with Nodemailer",
        "Session and cookie management",
        "HTTPS and domain enforcement for production",
      ],
      challenges:
        "Synchronizing frontend and backend data flow, securing admin access, handling booking logic reliably, and maintaining a smooth user experience across both client and admin systems.",
      results:
        "Delivered a complete digital platform that improved customer booking experience, reduced manual work for staff, and provided scalable tools for managing the business.",
    },
  },
  {
    title: "Cybersance",
    img: "/images/projects/cybersance.jpg",
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
    caseStudy: {
      title: "Cybersance AI Platform",
      overview:
        "Concept-driven web platform showcasing AI-powered solutions and digital services, built with a custom frontend and optimized asset pipeline using Gulp.",
      problem:
        "The goal was to create a visually engaging platform to present AI-driven services and concepts in a structured, modern way while keeping performance optimized despite heavy visuals.",
      solution:
        "Developed a custom website using Bootstrap and a Gulp-based build pipeline to manage assets, optimize images, and streamline development workflow for better performance and maintainability.",
      technicalImplementation: [
        "Bootstrap-based responsive UI",
        "Express server setup",
        "Gulp build pipeline for asset management",
        "Image optimization with imagemin + pngquant",
        "CSS processing with LESS and autoprefixer",
        "JavaScript minification and bundling",
        "Live reload with BrowserSync",
      ],
      challenges:
        "Optimizing performance for image-heavy content, maintaining fast load times, and setting up a flexible build pipeline for scalable frontend development.",
      results:
        "Delivered a visually rich and optimized platform capable of presenting complex AI concepts while maintaining smooth performance and efficient asset handling.",
    },
  },
  {
    title: "Order Processing Automation System",
    img: "/images/projects/order-processing-automation-system.jpg",
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
    caseStudy: {
      title: "Order Processing Automation System",
      overview:
        "Full-stack internal business system for automating order processing, vendor communication, and reseller workflows, built to handle high-volume operations and reduce manual work.",
      problem:
        "The business relied on manual order processing, vendor coordination, and fragmented data handling, which created inefficiencies, errors, and time-consuming workflows.",
      solution:
        "Developed a complete automation platform with a React frontend and Node.js backend that integrates with the Volusion API and other external systems to process orders, generate purchase workflows, and centralize reseller operations in one interface.",
      technicalImplementation: [
        "React + Redux frontend for admin workflows",
        "Node.js + Express backend with REST API",
        "PostgreSQL + Sequelize for data management",
        "Volusion API integration for order and product data retrieval",
        "Dockerized development and deployment workflow",
        "Excel/CSV processing with ExcelJS and XLSX",
        "Email automation via Nodemailer",
        "FTP integration using basic-ftp",
        "Outlook email parsing via node-outlook",
        "XML processing for external integrations",
        "Formik + Yup for form handling and validation",
      ],
      challenges:
        "Handling complex business logic, synchronizing data from the Volusion API and other external sources, processing large datasets, and ensuring reliability across automated order workflows.",
      results:
        "Reduced manual processing time by over 80%, minimized human errors, and enabled the team to handle significantly higher order volume without increasing operational overhead.",
    },
  },
  {
    title: "Transaction Checker System",
    img: "/images/projects/transaction-checker-system.jpg",
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
    caseStudy: {
      title: "Transaction Checker System",
      overview:
        "Internal data validation and automation tool that compares bank transactions with order data to identify discrepancies and streamline financial workflows.",
      problem:
        "Manual reconciliation of bank statements and order data was time-consuming, error-prone, and inefficient, especially with large volumes of transactions.",
      solution:
        "Built a full-stack system that processes CSV files, integrates with email providers, and automatically compares transaction data against order records, returning only relevant mismatches for review.",
      technicalImplementation: [
        "React + TypeScript frontend (Vite) for file upload and UI",
        "Node.js + Express backend (v5) for processing logic",
        "CSV parsing and data validation pipeline",
        "Google Gmail API integration for email data extraction",
        "Microsoft Graph API integration for Outlook emails",
        "Authentication via MSAL (Microsoft)",
        "File handling with Multer",
        "REST API for frontend-backend communication",
        "Dockerized environment for deployment and consistency",
      ],
      challenges:
        "Handling multiple email providers (Gmail and Outlook), parsing and normalizing transaction data from different sources, processing large CSV datasets, and ensuring accurate matching logic.",
      results:
        "Automated transaction reconciliation, reduced manual validation time, improved accuracy, and enabled faster detection of financial discrepancies across multiple data sources.",
    },
  },
  {
    title: "Custom Product Filter Platform",
    img: "/images/projects/custom-product-filter-platform.jpg",
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
    caseStudy: {
      title: "Custom Product Filter Platform",
      overview:
        "High-performance full-stack filtering engine designed for large-scale e-commerce catalogs, supporting advanced filtering logic, fast search, and dynamic data management.",
      problem:
        "Standard e-commerce filtering systems could not efficiently handle large product catalogs (50,000+ items) with complex filter combinations, leading to slow performance and poor user experience.",
      solution:
        "Built a custom filtering platform with a React frontend and Node.js backend, integrating with the Volusion API to sync product data and enable fast, dynamic filtering with complex query support and admin-controlled filter management.",
      technicalImplementation: [
        "React + TypeScript frontend with dynamic filter UI",
        "Node.js + Express backend with REST API",
        "PostgreSQL + Sequelize for scalable data handling",
        "Custom SQL-based filtering engine with strict AND matching across multiple joins",
        "Volusion API integration for product and catalog synchronization",
        "Dynamic query builder for complex filter combinations",
        "CSV/XLSX import and export for product data",
        "Authentication with JWT",
        "File uploads with Multer",
        "Debounced filtering and UI performance optimization",
      ],
      challenges:
        "Handling complex filtering logic across large datasets, syncing external product data from the Volusion API, optimizing query performance, and maintaining fast, responsive UI updates.",
      results:
        "Delivered a scalable filtering engine capable of handling large catalogs with high performance, improving search accuracy, user experience, and enabling seamless integration with an existing e-commerce platform.",
    },
  },
  {
    title: "Order Workflow & Production Management System",
    img: "/images/projects/order-workflow-and-production-management-system.jpg",
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
    caseStudy: {
      title: "Order Workflow & Production Management System",
      overview:
        "Full-stack internal operations platform built to manage the complete order lifecycle, from intake and status tracking to production coordination and archival, with support for multi-admin workflows.",
      problem:
        "The business needed a centralized system to manage large volumes of orders, production tasks, and team coordination, replacing fragmented manual processes and improving visibility across operations.",
      solution:
        "Developed a full-stack management platform with a React frontend and Node.js backend that supports order tracking, task management, status updates, and multi-admin collaboration in one unified interface.",
      technicalImplementation: [
        "React + TypeScript frontend with Vite",
        "Material UI + MUI Data Grid for operational dashboards",
        "Redux Toolkit for application state management",
        "Node.js + Express backend with REST API",
        "PostgreSQL + Sequelize for structured data management",
        "Multi-admin workflow support",
        "Task and order status tracking system",
        "Date handling with Day.js and date-fns",
        "XLSX processing for operational data workflows",
        "Authentication and validation with Formik + Yup",
        "File uploads with Multer",
      ],
      challenges:
        "Designing a scalable workflow system for high-volume internal operations, managing complex order states, supporting multiple admins simultaneously, and keeping the interface efficient for daily operational use.",
      results:
        "Improved team coordination, increased visibility into production and order workflows, and provided a scalable internal platform for managing thousands of operational tasks more efficiently.",
    },
  },
  {
    title: "Bulk UPS Reference Tracking System",
    img: "/images/projects/bulk-ups-reference-tracking-system.jpg",
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
    caseStudy: {
      title: "Bulk UPS Reference Tracking System",
      overview:
        "Real-time logistics monitoring tool built to track bulk UPS shipments inside a dropshipping workflow, giving the team immediate visibility into delivery status and helping prevent customer-facing delivery issues.",
      problem:
        "The business lacked a centralized way to monitor large volumes of UPS shipments, making it difficult to catch delays early and respond before they affected customers.",
      solution:
        "Built a lightweight real-time tracking system that processes multiple shipment references, surfaces delivery status clearly on a live office display, and helps the team detect delays and problematic shipments before they escalate.",
      technicalImplementation: [
        "Next.js application for fast internal dashboard delivery",
        "React-based tracking interface for bulk shipment visibility",
        "UPS tracking workflow integration",
        "Real-time shipment status monitoring",
        "Alert-oriented UI for delay detection and follow-up",
        "Date handling with date-fns",
        "Designed for always-on office screen usage",
      ],
      challenges:
        "Handling large batches of tracking references efficiently, presenting shipment updates clearly for operational teams, and making the interface reliable enough for constant live office monitoring.",
      results:
        "Reduced delivery-related issues by 99%, improved response time to shipment problems, and became an active live operational tool used daily on office screens.",
    },
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
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudyData | null>(
    null
  );

  const goTo = (next: number) => {
    const nextIndex = (next + projects.length) % projects.length;
    setDirection(nextIndex > index ? 1 : -1);
    setIndex(nextIndex);
  };

  const project = projects[index];
  const projectCaseStudy = useMemo<CaseStudyData>(() => {
    if (project.caseStudy) return project.caseStudy;
    return {
      title: project.title,
      overview: project.description,
      problem:
        "The client needed a scalable, maintainable product that improves workflows and user experience.",
      solution:
        "Delivered a modern full-stack solution with a clear information architecture and reliable feature delivery.",
      technicalImplementation: project.tech.slice(0, 5),
      challenges:
        "Balancing performance, data flow complexity, and production readiness within project constraints.",
      results:
        "Improved operational efficiency and a smoother experience for end users and stakeholders.",
    };
  }, [project]);

  return (
    <>
      <CaseStudyModal
        isOpen={activeCaseStudy !== null}
        caseStudy={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
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
                      <button
                        type="button"
                        onClick={() => setActiveCaseStudy(projectCaseStudy)}
                        className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-semibold uppercase tracking-[0.16em] text-accent transition-shadow hover:shadow-glow-sm"
                      >
                        View case study
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
    </>
  );
}
