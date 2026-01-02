import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Fatma Adel is a Cloud & DevOps Engineer specializing in multi-cloud infrastructure, Kubernetes, and CI/CD automation"
      />
      <meta
        name="keywords"
        content="Fatma Adel, Cloud Engineer, DevOps Engineer, AWS, Azure, Kubernetes, Terraform, portfolio"
      />
      <meta property="og:title" content="Fatma Adel - Cloud & DevOps Engineer" />
      <meta
        property="og:description"
        content="Cloud & DevOps Engineer | AWS, Azure & GCP Certified | Multi-Cloud Architecture Specialist"
      />
      <meta property="og:image" content="https://fatma-adel.vercel.app/og-image.jpg" />
      <meta property="og:url" content="https://fatma-adel.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Fatma Adel - Cloud & DevOps Engineer',
};
