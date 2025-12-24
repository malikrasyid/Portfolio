export const frontendProjects = [
    {
      title: "JobTracker Web",
      description: "A comprehensive dashboard for managing job applications. Features a kanban-style board, analytics visualization, and drag-and-drop status updates.",
      tags: ["React", "TypeScript", "Tailwind", "Recharts"],
      status: "Live",
      href: "https://github.com/malikrasyid/JobTracker",
      liveUrl: "https://job-tracker-dun-kappa.vercel.app",
      images: [
        "/images/jobtracker/1.png", 
        "/images/jobtracker/2.png",
        "/images/jobtracker/3.png",
        "/images/jobtracker/4.png",
        "/images/jobtracker/5.png"
      ],
      orientation: "landscape" // 16:9 for Web
    },
    {
      title: "Task Sphere",
      description: "A collaborative project management tool inspired by Trello. Supports real-time updates, team workspaces, and task assignment.",
      tags: ["Vue", "Pinia", "Tailwind", "Socket.io"],
      status: "Live",
      href: "https://github.com/malikrasyid/Task-Sphere_Website",
      liveUrl: "https://task-sphere-website.vercel.app",
      images: [
        "/images/tasksphere/1.png",
        "/images/tasksphere/2.png",
        "/images/tasksphere/3.png",
        "/images/tasksphere/4.png",
        "/images/tasksphere/5.png",
        "/images/tasksphere/6.png",
        "/images/tasksphere/7.png",
        "/images/tasksphere/8.png",
        "/images/tasksphere/9.png",
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
        "/images/jobtracker/1.png", 
        "/images/jobtracker/2.png",
        "/images/jobtracker/3.png",
        "/images/jobtracker/4.png",
        "/images/jobtracker/5.png"
      ],
      orientation: "portrait" // Portrait for Mobile
    }
  ];
  
  export const backendProjects = [
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