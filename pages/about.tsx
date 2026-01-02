import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Fatma Adel</h1>
        <div className={styles.subtitle}>Cloud & DevOps Engineer | Multi-Cloud Architect</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey there! 👋 I&apos;m Fatma, a passionate Cloud & DevOps Engineer who transforms chaos into elegant automation. 
              I specialize in architecting resilient cloud infrastructure, orchestrating containerized applications, and building 
              CI/CD pipelines that make deployments feel like magic. AWS, Azure, GCP, Docker, Kubernetes, and Terraform are my playground.
            </p>
            <p className={styles.paragraph}>
              I believe great infrastructure is invisible—it just works. My mission is to design systems that scale effortlessly, 
              fail gracefully, and keep your team shipping code with confidence. Whether it&apos;s multi-cloud orchestration or 
              implementing security best practices, I&apos;m here to make your DevOps dreams a reality.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>🚀 What I Do</h2>
            <p className={styles.paragraph}>
              I architect and automate cloud infrastructure that powers modern applications. From designing scalable Kubernetes clusters 
              to implementing end-to-end CI/CD pipelines, I turn deployment nightmares into streamlined workflows. I&apos;ve deployed applications 
              across AWS EKS, Azure AKS, and OpenStack, always keeping security, performance, and cost-efficiency in mind.
            </p>
            <p className={styles.paragraph}>
              My toolkit includes infrastructure-as-code (Terraform), container orchestration, network monitoring, and security compliance 
              (ISO 27001). I&apos;m obsessed with automation—if it&apos;s repetitive, it should be automated. If it&apos;s critical, it should be monitored.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>💡 Current Focus</h2>
            <p className={styles.paragraph}>
              I&apos;m focused on designing and implementing scalable cloud solutions that drive business value. My expertise spans across 
              multi-cloud platforms, containerized application deployment, and infrastructure automation. I&apos;m committed to building systems 
              that are secure, reliable, and cost-efficient while continuously improving operational excellence.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>🎯 Why Work With Me</h2>
            <p className={styles.paragraph}>
              I don&apos;t just deploy code—I build systems that teams trust. I&apos;m a problem-solver who loves tackling complex infrastructure challenges, 
              a communicator who bridges dev and ops teams, and a continuous learner who stays ahead of cloud trends. 
              Plus, I bring a touch of humor to the sometimes-serious world of DevOps. 😄
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>🌍 Beyond the Terminal</h2>
            <p className={styles.paragraph}>
              When I&apos;m not orchestrating containers or debugging pipelines, you&apos;ll find me exploring emerging technologies, 
              contributing to open-source projects, and sharing knowledge with the tech community. I&apos;m passionate about music, 
              reading about AI systems, and discovering tools that boost productivity. Life&apos;s too short for boring infrastructure!
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
