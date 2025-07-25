// Technologies icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

export const githubUsername = "Team-Tracker";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About
 **************************************************************
  Add a second paragraph for the about section.
*/
export const moreInfo =
  `
  Team-Tracker is a powerful team management tool offering real-time collaboration, task assignments, and progress tracking. With client apps available for Android, Desktop, iOS, and Web, it ensures seamless access and productivity across all devices. Designed to keep teams organized and connected, Team-Tracker streamlines workflows and enhances efficiency for businesses and projects of all sizes.`
/* Technologies
 ************************************************************** 
  Add or remove technologies in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const technologieData = [
  {
    id: 1,
    technology: <Icon icon="logos:spring" className="display-4" />,
    name: "Spring Boot",
  },
  {
    id: 2,
    technology: <Icon icon="logos:kotlin" className="display-4" />,
    name: "Kotlin",
  },
  {
    id: 3,
    technology: <Icon icon="logos:mysql" className="display-4" />,
    name: "MySQL",
  },
  {
    id: 4,
    technology: <Icon icon="logos:swagger" className="display-4" />,
    name: "OpenAPI",
  },
  {
    id: 5,
    technology: <Icon icon="logos:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    technology: <Icon icon="logos:tailwindcss-icon" className="display-4" />,
    name: "TailwindCSS",
  },
  {
    id: 7,
    technology: <Icon icon="logos:electron" className="display-4" />,
    name: "Electron",
  },
  {
    id: 8,
    technology: <Icon icon="logos:websocket" className="display-4" />,
    name: "WebSocket",
  },
  {
    id: 9,
    technology: <Icon icon="logos:json" className="display-4" />,
    name: "JSON",
  },
  {
    id: 10,
    technology: <Icon icon="logos:docker-icon" className="display-4" />,
    name: "Docker",
  },
  {
    id: 11,
    technology: <Icon icon="logos:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 12,
    technology: <Icon icon="logos:latex" className="display-4" />,
    name: "LaTeX",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mgvwoqea";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
