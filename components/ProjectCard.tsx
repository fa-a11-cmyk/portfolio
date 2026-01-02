import Image from 'next/image';
import { useState } from 'react';
import { Project } from '@/types';
import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const isImage = project.logo.endsWith('.svg') || project.logo.endsWith('.png') || project.logo.endsWith('.jpg') || project.logo.endsWith('.jpeg');

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
      <div className={styles.textSection}>
        <div className={styles.iconWrapper}>
          <img
            src={project.logo}
            alt={`${project.title} logo`}
            className={styles.icon}
            width={64}
            height={64}
          />
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
      <div className={styles.cardActions}>
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
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                className={styles.modalIcon}
                width={48}
                height={48}
              />
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
