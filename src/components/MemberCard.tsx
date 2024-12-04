import { Member, Photo } from "@/types/types";
import skillIcons from "@/utils/skillIcons";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Card = styled(motion.div)`
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SkillIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 5px;
  width: 48px;
  height: 48px;
  text-align: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  svg {
    font-size: 32px;
  }

  span {
    font-size: 14px;
    font-weight: bold;
    color: #333;
  }
`;

const socialIcons: { [key: string]: JSX.Element } = {
  github: (
    <Image src="/images/icons/github.svg" alt="GitHub" width={32} height={32} />
  ),
  linkedin: (
    <Image
      src="/images/icons/linkedin.svg"
      alt="LinkedIn"
      width={32}
      height={32}
    />
  ),
  twitter: (
    <Image
      src="/images/icons/twitter-original.svg"
      alt="Twitter"
      width={32}
      height={32}
    />
  ),
  instagram: (
    <Image
      src="/images/icons/Instagram-original.svg"
      alt="Instagram"
      width={32}
      height={32}
    />
  ),
  youtube: (
    <Image
      src="/images/icons/youtube.svg"
      alt="YouTube"
      width={32}
      height={32}
    />
  ),
  zenn: (
    <Image src="/images/icons/zenn.png" alt="Zenn" width={32} height={32} />
  ),
  FaAws: <Image src="/images/icons/aws.svg" alt="AWS" width={32} height={32} />,
};
const VideoProfile = ({ src, alt }: Photo) => (
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full sm:h-56 object-cover"
  >
    <source src={src} type="video/mp4" />
    {alt}
  </video>
);

const MemberCard = ({ member }: { member: Member }) => (
  <Card whileHover={{ scale: 1.05 }}>
    {member.image.endsWith(".mp4") ? (
      <VideoProfile src={member.image} alt={member.name} />
    ) : (
      <Image
        src={encodeURI(member.image)}
        alt={member.name}
        className="w-full h-52 sm:h-56 object-cover"
        width={640}
        height={360}
      />
    )}
    <div className="p-6">
      <h3 className="font-serif text-2xl font-bold text-blue-600 mb-2">
        {member.name}
      </h3>
      <p className="text-gray-700 mb-2">
        {member.position} {member.company && `@ ${member.company}`}
      </p>
      <div className="flex space-x-2 mb-4">
        {member.skills.map((skill, index) => (
          <SkillIcon key={index}>
            {skillIcons[skill] ? (
              typeof skillIcons[skill] === "string" ? (
                <Image
                  src={skillIcons[skill] as string}
                  alt={skill}
                  width={32}
                  height={32}
                />
              ) : (
                skillIcons[skill]
              )
            ) : (
              <span className="text-sm">{skill}</span>
            )}
          </SkillIcon>
        ))}
      </div>
      <p className="text-gray-700 mb-2">{member.hobbies}</p>
      <p className="text-gray-700 mb-4">{member.introduction}</p>
      <p className="text-gray-800 font-semibold mb-4">
        <span className="font-normal">目標：</span>
        {member.goal}
      </p>
      {member.links && (
        <div className="flex space-x-4">
          {Object.entries(member.links).map(([platform, url]) => {
            try {
              new URL(url);
              return (
                <Link
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:opacity-75"
                >
                  {socialIcons[platform]}
                </Link>
              );
            } catch {
              console.warn(`Invalid URL: ${url}`);
              return null;
            }
          })}
        </div>
      )}
    </div>
  </Card>
);

export default MemberCard;
