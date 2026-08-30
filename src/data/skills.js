import React from 'react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss, 
  SiTailwindcss, 
  SiPython, 
  SiFastapi, 
  SiNodedotjs, 
  SiPostgresql, 
  SiMysql, 
  SiSupabase, 
  SiGit, 
  SiGithub, 
  SiDocker, 
  SiLinux, 
  SiVercel 
} from 'react-icons/si';
import { TbApi, TbBrain, TbVector, TbRobot, TbLogicAnd, TbNetwork, TbBrandVscode } from 'react-icons/tb';

export const skills = [
  {
    category: "FRONTEND",
    technologies: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> }
    ]
  },
  {
    category: "BACKEND",
    technologies: [
      { name: "Python", icon: <SiPython /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "REST APIs", icon: <TbApi /> },
      { name: "Node.js", icon: <SiNodedotjs /> }
    ]
  },
  {
    category: "DATABASES",
    technologies: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Supabase", icon: <SiSupabase /> }
    ]
  },
  {
    category: "AI — CURRENTLY LEARNING",
    isLearning: true,
    technologies: [
      { name: "LLMs", icon: <TbBrain /> },
      { name: "RAG", icon: <TbLogicAnd /> },
      { name: "Embeddings", icon: <TbVector /> },
      { name: "AI Agents", icon: <TbRobot /> },
      { name: "LangChain", icon: <TbNetwork /> },
      { name: "LangGraph", icon: <TbNetwork /> }
    ]
  },
  {
    category: "TOOLS",
    technologies: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Linux", icon: <SiLinux /> },
      { name: "VS Code", icon: <TbBrandVscode /> },
      { name: "Vercel", icon: <SiVercel /> }
    ]
  }
];
