export interface Project {
  title: string;
  description: string;
  logo: string;
  slug: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: 'Devworks',
    description:
      'Development of a mobile application similar to Upwork, using Flutter for the frontend and Laravel for the backend, facilitating connections between employers and job seekers.',
    logo: '/logos/devworks.png',
    slug: 'devworks',
    link: 'https://github.com/your-repo/devworks'
  },
  {
    title: 'Cloud Infrastructure with OpenNebula',
    description:
      'Configuration of a private cloud using OpenNebula, including management of virtual machines, storage, and virtual networks.',
    logo: '/logos/openne.png',
    slug: 'cloud-infrastructure-opennebula',
    link: 'https://github.com/your-repo/devworks'
  },
  {
    title: 'Library Application with Django',
    description:
      'Development of a web application for library management (catalog, loans, users) using Django, with integration of an SQL database for data management.',
    logo: '/logos/librairy.png',
    slug: 'library-application-django',
    link: 'https://github.com/your-repo/devworks'
  },
  {
    title: 'Network Anomaly Detection',
    description: 'Implementation of a monitoring solution on AWS. Collection and analysis of logs to detect network anomalies.',
    logo: '/logos/AWS-Security-.png',
    slug: 'network-anomaly-detection',
    link: 'https://github.com/your-repo/devworks'
  },
];
