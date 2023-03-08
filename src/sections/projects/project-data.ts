type projectType = {
  title: string;
  description: string;
  skills: string[];
  type: string;
  links: { github?: string; website?: string };
};

const projects: projectType[] = [
  {
    title: "Multonion",
    description:
      "A B2B procurement tool with features to handle team managemnt , dissemination of tender information (RFIs, RFQs and RFPs) , bidding, contracting and project management",
    skills: ["typescript", "react-js", "MUI", "node-js", "postgreSQL"],
    type: "contract",
    links: { website: "multonion.com" },
  },
  {
    title: "Fast Meet",
    description:
      "Taking a deep dive into the works of WebRTC and Web-Sockets, a friend and I built a P2P video confrencing application, users can start a call, share link, share screen and chat",
    skills: ["typescript", "react-js", "MUI", "node-js", "WebRTC", "Socket IO"],
    type: "open source",
    links: {
      website: "https://fastmeet.cam/",
      github: "https://fastmeet.cam/",
    },
  },
  {
    title: "Town hall",
    description:
      "A task management an collaboration tool where users can create and manage personal accounts, teams, projects and communicate (chat)",
    skills: ["typescript", "react-js", "MUI", "node-js", "postgreSQL"],
    type: "Open Source (In Progress)",
    links: { website: "multonion.com" },
  },
];

export default projects;
