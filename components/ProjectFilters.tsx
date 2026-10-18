import React, { useState } from 'react';
import styles from '@/styles/ProjectFilters.module.css';

interface ProjectFiltersProps {
  onCategoryChange?: (category: string | null) => void;
  categories: string[];
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ onCategoryChange, categories }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string | null) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filterGroup}>
        <label className={styles.label}>Filter by Category:</label>
        <div className={styles.filterButtons}>
          <button
            className={`${styles.filterBtn} ${!activeCategory ? styles.active : ''}`}
            onClick={() => handleCategoryClick(null)}
          >
            All Projects
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectFilters;
