import { FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiRubyonrails,
  SiTypescript,
} from "react-icons/si";

interface SkillIconMap {
  [key: string]: JSX.Element | string;
}

export const skillIcons: SkillIconMap = {
  React: <FaReact className="text-blue-500" />,
  "Next.js": <SiNextdotjs className="text-black" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  Flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "Ruby on Rails": <SiRubyonrails className="text-red-500" />,
  ruby: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
  Kotlin:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  TypeScript: <SiTypescript className="text-blue-700" />,
  JavaScript: <SiJavascript className="text-yellow-500" />,
  Python: <SiPython className="text-blue-400" />,
  Database: <FaDatabase className="text-yellow-500" />,
  vuejs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
};
