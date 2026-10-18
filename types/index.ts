export interface Article {
  id: string;
  title: string;
  description: string;
  cover_image: string;
  url: string;
  page_views_count: number;
  public_reactions_count: number;
  comments_count: number;
}

export interface Technology {
  name: string;
  color?: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  slug: string;
  category: 'Work' | 'Academic' | 'Personal';
  date?: string;
  technologies: Technology[];
  github?: string;
  demo?: string;
  live?: string;
  metrics?: Metric[];
  featured?: boolean;
  color?: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  watchers: number;
  forks: number;
  stargazers_count: number;
  html_url: string;
  homepage: string;
}

export interface User {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
}
