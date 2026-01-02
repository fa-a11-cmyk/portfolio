import styles from '@/styles/FileIcons.module.css';

const fileIcons = [
  { name: 'home.tsx', icon: '🔷', color: '#61DAFB', label: 'React' },
  { name: 'about.html', icon: '🟧', color: '#E34C26', label: 'HTML' },
  { name: 'contact.css', icon: '🔵', color: '#563D7C', label: 'CSS' },
  { name: 'projects.js', icon: '🟨', color: '#F7DF1E', label: 'JavaScript' },
  { name: 'github.md', icon: '📘', color: '#083FA1', label: 'Markdown' },
];

const FileIcons = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Project Files</h3>
      <div className={styles.grid}>
        {fileIcons.map((file, index) => (
          <div key={index} className={styles.fileItem}>
            <span className={styles.icon}>{file.icon}</span>
            <div className={styles.info}>
              <p className={styles.filename}>{file.name}</p>
              <p className={styles.label}>{file.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileIcons;
