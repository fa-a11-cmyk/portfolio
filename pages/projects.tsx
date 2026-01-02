import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import FileIcons from '@/components/FileIcons';
import { projects } from '@/data/projects';
import { skillsCategories, certifications } from '@/data/skillsAndCerts';
import styles from '@/styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>My Projects</h1>
        <p className={styles.pageSubtitle}>
          Here&apos;s a collection of my recent work showcasing expertise in cloud infrastructure, DevOps, and full-stack development.
        </p>
      </header>

      <section className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <FileIcons />

      <section className={styles.skillsSection}>
        <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
        <div className={styles.skillsContainer}>
          {skillsCategories.map((category, idx) => (
            <div key={idx} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                    <p className={styles.skillDescription}>{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.certSection}>
        <h2 className={styles.sectionTitle}>Certifications</h2>
        <div className={styles.certGrid}>
          {certifications.map((cert, index) => (
            <div key={index} className={styles.certItem}>
              <div className={styles.certIcon}>🏆</div>
              <div className={styles.certContent}>
                <h4 className={styles.certTitle}>{cert.title}</h4>
                <span className={styles.certYear}>{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
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
