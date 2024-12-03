export interface Member {
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
    zenn?: string;
  };
}

export type FAQ = {
  question: string;
  answer: string;
};

export type ImageOption = {
  src: string;
  width?: number;
  height?: number;
};

export type Photo = {
  src: string;
  alt: string;
};

export type FAQItemProps = {
  faq: FAQ;
};
