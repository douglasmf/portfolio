import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase
} from "react-icons/fa";

import { SiTypescript, SiStyledcomponents, SiTailwindcss } from "react-icons/si";

export const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Styled Components", icon: <SiStyledcomponents /> },
  { name: "Tailwind", icon:<SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MySQL", icon: <FaDatabase /> }

];