import Image from "next/image";
interface SkillIconMap {
  [key: string]: JSX.Element | string;
}

const skillIcons: SkillIconMap = {
  React: (
    <Image
      src="/images/icons/react-original.svg"
      alt="React"
      width={36}
      height={36}
    />
  ),
  "Next.js": (
    <Image
      src="/images/icons/nextjs-original.svg"
      alt="Next.js"
      width={36}
      height={36}
    />
  ),
  "Node.js": (
    <Image
      src="/images/icons/nodejs.svg"
      alt="Node.js"
      width={36}
      height={36}
    />
  ),
  aws: <Image src="/images/icons/aws.svg" alt="AWS" width={36} height={36} />,
  Flutter: (
    <Image
      src="/images/icons/flutter-original.svg"
      alt="Flutter"
      width={36}
      height={36}
    />
  ),
  "Ruby on Rails": (
    <Image
      src="/images/icons/ruby-on-rails.svg"
      alt="Ruby on Rails"
      width={36}
      height={36}
    />
  ),
  Kotlin: (
    <Image
      src="/images/icons/kotlin-original.svg"
      alt="Kotlin"
      width={36}
      height={36}
    />
  ),
  TypeScript: (
    <Image
      src="/images/icons/typescript-original.svg"
      alt="TypeScript"
      width={36}
      height={36}
    />
  ),
  JavaScript: (
    <Image
      src="/images/icons/javascript-original.svg"
      alt="JavaScript"
      width={36}
      height={36}
    />
  ),
  Python: (
    <Image
      src="/images/icons/python-original.svg"
      alt="Python"
      width={36}
      height={36}
    />
  ),
  Database: (
    <Image
      src="/images/icons/database.svg"
      alt="Database"
      width={36}
      height={36}
    />
  ),
  DB: (
    <Image src="/images/icons/database.svg" alt="DB" width={36} height={36} />
  ),
  NestJS: (
    <Image
      src="/images/icons/nestjs-original.svg"
      alt="NestJS"
      width={36}
      height={36}
    />
  ),
  Angular: (
    <Image
      src="/images/icons/angular.svg"
      alt="Angular"
      width={36}
      height={36}
    />
  ),
  Java: (
    <Image
      src="/images/icons/java-original.svg"
      alt="Java"
      width={36}
      height={36}
    />
  ),
  SpringBoot: (
    <Image
      src="/images/icons/spring-original.svg"
      alt="Spring Boot"
      width={36}
      height={36}
    />
  ),
  "Vue.js": (
    <Image
      src="/images/icons/vuejs-original.svg"
      alt="Vue.js"
      width={36}
      height={36}
    />
  ),
  "Shell Script": (
    <Image
      src="/images/icons/shell-script.svg"
      alt="Shell Script"
      width={36}
      height={36}
    />
  ),
  Postgres: (
    <Image
      src="/images/icons/postgresql-original.svg"
      alt="Postgres"
      width={36}
      height={36}
    />
  ),
  ruby: (
    <Image
      src="/images/icons/ruby-original.svg"
      alt="Ruby"
      width={36}
      height={36}
    />
  ),
  "on-premise": (
    <Image
      src="/images/icons/database.svg"
      alt="On-Premise"
      width={36}
      height={36}
    />
  ),
  Figma: (
    <Image
      src="/images/icons/figma-original.svg"
      alt="Figma"
      width={36}
      height={36}
    />
  ),
  Adobe: (
    <Image src="/images/icons/adobe.svg" alt="Adobe" width={36} height={36} />
  ),
  Azure: (
    <Image src="/images/icons/azure.svg" alt="Azure" width={36} height={36} />
  ),
  "C#": (
    <Image src="/images/icons/csharp.svg" alt="C#" width={36} height={36} />
  ),
  unity: (
    <Image src="/images/icons/unity.svg" alt="Unity" width={36} height={36} />
  ),
  Apex: (
    <Image src="/images/icons/apex.png" alt="Apex" width={36} height={36} />
  ),
  Salesforce: (
    <Image
      src="/images/icons/salesforce.svg"
      alt="Salesforce"
      width={36}
      height={36}
    />
  ),
  nodejs: (
    <Image
      src="/images/icons/nodejs.svg"
      alt="Node.js"
      width={36}
      height={36}
    />
  ),
};

export default skillIcons;
