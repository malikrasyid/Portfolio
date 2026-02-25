import { ProjectStatus } from "../data/projects";

export const getStatusColor = (status: ProjectStatus): string => {
  switch (status) {
    case "Live":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    case "Beta":
    case "Closed Beta":
      return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
    case "In Progress":
    case "Development":
      return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
    case "Source Code":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    case "Concept":
      return "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400";
    default:
      return "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400";
  }
};