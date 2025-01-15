import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Renato Carvalho",
  EMAIL: "renatolz@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Renato Carvalho",
  DESCRIPTION: "Welcome to my blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Experiência",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projetos",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/renatolz",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/renatocarvalho"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/renatocarvalho",
  }
];
