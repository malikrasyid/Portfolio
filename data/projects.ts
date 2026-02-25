export type ProjectStatus = 
"Live" | 
"In Progress" | 
"Concept" | 
"Beta" |
"Closed Beta" |
"Source Code" |
"Development";

export type orientationType = "landscape" | "portrait";

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  images?: string[];
  href?: string;
  liveUrl?: string;
  orientation?: orientationType;
}

export const frontendProjects: ProjectData[] = [
  {
    title: "SiKartu Kejati Sumbar",
    description: "A specialized administrative system developed for the High Prosecutor's Office of West Sumatra. Streamlines internal data management with a focus on security, accuracy, and efficient workflow tracking.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Data Management"],
    status: "Live",
    href: "https://github.com/malikrasyid/sikartu",
    liveUrl: "https://sikartu-kejati-sumbar.vercel.app/",
    images: [
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281614/1_fdofyt.png", 
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281615/2_s6px0l.png",
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281615/3_gzmyjl.png",
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281616/4_en5ont.png",
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281617/5_ae4ugo.png",
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281621/6_qdceka.png",
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281619/7_yvhk1m.png",
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281618/8_umu8qb.png",
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281620/9_l7iaby.png"
    ],
    orientation: "landscape"
  },
  {
    title: "Sewing Management System",
    description: "An enterprise-grade production tracking system designed to manage garment manufacturing workflows. Built with a focus on resource efficiency and real-time status updates.",
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    status: "Source Code", 
    href: "https://github.com/malikrasyid/sewing-management-system", 
    images: [
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1771913590/1_xavdjd.png",
       "https://res.cloudinary.com/dxdgpncgq/image/upload/v1771913589/2_xj6wt6.png",
       "https://res.cloudinary.com/dxdgpncgq/image/upload/v1771913590/3_a3entl.png",
       "https://res.cloudinary.com/dxdgpncgq/image/upload/v1771913590/4_qgvtnv.png",
       "https://res.cloudinary.com/dxdgpncgq/image/upload/v1771913590/5_evsowo.png",
       "https://res.cloudinary.com/dxdgpncgq/image/upload/v1771913590/6_mn3gh0.png",
       "https://res.cloudinary.com/dxdgpncgq/image/upload/v1771913589/7_pebsld.png",
       "https://res.cloudinary.com/dxdgpncgq/image/upload/v1771913590/8_oqs2ty.png",
       "https://res.cloudinary.com/dxdgpncgq/image/upload/v1771913590/9_smqour.png",
       "https://res.cloudinary.com/dxdgpncgq/image/upload/v1771913591/10_bczsl4.png",
       "https://res.cloudinary.com/dxdgpncgq/image/upload/v1771913591/11_ly4dbj.png"
    ],
    orientation: "landscape"
  },
  {
    title: "Nexus Social",
    description: "A high-performance real-time social networking application. Features instant messaging and notification systems powered by a distributed architecture.",
    tags: ["React Native", "NestJS", "Socket.io", "RabbitMQ"],
    status: "Development",
    href: "https://github.com/malikrasyid/NexusSocial",
    images: [
       "https://placehold.co/720x1520/f4f4f5/a1a1aa?text=Mobile+App+WIP"
    ],
    orientation: "portrait" 
  },
  {
    title: "NexusERP",
    description: "A modern, multi-tenant Enterprise Resource Planning system designed for scalability. Focuses on modular architecture to manage complex business processes, financial data, and organizational resources in one unified platform.",
    tags: ["Vue", "TypeScript", "Tailwind CSS", "Enterprise UI"],
    status: "In Progress",
    // href: "#",
    // liveUrl: "#",
    images: [
      "https://placehold.co/1280x720/f4f4f5/a1a1aa?text=Project+Is+Still+In+Progress"
    ],
    orientation: "landscape"
  },
  {
    title: "JobTracker Web",
    description: "A high-performance job application management tool. Features an interactive Kanban board for visual progress tracking and detailed analytics to optimize the career search workflow.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    status: "Live",
    href: "https://github.com/malikrasyid/JobTracker",
    liveUrl: "https://job-tracker-dun-kappa.vercel.app",
    images: [
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281589/1_qhdiow.png", 
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281590/2_d6ghet.png",
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281591/3_ydzboc.png",
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281591/4_tua5jz.png",
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281592/5_arfb6t.png"
    ],
    orientation: "landscape"
  },
  {
    title: "Task Sphere",
    description: "A real-time collaborative project management platform. Inspired by agile methodologies, it enables teams to manage workspaces and tasks seamlessly with instant synchronization.",
    tags: ["Vue", "Pinia", "Tailwind CSS", "WebSockets"],
    status: "Live",
    href: "https://github.com/malikrasyid/Task-Sphere_Website",
    liveUrl: "https://task-sphere-website.vercel.app",
    images: [
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281603/1_iegkvy.png",
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281603/2_r9vtlm.png",
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281604/3_gjpjgf.png",
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281604/4_usx2xq.png",
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281606/5_fymkx5.png",
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281607/6_n9q0oq.png",
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281607/7_jqvvkv.png",
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281608/8_ipcwkf.png",
      "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281609/9_uzupqt.png",
    ], 
    orientation: "landscape"
  },
  {
    title: "SubsTracker",
    description: "A cross-platform mobile application dedicated to managing personal finances. Provides automated reminders and insightful spending analysis to help users control their monthly subscription expenses.",
    tags: [".NET MAUI", "C#", "XAML", "Mobile Development"],
    status: "In Progress",
    href: "https://github.com/malikrasyid/SubsTracker",
    images: [
      "https://placehold.co/720x1520/f4f4f5/a1a1aa?text=Mobile+App+WIP"
    ],
    orientation: "portrait"
  }
];

export const backendProjects: ProjectData[] = [
  {
    title: "SiKartu API",
    description: "The core engine for the SiKartu platform, providing high-availability endpoints for administrative data management and secure user authentication.",
    tags: ["Node.js", "Express", "REST API"],
    status: "Live",
    href: "https://github.com/malikrasyid/sikartu-api"
  },
  {
    title: "Nexus Social API",
    description: "The backend infrastructure for Nexus Social, utilizing NestJS and RabbitMQ for asynchronous message processing and Socket.io for persistent real-time connections.",
    tags: ["Node.js", "NestJS", "RabbitMQ", "WebSockets"],
    status: "Closed Beta",
    href: "https://github.com/malikrasyid/nexus-social-backend"
  },
  {
    title: "NexusERP API",
    description: "A robust, type-safe backend architecture built to handle multi-tenant ERP logic, complex data relationships, and high-concurrency requests.",
    tags: ["Node.js", "Express", "TypeScript", "PostgreSQL"],
    status: "In Progress",
    href: "https://github.com/malikrasyid/nexus-erp-backend"
  },
  {
    title: "JobTracker API (.NET)",
    description: "Enterprise-grade backend built with .NET Core. Implements professional design patterns for secure authentication and efficient SQL database operations.",
    tags: [".NET Core", "SQL Server", "EF Core"],
    status: "Live",
    href: "https://github.com/malikrasyid/JobTracker.Api"
  },
  {
    title: "JobTracker API (Node)",
    description: "A lightweight, high-performance alternative implementation of the JobTracker backend, optimized for rapid deployment and efficient resource usage.",
    tags: ["Node.js", "Express", "TypeScript"],
    status: "Live",
    href: "https://github.com/malikrasyid/JobTracker-API-Node"
  },
  {
    title: "Task Sphere API",
    description: "Real-time communication layer utilizing WebSockets to power collaborative task management, ensuring data consistency across all active team members.",
    tags: ["Node.js", "MongoDB", "Socket.io"],
    status: "Live",
    href: "https://github.com/malikrasyid/Task-Sphere-API"
  }
];