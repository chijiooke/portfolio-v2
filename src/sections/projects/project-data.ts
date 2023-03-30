type projectType = {
  title: string;
  description: string;
  altDescription: string;
  skills: string[];
  type: string;
  links: { github?: string; website?: string };
};

const projects: projectType[] = [
  {
    title: "Multonion",
    altDescription: "B2B Procurement App",
    description:
      "A B2B procurement tool with features to handle team managemnt , dissemination of tender information (RFIs, RFQs and RFPs) , bidding, contracting and project management",
    skills: ["typescript", "react-js", "MUI", "node-js", "postgreSQL"],
    type: "contract",
    links: { website: "https://multonion.com" },
  },
  {
    title: "Optical Character Recognition (OCR)",
    altDescription: "Scan and Extract texts from images",
    description:
      "A simple tool built with typescript and node.js used to scan images, extract text and convert images into editable, shareable PDFs that are machine-readable",
    skills: ["typescript", "node-js", "tesseract", "multer", "react-js"],
    type: "Open Source ",
    links: { github: "https://github.com/chijiooke/OCR-typescript" },
  },
  {
    title: "Fast Meet",
    altDescription: "P2P Video/Chat Conference App",
    description:
      "Taking a deep dive into the works of WebRTC and Web-Sockets, a friend and I built a P2P video confrencing application, users can start a call, share link, share screen and chat",
    skills: ["typescript", "react-js", "MUI", "node-js", "WebRTC", "Socket IO"],
    type: "open source",
    links: {
      website: "https://fastmeet.cam",
      github: "https://github.com/silvareal/fastmeet",
    },
  },
  {
    title: "React Credit Card Validator",
    altDescription: "Headless Credit Card Input validator",
    description:
      "A React Custom Hook to provide validation and formatting for payment card input fields. Motivated by React Payment Inputs. This package offers a fully typed alternative, written completely in TypeScript",
    skills: ["typescript", "react-js", "node-js"],
    type: "open source",
    links: {
      website: "https://www.npmjs.com/package/react-creditcard-validator",
      github: "https://github.com/abayomi1196/react-creditcard-validator",
    },
  },
  // {
  //   title: "Town hall",
  //   altDescription: "Project Management App",
  //   description:
  //     "A task management and collaboration tool where users can manage personal accounts, teams, tasks, projects and communicate (chat)",
  //   skills: ["typescript", "react-js", "MUI", "node-js", "postgreSQL"],
  //   type: "Open Source (In Progress)",
  //   links: { github: "https://github.com/chijiooke/town-hall" },
  // },
];

export default projects;
