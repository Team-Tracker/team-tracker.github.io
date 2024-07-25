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
Welcome to Team Tracker – your ultimate solution for seamless team collaboration and efficient project management. Combining the best features of communication tools like Microsoft Teams with the powerful project tracking capabilities of YouTrack, Team Tracker revolutionizes how teams work together and achieve their goals.
Key Features:

    Real-time Communication: Stay connected with your team through instant messaging, video conferencing, and voice calls. Share ideas, updates, and feedback in real time, ensuring everyone is on the same page.

    Project Management: Organize your tasks, set deadlines, and track progress with our intuitive project management tools. Create and manage projects, assign tasks, and monitor their completion with ease.

    Integrated Workflow: Seamlessly integrate with your existing tools and workflows. Team Tracker supports a wide range of integrations to ensure your team’s productivity remains uninterrupted.

    Customizable Dashboards: Keep track of your team’s performance and project status with customizable dashboards. Visualize key metrics and data to make informed decisions and stay on top of your projects.

    Collaboration Spaces: Create dedicated spaces for different teams, projects, or departments. Share files, documents, and resources within these spaces to foster collaboration and knowledge sharing.

    Task Automation: Automate repetitive tasks and workflows to save time and reduce errors. Set up custom rules and triggers to streamline your processes and enhance efficiency.

    Security and Compliance: Protect your data with robust security features and compliance with industry standards. Ensure that your information is safe and secure at all times.

Why Choose Team Tracker?

Team Tracker is designed to bring out the best in your team by providing a platform that combines communication, collaboration, and project management. Whether you are a small startup or a large enterprise, Team Tracker scales with your needs and helps you achieve your objectives with greater efficiency and transparency.

Join the growing number of organizations that trust Team Tracker to keep their teams connected and their projects on track. Experience the future of teamwork and project management with Team Tracker today!
`
/* Technologies
 ************************************************************** 
  Add or remove technologies in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const technologieData = [
  {
    id: 1,
    technology: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    technology: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    technology: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    technology: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    technology: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    technology: <Icon icon="file-icons:styledcomponents" className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 7,
    technology: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    technology: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    technology: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
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
