import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Fatma Adel</h1>
        <div className={styles.subtitle}>Cloud & DevOps Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hello! I&apos;m Fatma, a passionate Cloud and DevOps Engineer based in Tunisia.
              I specialize in designing, deploying, and automating cloud infrastructure,
              mainly using AWS, Docker, Kubernetes, and Infrastructure as Code tools like Terraform.
            </p>
            <p className={styles.paragraph}>
              My expertise spans CI/CD pipeline creation (GitLab CI/CD, Jenkins), container orchestration,
              cloud monitoring, and scalable architecture design. I enjoy turning complex deployment challenges
              into streamlined, automated solutions.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              I&apos;ve worked on various projects involving AWS Cloud architecture, network anomaly detection,
              and automated software delivery pipelines. My work often includes deploying containerized applications,
              integrating CI/CD pipelines, and ensuring reliability through continuous monitoring and logging tools
              like Prometheus, Grafana, and ELK stack.
            </p>
            <p className={styles.paragraph}>
              I&apos;ve also led the DevOps implementation for full-stack applications, ensuring seamless collaboration
              between development and operations using best practices in cloud-native technologies.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Projects & Research</h2>
            <p className={styles.paragraph}>
              I&apos;m currently working on cloud-based projects involving anomaly detection in network traffic
              and predictive delivery systems using AI. My goal is to combine DevOps best practices
              with data-driven insights to improve system reliability and performance.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Tech</h2>
            <p className={styles.paragraph}>
              When I&apos;m not configuring pipelines or deploying microservices, I enjoy exploring new technologies,
              contributing to open-source, and sharing technical knowledge. Outside of tech, I love music,
              reading about intelligent systems, and discovering new tools to enhance productivity.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
