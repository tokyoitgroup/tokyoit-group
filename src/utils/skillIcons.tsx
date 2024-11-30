import Image from "next/image";
import { FaAws, FaDatabase, FaNodeJs, FaReact, FaServer } from "react-icons/fa";
import {
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiRubyonrails,
  SiTypescript,
} from "react-icons/si";
interface SkillIconMap {
  [key: string]: JSX.Element | string;
}

export const skillIcons: SkillIconMap = {
  React: <FaReact style={{ color: "#61DAFB" }} />,
  "Next.js": <SiNextdotjs style={{ color: "#000000" }} />,
  "Node.js": <FaNodeJs style={{ color: "#68A063" }} />,
  aws: <FaAws style={{ color: "#FF9900" }} />,
  Flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "Ruby on Rails": <SiRubyonrails style={{ color: "#CC0000" }} />,
  Kotlin:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  TypeScript: <SiTypescript style={{ color: "#3178C6" }} />,
  JavaScript: <SiJavascript style={{ color: "#F7DF1E" }} />,
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Database: <FaDatabase style={{ color: "#444444" }} />,
  DB: <FaDatabase style={{ color: "#444444" }} />,
  NestJS: <SiNestjs style={{ color: "#E0234E" }} />,
  Angular:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  SpringBoot:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Vue.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "Shell Script":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  Postgres:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  ruby: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
  "on-premise": <FaServer style={{ color: "#6C757D" }} />,
  Figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  Adobe: (
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
      alt="Photoshop"
      style={{
        borderRadius: "8px",
        backgroundColor: "#31A8FF",
        padding: "4px",
      }}
      width={36}
      height={36}
    />
  ),
  Azure:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  unity:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
  Apex: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg",
  Salesforce:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg",
};
