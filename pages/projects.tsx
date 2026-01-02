import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { technologies, certifications, skillsCategories } from '@/data/skillsAndCerts';
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

      {/* Skills Section - Organized by Categories */}
      <section className={styles.skillsSection}>
        <h2>Professional Skills</h2>
        <div className={styles.categoriesContainer}>
          {skillsCategories.map((category, idx) => (
            <div key={idx} className={styles.categoryBlock}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.categorySkills}>
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className={styles.skillCard}>
                    <div className={styles.skillHeader}>
                      <h4 className={styles.skillName}>{skill.name}</h4>
                      <span className={styles.skillLevel}>{skill.level}</span>
                    </div>
                    <p className={styles.skillDescription}>{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies & Tools */}
      <section className={styles.techSection}>
        <h2>Technologies & Tools</h2>
        <ul className={styles.techList}>
          {technologies.map((tech, index) => (
            <li key={index} className={styles.techItem}>
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {/* Certifications */}
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
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Projects' },
  };
}

export default ProjectsPage;
