import { skillIcons } from "@/utils/skillIcons";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

interface Member {
  name: string;
  position: string;
  company: string;
  skills: string[];
  hobbies: string;
  introduction: string;
  goal: string;
  image: string;
  links?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
}

const Card = styled(motion.div)`
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SkillIcon = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const socialIcons: { [key: string]: JSX.Element } = {
  github: <FaGithub className="text-gray-800" />,
  linkedin: <FaLinkedin className="text-blue-700" />,
  twitter: <FaTwitter className="text-blue-500" />,
  instagram: <FaInstagram className="text-pink-500" />,
  youtube: <FaYoutube className="text-red-600" />,
};

export default function MemberCard({ member }: { member: Member }) {
  return (
    <Card whileHover={{ scale: 1.05 }}>
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-blue-600 mb-2">{member.name}</h3>
        <p className="text-gray-700 mb-2">
          {member.position} @ {member.company}
        </p>
        <div className="flex space-x-2 mb-4">
          {member.skills.map((skill, index) => (
            <SkillIcon key={index}>
              {typeof skillIcons[skill] === "string" ? (
                <img
                  src={skillIcons[skill] as string}
                  alt={skill}
                  height={32}
                  width={32}
                />
              ) : (
                skillIcons[skill]
              )}
            </SkillIcon>
          ))}
        </div>
        <p className="text-gray-700 mb-2">
          <strong>趣味：</strong>
          {member.hobbies}
        </p>
        <p className="text-gray-700 mb-4">{member.introduction}</p>
        <p className="text-gray-800 font-semibold mb-4">
          <strong>目標：</strong>
          {member.goal}
        </p>
        {member.links && (
          <div className="flex space-x-4">
            {Object.entries(member.links).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:opacity-75"
              >
                {socialIcons[platform]}
              </a>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
