import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { technologies, certifications, skills } from '@/data/skillsAndCerts';
import styles from '@/styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>My Projects</h1>
        <p className={styles.pageSubtitle}>
          Here's a collection of my recent work. These projects showcase my skills in web development, design, and problem-solving.
        </p>
      </header>

      <section className={styles.projectsSection}>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className={styles.techSection}>
        <h2 className={styles.sectionTitle}>Technologies & Frameworks</h2>
        <ul className={styles.techList}>
          {technologies.map((tech, index) => (
            <li key={index} className={styles.techItem}>
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.certSection}>
        <h2 className={styles.sectionTitle}>Certifications</h2>
        <ul className={styles.certList}>
          {certifications.map((cert, index) => (
            <li key={index} className={styles.certItem}>
              <strong>{cert.title}</strong> <span className={styles.certYear}>({cert.year})</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.skillsSection}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <ul className={styles.skillsList}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.skillItem}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillLevel}>{skill.level}</span>
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
