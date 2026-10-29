export interface Project {
  title: string;
  description: string;
  slug: string;
  link: string;
  category: 'Work' | 'Academic' | 'Personal';
  date?: string;
  technologies: { name: string; color?: string }[];
  github?: string;
  demo?: string;
  live?: string;
  metrics?: { label: string; value: string }[];
  featured?: boolean;
  color?: string;
  gradient?: string;
}

export const projects: Project[] = [
  {
    title: 'CinemApp — Full-Stack Movie Platform',
    description:
      'Full-stack MERN application for movie exploration, bookmarks and user management. Features stateless JWT authentication with bcrypt salting, resilient OMDB REST API integration with asynchronous plot enrichment, MongoDB persistence with in-memory fallback, and responsive dark cinema design.',
    slug: 'cinemapp-movie-platform',
    link: 'https://github.com/fa-a11-cmyk/CinemApp',
    github: 'https://github.com/fa-a11-cmyk/CinemApp',
    category: 'Personal',
    date: 'Oct 2026',
    featured: true,
    technologies: [
      { name: 'React.js' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'MongoDB' },
      { name: 'JWT' },
      { name: 'bcrypt' },
      { name: 'OMDB API' },
      { name: 'Vite' }
    ],
    metrics: [
      { label: 'Architecture', value: 'MERN Stack + Stateless JWT' },
      { label: 'API Integration', value: 'OMDB REST API + Batch Enrichment' },
      { label: 'Security', value: 'bcrypt (10 rounds) + Route Guards' }
    ],
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.3), rgba(6, 182, 212, 0.3))'
  },
  {
    title: 'FastPrint Sahline',
    description:
      'Software Engineer (Current). Developing and deploying a comprehensive platform for print management and operations. Building full-stack solution with Next.js frontend and FastAPI backend, PostgreSQL database for reliable data management. Leading development, testing, and deployment of platform features. Implementing modern DevOps practices for seamless CI/CD pipeline.',
    slug: 'fastprint-platform',
    link: '',
    category: 'Work',
    date: 'Oct 2026 – Present',
    featured: true,
    live: 'https://www.fast-print-sahline.com/',
    technologies: [
      { name: 'Next.js' },
      { name: 'FastAPI' },
      { name: 'PostgreSQL' },
      { name: 'TypeScript' },
      { name: 'Python' },
      { name: 'DevOps' },
      { name: 'CI/CD' },
      { name: 'Platform Development' }
    ],
    metrics: [
      { label: 'Status', value: 'Active Development & Deployment' },
      { label: 'Stack', value: 'Next.js + FastAPI + PostgreSQL' }
    ],
    color: '#00d4ff',
    gradient: 'linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(88, 166, 255, 0.3))'
  },
  {
    title: 'Microservices on Kubernetes',
    description:
      'A local Kubernetes demo deploying a containerized frontend and FastAPI service with PostgreSQL and Redis. Includes Helm-based deployments, autoscaling, ingress, GitHub Actions CI/CD, and observability with Prometheus, Grafana, and Loki.',
    slug: 'kubernetes-microservices',
    link: '',
    github: 'https://github.com/fa-a11-cmyk/Kubernets',
    category: 'Personal',
    featured: true,
    technologies: [
      { name: 'Kubernetes' },
      { name: 'Helm' },
      { name: 'Docker' },
      { name: 'FastAPI' },
      { name: 'PostgreSQL' },
      { name: 'Redis' },
      { name: 'Prometheus' },
      { name: 'Grafana' },
      { name: 'Loki' },
      { name: 'GitHub Actions' }
    ],
    color: '#326ce5',
    gradient: 'linear-gradient(135deg, rgba(50, 108, 229, 0.3), rgba(16, 163, 127, 0.3))'
  },
  {
    title: 'BraindCode',
    description:
      'DevOps, Cloud & AI Engineer (Mar – Aug 2026). Built Python and Bash internal tools and reusable modules improving operational reliability. Developed RAG-based internal AI agent for analysis and support. Standardized development, staging and production environments using Terraform/Terragrunt. Deployed containerized workloads with Docker/ECS Fargate via Argo CD. Strengthened AWS security through IMDSv2, KMS, IAM hardening.',
    slug: 'braindcode-devops',
    link: '',
    category: 'Work',
    date: 'Mar 2026 – Aug 2026',
    featured: true,
    live: 'https://braindcode.com/',
    technologies: [
      { name: 'Python' },
      { name: 'Bash' },
      { name: 'Terraform' },
      { name: 'Docker' },
      { name: 'ECS Fargate' },
      { name: 'Argo CD' },
      { name: 'AWS' },
      { name: 'RAG/LLM' }
    ],
    metrics: [
      { label: 'Impact', value: 'Improved operational reliability' },
      { label: 'Environments', value: 'Dev/Staging/Prod standardized' }
    ],
    color: '#58a6ff',
    gradient: 'linear-gradient(135deg, rgba(88, 166, 255, 0.3), rgba(16, 163, 127, 0.3))'
  },
  {
    title: 'StrideMatch',
    description:
      'SaaS Developer & DevOps Engineer (Feb – Jun 2026). Built Python/FastAPI backend services and administration interfaces for white-label SaaS platform. Automated product-catalog enrichment with web-scraping daemons. Developed scan-data recommendation engine with independent delivery of fixes, tests and technical documentation. Platform deployed and live in production.',
    slug: 'stridematch-saas',
    link: '',
    category: 'Work',
    date: 'Feb 2026 – Jun 2026',
    featured: true,
    live: 'https://www.stridematch.io/',
    technologies: [
      { name: 'Python' },
      { name: 'FastAPI' },
      { name: 'Web Scraping' },
      { name: 'Recommendation Engine' },
      { name: 'REST APIs' }
    ],
    metrics: [
      { label: 'Status', value: 'Live in Production' },
      { label: 'Deliverables', value: 'Fixes, Tests, Documentation' }
    ],
    color: '#79c0ff',
    gradient: 'linear-gradient(135deg, rgba(121, 192, 255, 0.3), rgba(255, 107, 53, 0.3))'
  },
  {
    title: 'Kinetonic - Software Developer',
    description:
      'Software Developer (Sep 2025 – Apr 2026). Analyzed functional and technical requirements and translated them into application features. Developed, tested and maintained new features and modules ensuring code quality and application stability. Diagnosed and fixed bugs, refactored code to improve maintainability and performance.',
    slug: 'kinetonic-software',
    link: '',
    category: 'Work',
    date: 'Sep 2025 – Apr 2026',
    live: 'https://kinetonic.tn',
    technologies: [
      { name: 'Full-Stack Development' },
      { name: 'Bug Fixes' },
      { name: 'Code Refactoring' },
      { name: 'Testing' },
      { name: 'Documentation' }
    ],
    gradient: 'linear-gradient(135deg, rgba(100, 200, 200, 0.3), rgba(255, 150, 0, 0.3))'
  },
  {
    title: 'Smartovate - Cloud & DevOps Engineer',
    description:
      'Cloud & DevOps Engineer Intern (Jul – Sep 2025). Automated multi-cloud deployment of Flask/Next.js application across AWS and Azure using Kubernetes, Terraform and automatic failover. Designed cloud backup architecture and implemented disaster recovery mechanisms for AWS. Ran reliability tests and validated restoration procedures.',
    slug: 'smartovate-cloud',
    link: '',
    category: 'Work',
    date: 'Jul 2025 – Sep 2025',
    live: 'https://www.smartovate.com/fr',
    technologies: [
      { name: 'Kubernetes' },
      { name: 'Terraform' },
      { name: 'AWS' },
      { name: 'Azure' },
      { name: 'Disaster Recovery' }
    ],
    metrics: [
      { label: 'Architecture', value: 'Multi-Cloud DR Design' }
    ]
  },
  {
    title: 'Kinetonic - Full-Stack Developer',
    description:
      'Full-Stack Developer Intern (Jun – Aug 2024). Built an automated hosting solution to streamline application deployment, configuration and scaling. Improved efficiency, consistency and reliability through REST APIs and Amazon Web Services (AWS) within hybrid delivery team.',
    slug: 'kinetonic-fullstack',
    link: '',
    category: 'Work',
    date: 'Jun 2024 – Aug 2024',
    technologies: [
      { name: 'Full-Stack Development' },
      { name: 'AWS' },
      { name: 'REST APIs' },
      { name: 'Deployment Automation' },
      { name: 'Infrastructure' }
    ]
  },
  {
    title: 'Flesk - Mobile Application Developer',
    description:
      'Mobile Application Developer Intern (Feb – Jun 2023). Designed and developed a mobile application connecting IT professionals with job opportunities and service providers. Bachelor\'s final-year project demonstrating full mobile development lifecycle and user-centric design principles.',
    slug: 'flesk-mobile',
    link: '',
    category: 'Work',
    date: 'Feb 2023 – Jun 2023',
    technologies: [
      { name: 'Mobile Development' },
      { name: 'UI/UX Design' },
      { name: 'User Authentication' },
      { name: 'Database' },
      { name: 'API Integration' }
    ],
    metrics: [
      { label: 'Scope', value: 'Bachelor\'s Final Year Project' }
    ]
  },
  {
    title: 'IDEF - DevOps Improvement Framework',
    description:
      'Applied process mining and machine learning to real CI/CD logs to improve delivery productivity using DORA metrics. Research combining PM4Py process mining analysis with ML techniques on actual CI/CD pipeline data. Presented findings as a DS2AI 2026 poster at academic conference.',
    slug: 'idef-framework',
    link: '',
    category: 'Academic',
    date: '2026',
    featured: true,
    technologies: [
      { name: 'PM4Py' },
      { name: 'Machine Learning' },
      { name: 'DORA Metrics' },
      { name: 'CI/CD Analysis' },
      { name: 'Process Mining' }
    ],
    metrics: [
      { label: 'Conference', value: 'DS2AI 2026 Poster' }
    ]
  },
  {
    title: 'Monitoring & Observability',
    description:
      'Created CPU and memory dashboards and alerting enhanced by SageMaker-based ML filtering and AWS Lambda automation. Comprehensive observability solution combining Prometheus metrics collection, Grafana visualization, and intelligent ML-based alert filtering for improved operational insights and faster incident response.',
    slug: 'monitoring-observability',
    link: '',
    category: 'Academic',
    featured: true,
    technologies: [
      { name: 'Prometheus' },
      { name: 'Grafana' },
      { name: 'AWS' },
      { name: 'SageMaker' },
      { name: 'Lambda' }
    ],
    metrics: [
      { label: 'Dashboards', value: 'CPU, Memory, Custom' },
      { label: 'Filtering', value: 'ML-Enhanced' }
    ]
  },
  {
    title: 'Private Cloud & Container Orchestration',
    description:
      'Administered compute, networking, storage and Keystone services managing enterprise cloud infrastructure. Orchestrated containerized applications with OpenShift and Kubernetes. Comprehensive hands-on experience with private cloud platforms and modern container technologies for production workload management.',
    slug: 'private-cloud-k8s',
    link: '',
    category: 'Academic',
    featured: true,
    technologies: [
      { name: 'OpenStack' },
      { name: 'Kubernetes' },
      { name: 'OpenShift' },
      { name: 'Container Orchestration' },
      { name: 'Cloud Infrastructure' }
    ]
  },
];
