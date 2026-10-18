import { useState } from 'react';
import { Project } from '@/types';
import TechBadge from '@/components/TechBadge';
import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleToggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded(!expanded);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const CardContent = () => (
    <div className={`${styles.content} ${expanded ? styles.expanded : ''}`}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <div className={styles.titleInfo}>
            <h3 className={styles.title}>{project.title}</h3>
            <div className={styles.meta}>
              {project.date && <span className={styles.date}>{project.date}</span>}
              {project.category && <span className={styles.category}>{project.category}</span>}
            </div>
          </div>
        </div>
        {project.featured && <span className={styles.featuredBadge}>Featured</span>}
      </div>

      <div className={styles.textSection}>
        <p className={styles.description}>{project.description}</p>

        {project.technologies && project.technologies.length > 0 && (
          <div className={styles.technologiesContainer}>
            <div className={styles.technologiesLabel}>Tech Stack:</div>
            <div className={styles.technologies}>
              {project.technologies.map((tech, idx) => (
                <TechBadge key={idx} name={tech.name} color={tech.color} />
              ))}
            </div>
          </div>
        )}

        {project.metrics && project.metrics.length > 0 && expanded && (
          <div className={styles.metricsContainer}>
            <div className={styles.metricsLabel}>Highlights:</div>
            <div className={styles.metrics}>
              {project.metrics.map((metric, idx) => (
                <div key={idx} className={styles.metricItem}>
                  <span className={styles.metricLabel}>{metric.label}:</span>
                  <span className={styles.metricValue}>{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className={styles.cardActions}>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionBtn}
            title="View Live"
          >
            Live
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionBtn}
            title="View on GitHub"
          >
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionBtn}
            title="View Demo"
          >
            Demo
          </a>
        )}
        <button
          className={styles.expandBtn}
          onClick={handleToggleExpand}
          aria-label="Toggle expand"
        >
          {expanded ? '▼ Collapse' : '▲ Expand'}
        </button>
      </div>
    </div>
  );

  const CardWrapper = () => (
    <>
      <CardContent />
      {showModal && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={handleCloseModal}>✕</button>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{project.title}</h2>
            </div>
            <p className={styles.modalDescription}>{project.description}</p>
          </div>
        </div>
      )}
    </>
  );

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.card} ${expanded ? styles.cardExpanded : ''}`}
        onClick={(e) => e.preventDefault()}
      >
        <CardWrapper />
      </a>
    );
  }

  return <div className={`${styles.card} ${expanded ? styles.cardExpanded : ''}`}><CardWrapper /></div>;
};

export default ProjectCard;
