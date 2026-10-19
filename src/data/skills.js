import React from 'react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiTailwindcss, 
  SiPython, 
  SiFastapi, 
  SiNodedotjs, 
  SiPostgresql, 
  SiMysql, 
  SiMongodb,
  SiSupabase, 
  SiGit, 
  SiGithub, 
  SiDocker, 
  SiLinux, 
  SiVercel,
  SiExpress,
  SiPhp
} from 'react-icons/si';
import { TbApi, TbBrain, TbVector, TbRobot, TbLogicAnd, TbNetwork, TbBrandVscode } from 'react-icons/tb';

export const skillCategories = [
  {
    category: "Programming Languages",
    description: "Languages used for core software and script development",
    technologies: [
      { name: "Python", icon: <SiPython /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "PHP", icon: <SiPhp /> }
    ]
  },
  {
    category: "Backend & Systems",
    description: "Server architecture, API design, and backend workflows",
    technologies: [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "REST APIs", icon: <TbApi /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> }
    ]
  },
  {
    category: "Frontend Development",
    description: "Client-side interfaces and responsive user experiences",
    technologies: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "HTML5 & CSS3", icon: <SiHtml5 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> }
    ]
  },
  {
    category: "Databases & Storage",
    description: "Relational, document, and cloud-hosted data stores",
    technologies: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Supabase", icon: <SiSupabase /> }
    ]
  },
  {
    category: "Applied AI & Exploration",
    isLearning: true,
    description: "Areas of active study, experimentation, and capstone work",
    technologies: [
      { name: "LangGraph", icon: <TbNetwork /> },
      { name: "LangChain", icon: <TbLogicAnd /> },
      { name: "RAG Architectures", icon: <TbBrain /> },
      { name: "Vector Embeddings", icon: <TbVector /> },
      { name: "LLM Orchestration", icon: <TbRobot /> }
    ]
  },
  {
    category: "Developer Tools & DevOps",
    description: "Development environments, version control, and containerization",
    technologies: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Linux / CLI", icon: <SiLinux /> },
      { name: "VS Code", icon: <TbBrandVscode /> },
      { name: "Vercel", icon: <SiVercel /> }
    ]
  }
];
