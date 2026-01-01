import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { technologies, certifications, skills } from '@/data/skillsAndCerts';
import styles from '@/styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Projects</h1>
      <p className={styles.pageSubtitle}>
        Here&apos;s a collection of my recent work. These projects showcase my
        skills in web development, design, and problem-solving.
      </p>

      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* Technologies maîtrisées */}
      <section className={styles.skillsSection}>
        <h2>Technologies & Frameworks</h2>
        <ul className={styles.techList}>
          {technologies.map((tech, index) => (
            <li key={index} className={styles.techItem}>
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {/* Certifications obtenues */}
      <section className={styles.certSection}>
        <h2>Certifications</h2>
        <ul className={styles.certList}>
          {certifications.map((cert, index) => (
            <li key={index} className={styles.certItem}>
              {cert.title} <span className={styles.certYear}>({cert.year})</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section className={styles.skillsSection}>
        <h2>Skills</h2>
        <ul className={styles.skillsList}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.skillItem}>
              {skill.name} - <em>{skill.level}</em>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Projects' },
  };
}

export default ProjectsPage;
