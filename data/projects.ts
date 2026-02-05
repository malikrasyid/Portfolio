export type ProjectStatus = "Live" | "In Progress" | "Concept" | "Beta";

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
      description: "A comprehensive dashboard for managing job applications. Features a kanban-style board, analytics visualization, and drag-and-drop status updates.",
      tags: ["React", "JavaScript", "Tailwind"],
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
      title: "JobTracker Web",
      description: "A comprehensive dashboard for managing job applications. Features a kanban-style board, analytics visualization, and drag-and-drop status updates.",
      tags: ["React", "TypeScript", "Tailwind", "Recharts"],
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
      orientation: "landscape" // 16:9 for Web
    },
    {
      title: "Task Sphere",
      description: "A collaborative project management tool inspired by Trello. Supports real-time updates, team workspaces, and task assignment.",
      tags: ["Vue", "Pinia", "Tailwind"],
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
      orientation: "landscape" // 16:9 for Web
    },
    {
      title: "SubsTracker",
      description: "Mobile application for tracking monthly subscriptions. Features notification reminders and spending analysis charts.",
      tags: [".NET MAUI", "C#", "XAML", "Mobile"],
      status: "In Progress",
      href: "https://github.com/malikrasyid/SubsTracker",
      images: [
        "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281589/1_qhdiow.png", 
        "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281590/2_d6ghet.png",
        "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281591/3_ydzboc.png",
        "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281591/4_tua5jz.png",
        "https://res.cloudinary.com/dxdgpncgq/image/upload/v1770281592/5_arfb6t.png"
      ],
      orientation: "portrait" // Portrait for Mobile
    }
  ];
  
  export const backendProjects: ProjectData[] = [
    {
      title: "SiKartu API",
      description: "Restful API for SiKartu web app, built with Node.js and Express. Manages user data and subscription info.",
      tags: ["Node.js", "Express", "JavaScript"],
      status: "Live",
      href: "https://github.com/malikrasyid/sikartu-api"
    },
    {
      title: "JobTracker API (.NET)",
      description: "Robust backend API built with C# and .NET Core. Handles authentication and SQL operations.",
      tags: [".NET Core", "SQL Server", "EF Core"],
      status: "Live",
      href: "https://github.com/malikrasyid/JobTracker.Api"
    },
    {
      title: "JobTracker API (Node)",
      description: "Experimental rewrite of the backend using Node.js/Express for lightweight deployment.",
      tags: ["Node.js", "Express", "TypeScript"],
      status: "Live",
      href: "#"
    },
    {
      title: "Task Sphere API",
      description: "Dedicated backend for Task Sphere handling real-time updates via WebSockets.",
      tags: ["Node.js", "MongoDB", "Socket.io"],
      status: "Live",
      href: "#"
    }
  ];