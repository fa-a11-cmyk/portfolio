import React from 'react';
import styles from '@/styles/TechBadge.module.css';

interface TechBadgeProps {
  name: string;
  color?: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name, color }) => {
  return (
    <span
      className={styles.badge}
      style={{
        backgroundColor: color ? `${color}20` : 'rgba(88, 166, 255, 0.15)',
        borderColor: color || 'rgba(88, 166, 255, 0.3)',
        color: color || 'var(--accent-color)',
      }}
      title={name}
    >
      {name}
    </span>
  );
};

export default TechBadge;
