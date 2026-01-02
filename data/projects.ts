export interface Project {
  title: string;
  description: string;
  logo: string;
  slug: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: 'Smartovate',
    description:
      'Advanced backup and disaster recovery solution with multi-cloud support. Seamlessly backup data across AWS, AWS2, and Azure with automated failover capabilities. Enterprise-grade security, real-time monitoring, and compliance management for critical business continuity.',
    logo: '/logos/smartovate.png',
    slug: 'smartovate-backup',
    link: ''
  },
  {
    title: 'OpenStack Cloud Infrastructure',
    description:
      'Ongoing 2025 Project: Designing and implementing enterprise-grade cloud infrastructure using OpenStack. Managing compute, storage, and networking resources. Implementing automated deployment pipelines and infrastructure orchestration for scalable cloud solutions.',
    logo: '/logos/OpenStack.png',
    slug: 'openstack-cloud-infrastructure',
    link: ''
  },
  {
    title: 'Network Anomaly Detection',
    description:
      'Final Year Project: Implemented comprehensive monitoring solution on AWS infrastructure for real-time network analysis. Collected and analyzed system logs using advanced techniques to identify and resolve network anomalies. Developed automated alerting system for proactive issue detection.',
    logo: '/logos/sec.png',
    slug: 'network-anomaly-detection',
    link: ''
  },
  {
    title: 'Cavario - Equestrian Club Management',
    description:
      'Mobile app for comprehensive equestrian club management including member scheduling and event coordination. Implemented responsive designs and optimized app performance for both iOS and Android platforms using Flutter.',
    logo: '/logos/Cavario.png',
    slug: 'cavario-mobile-app',
    link: ''
  },
  {
    title: 'DevWork Mobile Application',
    description:
      'Development of Upwork-like mobile application using Flutter (frontend) and Laravel (backend), facilitating contact between employers and jobseekers. User interface design with Figma, applying UX/UI principles. Implementation of RESTful API for backend interaction management.',
    logo: '/logos/smartovate.png',
    slug: 'DevWork-mobile-app',
    link: ''
  },
  {
    title: 'Library Management System',
    description:
      'Comprehensive web application using Django framework for managing library catalogs, loans, and user accounts. Integrated SQL database with optimized schema design for efficient data management. Implemented user authentication, authorization, and role-based access control.',
    logo: '/logos/libr.jpeg',
    slug: 'library-management-django',
    link: ''
  },
  {
    title: 'Private Cloud Infrastructure',
    description:
      'Configured private cloud infrastructure using OpenNebula to manage virtual machines and network resources. Optimized network connectivity and performance, achieving 15% reduction in latency. Implemented security best practices and access control mechanisms.',
    logo: '/logos/openn.jpg',
    slug: 'private-cloud-opennebula',
    link: ''
  },
];
